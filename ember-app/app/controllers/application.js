import Controller from '@ember/controller';
import $ from 'jquery';
import { computed, observer } from '@ember/object';
import { isNone } from '@ember/utils';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';
import config from '../config/environment';



export default Controller.extend({
  session: service(),
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.book-club.caption'),
          title: i18n.t('forms.application.sitemap.book-club.title'),
          children: [{
            link: 'i-i-s-book-club-спикер-l',
            caption: i18n.t('forms.application.sitemap.book-club.i-i-s-book-club-спикер-l.caption'),
            title: i18n.t('forms.application.sitemap.book-club.i-i-s-book-club-спикер-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-book-club-заявка-l',
            caption: i18n.t('forms.application.sitemap.book-club.i-i-s-book-club-заявка-l.caption'),
            title: i18n.t('forms.application.sitemap.book-club.i-i-s-book-club-заявка-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-book-club-план-встречи-l',
            caption: i18n.t('forms.application.sitemap.book-club.i-i-s-book-club-план-встречи-l.caption'),
            title: i18n.t('forms.application.sitemap.book-club.i-i-s-book-club-план-встречи-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-book-club-встреча-клуба-l',
            caption: i18n.t('forms.application.sitemap.book-club.i-i-s-book-club-встреча-клуба-l.caption'),
            title: i18n.t('forms.application.sitemap.book-club.i-i-s-book-club-встреча-клуба-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-book-club-книга-l',
            caption: i18n.t('forms.application.sitemap.book-club.i-i-s-book-club-книга-l.caption'),
            title: i18n.t('forms.application.sitemap.book-club.i-i-s-book-club-книга-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),

  /**
    Locales supported by application.

    @property locales
    @type String[]
    @default ['ru', 'en']
  */
  locales: undefined,

  /**
    Themes supported by application.
    @property themes
    @type String[]
    @default ['purple', 'dark', 'default']
  */
  themes: undefined,

  /**
    Application usermenu.

    @property itemsUserMenu
    @type Object
  */
  itemsUserMenu: computed('i18n.locale', function() {
    let i18n = this.get('i18n');
    let rootItem = {
      icon: 'dropdown icon',
      title: i18n.t('forms.application.header.profile.caption'),
      iconAlignment: 'right',
      items: []
    };
    let device = this.get('device');
    if (device.type() === 'phone') {
      rootItem = {
        icon: '',
        title: '',
        iconAlignment: 'right',
        items: []
      };
    }

    let itemsUserMenu = {
      title: i18n.t('forms.application.header.logout.caption'),
      items: null
    };

    rootItem.items[rootItem.items.length] = itemsUserMenu;
    return [rootItem];
  }),

  /**
    Handles changes in userSettingsService.isUserSettingsServiceEnabled.

    @method _userSettingsServiceChanged
    @private
  */
  _userSettingsServiceChanged: observer('userSettingsService.isUserSettingsServiceEnabled', function() {
    this.get('target.router').refresh();
  }),

  /**
    Initializes controller.
  */
  init() {
    this._super(...arguments);

    this.set('themes', ['default', 'dark', 'purple']);

    let i18n = this.get('i18n');
    if (isNone(i18n)) {
      return;
    }

    this.set('locales', ['ru', 'en']);

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.includes(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  },

  /**
    Service that triggers objectlistview events.

    @property objectlistviewEventsService
    @type Service
  */
  objectlistviewEventsService: service('objectlistview-events'),

  /**
    Service for managing the state of the application.

    @property appState
    @type AppStateService
  */
  appState: service(),

  actions: {
    /**
      Call `updateWidthTrigger` for `objectlistviewEventsService`.

      @method actions.updateWidth
    */
    updateWidth() {
      this.get('objectlistviewEventsService').updateWidthTrigger();
    },

    /**
      Toggles application sitemap's side bar.

      @method actions.toggleSidebar
    */
    toggleSidebar() {
      let sidebar = $('.ui.sidebar.main.menu');
      sidebar.sidebar('toggle');
      sidebar.toggleClass('sidebar-mini');

      $('.full.height').toggleClass('content-opened');

      $('.sidebar.icon .text_menu').toggleClass('hidden');
      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.bgw-opacity').toggleClass('hidden');

      // For reinit overflowed tabs.
      $(window).trigger('resize');
    },

    /**
      Select themes.
      @method actions.changeTheme
    */
    changeTheme(value) {
      let sheet = document.querySelector('#theme');
      if (!sheet) {
        return;
      }

      let rootURL = config.rootURL;
      sheet.setAttribute('href', `${rootURL}assets/${value}.css`);
    },

    /**
      Осуществляет выход текущего пользователя из приложения и переход к логин-форме.

      @method actions.logout
    */
    logout() {
      let session = this.get('session');
      session.invalidate();
      this.transitionToRoute('login');
    },

    onMenuItemClick(e) {
      let namedItemSpans = $(e.currentTarget).find('span');
      if (namedItemSpans.length <= 0) {
        return;
      }

      let i18n = this.get('i18n');
      let namedSetting = namedItemSpans.get(0).innerText;

      switch (namedSetting) {
        case i18n.t('forms.application.header.logout.caption').toString(): {
          this.send('logout');
          break;
        }
      }
      return null;
    },

    /**
      Toggles application sitemap's side bar in mobile view.

      @method actions.toggleSidebarMobile
    */
    toggleSidebarMobile() {
      $('.ui.sidebar.main.menu').sidebar('toggle');

      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.sidebar.icon').toggleClass('hidden-text');
      $('.bgw-opacity').toggleClass('hidden');

      if (!this.get('_hideEventIsAttached')) {
        $('.ui.sidebar.main.menu').sidebar('attach events', '.ui.sidebar.main.menu .item a', 'hide');
        this.set('_hideEventIsAttached', true);
      }
    }
  }
});
