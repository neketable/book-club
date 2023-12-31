import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  оценкаКниги: DS.attr('number'),
  uRLПрезентации: DS.attr('string'),
  uRLВидео: DS.attr('string'),
  рецензия: DS.attr('string'),
  книга: DS.belongsTo('i-i-s-book-club-книга', { inverse: null, async: false }),
  спикер: DS.belongsTo('i-i-s-book-club-спикер', { inverse: null, async: false }),
  встречаКлуба: DS.belongsTo('i-i-s-book-club-встреча-клуба', { inverse: 'доклад', async: false })
});

export let ValidationRules = {
  оценкаКниги: {
    descriptionKey: 'models.i-i-s-book-club-доклад.validations.оценкаКниги.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true, gte: 1, lte: 10 }),
    ],
  },
  uRLПрезентации: {
    descriptionKey: 'models.i-i-s-book-club-доклад.validations.uRLПрезентации.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  uRLВидео: {
    descriptionKey: 'models.i-i-s-book-club-доклад.validations.uRLВидео.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  рецензия: {
    descriptionKey: 'models.i-i-s-book-club-доклад.validations.рецензия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  книга: {
    descriptionKey: 'models.i-i-s-book-club-доклад.validations.книга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спикер: {
    descriptionKey: 'models.i-i-s-book-club-доклад.validations.спикер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  встречаКлуба: {
    descriptionKey: 'models.i-i-s-book-club-доклад.validations.встречаКлуба.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокладE', 'i-i-s-book-club-доклад', {
    оценкаКниги: attr('Оценка книги', { index: 1 }),
    uRLПрезентации: attr('URL презентации', { index: 2 }),
    uRLВидео: attr('URL видео', { index: 3 }),
    рецензия: attr('Рецензия', { index: 4 }),
    книга: belongsTo('i-i-s-book-club-книга', 'Книга', {
      название: attr('Название', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'название' }),
    спикер: belongsTo('i-i-s-book-club-спикер', 'Спикер', {
      fullName: attr('FullName', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'fullName' })
  });
  modelClass.defineProjection('ДокладL', 'i-i-s-book-club-доклад', {
    оценкаКниги: attr('Оценка книги', { index: 1 }),
    uRLПрезентации: attr('URL презентации', { index: 2 }),
    uRLВидео: attr('URL видео', { index: 3 }),
    рецензия: attr('Рецензия', { index: 4 }),
    книга: belongsTo('i-i-s-book-club-книга', 'Название', {
      название: attr('Название', { index: 5 })
    }, { index: -1, hidden: true }),
    спикер: belongsTo('i-i-s-book-club-спикер', 'FullName', {
      fullName: attr('Спикер', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
