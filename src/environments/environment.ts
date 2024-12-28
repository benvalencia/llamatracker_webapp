// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: {
    google: '183152507346-v00otvc138vg4ko67cibst218bsrc9ni.apps.googleusercontent.com',
    facebook: '639964903775514',
  },
  api: {
    shop : {
      dailyShop: 'shop/daily-shop',
    },
    search : {
      profile: 'search/profile/:id',
      news: 'search/news/:id',
    },
    user : {
      profile: 'user/:id',
    },
  },
  images : {
    identity: {
      logo: '/assets/icons/identity/analyse_base_icon.png'
    },
    social: {
      google: '/assets/icons/social/google-icon-100x100.png',
      facebook: '/assets/icons/social/facebook-icon-100x100.png'
    },
    background: {
      login: [
        {
          image: '../assets/images/login/01.jpg',
          alt: 'login image'
        }, {
          image: '../assets/images/login/02.jpg',
          alt: 'login image'
        }, {
          image: '../assets/images/login/03.jpg',
          alt: 'login image'
        }, {
          image: '../assets/images/login/04.jpg',
          alt: 'login image'
        },
      ]

    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
