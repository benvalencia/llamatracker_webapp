interface Map<T> {
  [K: string]: T;
}

interface ILang {
  supported: boolean;
  label: string;
}

export class AppConfig {
  // public static get DATE_FORMAT(): string { return 'DD/MM/YYYY HH:mm:ss'; }
  public static get DEFAULT_LANG(): string {
    return 'en';
  }
  public static get SUPPORTED_LANGUAGES(): Map<ILang> {
    return {
      ca: { supported: false, label: 'Català' },
      en: { supported: true, label: 'English' },
      es: { supported: false, label: 'Español' },
      fr: { supported: false, label: 'Français' },
      it: { supported: false, label: 'Italiano' },
      pt: { supported: false, label: 'Portuges' }
    };
  }
  public static get MAT_TOOLTIP_SHOW_DELAY(): number {
    return 500;
  }
  public static get MAT_TOOLTIP_HIDE_DELAY(): number {
    return 0;
  }

  public static get TOASTR_CONFIG() {
    return {
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      progressBar: true
    };
  }
}

export enum TaskViewModeConfig {
  GRID = 0,
  LIST = 1
}
