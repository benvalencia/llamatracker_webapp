import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router, RouterEvent,
  RouterOutlet,
  Event
} from '@angular/router';
import {MenuComponent} from './shared/components/menu/menu.component';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {EnvService} from './services/env/env.service';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {ApiClient, apiClientCreator} from './config/api-client';
import {ApiInterceptor} from './config/api-interceptor';
import {AppCustomPreloader} from './app-routing.preload';
import {EnvServiceProvider} from './services/env/env.service.provider';
import {AppConfig} from './config/app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, MenuComponent,
    TranslateModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    {
      provide: ApiClient,
      useFactory: apiClientCreator,
      deps: [HttpClient, EnvService]
    },
    AppCustomPreloader,
    EnvServiceProvider
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title: string = 'Llamatracker';
  loading: boolean;

  routes = [
    {route: '', label: 'Home'},
    {route: 'search', label: 'Search'},
    {route: 'news', label: 'News'},
    {route: 'shop', label: 'Shop'},
  ]

  constructor(
    private router: Router,
    private translate: TranslateService,
  ) {
    this.loading = true;

    const browserLang: string = this.translate.getBrowserLang() as string;
    const langSupported: string = AppConfig.SUPPORTED_LANGUAGES[browserLang].supported
      ? browserLang
      : AppConfig.DEFAULT_LANG;
    this.translate.use(langSupported);
  }


  ngAfterViewInit() {
      this.router.events.subscribe(
        (event: Event) => {
        switch (true) {
          case event instanceof NavigationStart: {
            this.loading = true;
            break;
          }

          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            this.loading = false;
            break;
          }
          default: {
            break;
          }
        }
      })
  }

  ngOnDestroy() {
    this.router.events.subscribe().unsubscribe();
  }
}
