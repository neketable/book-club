import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISBookClubВстречаКлубаLForm from './forms/i-i-s-book-club-встреча-клуба-l';
import IISBookClubЗаявкаLForm from './forms/i-i-s-book-club-заявка-l';
import IISBookClubКнигаLForm from './forms/i-i-s-book-club-книга-l';
import IISBookClubПланВстречиLForm from './forms/i-i-s-book-club-план-встречи-l';
import IISBookClubСпикерLForm from './forms/i-i-s-book-club-спикер-l';
import IISBookClubВстречаКлубаEForm from './forms/i-i-s-book-club-встреча-клуба-e';
import IISBookClubЗаявкаEForm from './forms/i-i-s-book-club-заявка-e';
import IISBookClubКнигаEForm from './forms/i-i-s-book-club-книга-e';
import IISBookClubПланВстречиEForm from './forms/i-i-s-book-club-план-встречи-e';
import IISBookClubСпикерEForm from './forms/i-i-s-book-club-спикер-e';
import IISBookClubВстречаКлубаModel from './models/i-i-s-book-club-встреча-клуба';
import IISBookClubДокладModel from './models/i-i-s-book-club-доклад';
import IISBookClubЗаявкаModel from './models/i-i-s-book-club-заявка';
import IISBookClubКнигаModel from './models/i-i-s-book-club-книга';
import IISBookClubПланВстречиModel from './models/i-i-s-book-club-план-встречи';
import IISBookClubСпикерModel from './models/i-i-s-book-club-спикер';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-book-club-встреча-клуба': IISBookClubВстречаКлубаModel,
    'i-i-s-book-club-доклад': IISBookClubДокладModel,
    'i-i-s-book-club-заявка': IISBookClubЗаявкаModel,
    'i-i-s-book-club-книга': IISBookClubКнигаModel,
    'i-i-s-book-club-план-встречи': IISBookClubПланВстречиModel,
    'i-i-s-book-club-спикер': IISBookClubСпикерModel,
  },

  'application-name': 'Book-club',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...',
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!',
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu',
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings',
          },
          'show-menu': {
            caption: 'Show menu',
          },
          'hide-menu': {
            caption: 'Hide menu',
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language',
          },
        },
        login: {
          caption: 'Login',
        },
        logout: {
          caption: 'Logout',
        },
      },

      footer: {
        'application-name': 'Book-club',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.',
        },
      },

      sitemap: {
        'application-name': {
          caption: 'Book-club',
          title: 'Book-club',
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.',
        },
        index: {
          caption: 'Home',
          title: '',
        },
        'book-club': {
          caption: 'book-club',
          title: 'book-club',
          'i-i-s-book-club-спикер-l': {
            caption: 'Спикер',
            title: '',
          },
          'i-i-s-book-club-заявка-l': {
            caption: 'Заявка',
            title: '',
          },
          'i-i-s-book-club-план-встречи-l': {
            caption: 'План встречи',
            title: '',
          },
          'i-i-s-book-club-встреча-клуба-l': {
            caption: 'Встреча клуба',
            title: '',
          },
          'i-i-s-book-club-книга-l': {
            caption: 'Книга',
            title: '',
          },
        },
      },
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed',
    },
    'i-i-s-book-club-встреча-клуба-l': IISBookClubВстречаКлубаLForm,
    'i-i-s-book-club-заявка-l': IISBookClubЗаявкаLForm,
    'i-i-s-book-club-книга-l': IISBookClubКнигаLForm,
    'i-i-s-book-club-план-встречи-l': IISBookClubПланВстречиLForm,
    'i-i-s-book-club-спикер-l': IISBookClubСпикерLForm,
    'i-i-s-book-club-встреча-клуба-e': IISBookClubВстречаКлубаEForm,
    'i-i-s-book-club-заявка-e': IISBookClubЗаявкаEForm,
    'i-i-s-book-club-книга-e': IISBookClubКнигаEForm,
    'i-i-s-book-club-план-встречи-e': IISBookClubПланВстречиEForm,
    'i-i-s-book-club-спикер-e': IISBookClubСпикерEForm,
  },

});

export default translations;
