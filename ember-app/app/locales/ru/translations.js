import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Книжный клуб',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...',
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!',
      components: 'Некоторые компоненты',
      'log-service': {
        title: 'Сервис логирования',
        'app-log': 'Лог приложения',
        'settings-example': 'Пример работы с настройками',
        'log-cleaning': 'Очистка лога'
      },
      users: 'Пользователи приложения',
      localization: 'Локализация',
      log: 'Лог приложения',
      blocking: 'Список блокировок',
      search: {
        'title': 'Авторизация',
        'field-label': 'Название поля',
        'login-placeholder': 'Логин',
        'password-placeholder': 'Пароль',
        'button-caption': 'Войти',
      }
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню',
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек',
          },
          'show-menu': {
            caption: 'Показать меню',
          },
          'hide-menu': {
            caption: 'Скрыть меню',
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык',
          },
        },
        login: {
          caption: 'Вход',
        },
        logout: {
          caption: 'Выход',
        },
        profile: {
          caption: 'Личный кабинет'
        }
      },

      footer: {
        'application-name': 'Книжный клуб',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.',
        },
      },

      sitemap: {
        'application-name': {
          caption: 'Книжный клуб',
          title: 'Книжный клуб',
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.',
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления',
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
