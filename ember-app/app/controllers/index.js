import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
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
})