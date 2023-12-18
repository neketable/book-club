import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаДоклада: DS.attr('date'),
  оценкаКниги: DS.attr('number'),
  uRLПрезентации: DS.attr('string'),
  uRLВидео: DS.attr('string'),
  резенция: DS.attr('string'),
  книга: DS.belongsTo('i-i-s-book-club-книга', { inverse: null, async: false }),
  спикер: DS.belongsTo('i-i-s-book-club-спикер', { inverse: null, async: false }),
  встречаКлуба: DS.belongsTo('i-i-s-book-club-встреча-клуба', { inverse: 'доклад', async: false })
});

export let ValidationRules = {
  датаДоклада: {
    descriptionKey: 'models.i-i-s-book-club-доклад.validations.датаДоклада.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  оценкаКниги: {
    descriptionKey: 'models.i-i-s-book-club-доклад.validations.оценкаКниги.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
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
  резенция: {
    descriptionKey: 'models.i-i-s-book-club-доклад.validations.резенция.__caption__',
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
    датаДоклада: attr('Дата доклада', { index: 0 }),
    оценкаКниги: attr('Оценка книги', { index: 1 }),
    uRLПрезентации: attr('URL презентации', { index: 2 }),
    uRLВидео: attr('URL видео', { index: 3 }),
    резенция: attr('Резенция', { index: 4 }),
    книга: belongsTo('i-i-s-book-club-книга', 'Книга', {
      название: attr('Название', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'название' }),
    спикер: belongsTo('i-i-s-book-club-спикер', 'Спикер', {
      фамилия: attr('Фамилия', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фамилия' })
  });
};
