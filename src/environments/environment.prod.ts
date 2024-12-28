export const environment = {
  production: true,
  apiKey: {
    google: '486416806687-jtl7o5qegtmrcrrjecf3v9j4t61qah6q.apps.googleusercontent.com',
    facebook: '2072401779581815',
  },
  api: {
    authentication : {
      signIn: 'api/auth/signin',
      signUp: 'api/auth/signup',
      google: 'api/auth/google',
      facebook: 'api/auth/facebook'
    },
    user: {
      byId: 'api/user/id/',
      byToken: 'api/user/token',
      update: 'api/user/update',
      activate: 'api/user/activate/',
      deactivate: 'api/user/deactivate/',
      softDelete: 'api/user/soft-delete/',
      delete: 'api/user/delete/'
    },
    contact: {
      list: 'api/contact/list',
      create: 'api/contact/create',
    },
    worker: {
      list: 'api/worker/list',
      create: 'api/worker/create'
    },
    company: {
      admin: {
        list: 'api/company/admin/list'
      }
    },
    widget: {
      contact: {
        counter: 'api/widget/contact/counter'
      }
    }
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
          image: '/assets/images/login/01.jpg',
          alt: 'login image'
        }, {
          image: '/assets/images/login/02.jpg',
          alt: 'login image'
        }, {
          image: '/assets/images/login/03.jpg',
          alt: 'login image'
        }, {
          image: '/assets/images/login/04.jpg',
          alt: 'login image'
        },
      ]

    }
  }
};
