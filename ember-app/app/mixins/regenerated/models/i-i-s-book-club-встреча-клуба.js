import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаВстречи: DS.attr('date'),
  доклад: DS.hasMany('i-i-s-book-club-доклад', { inverse: 'встречаКлуба', async: false })
});

export let ValidationRules = {
  датаВстречи: {
    descriptionKey: 'models.i-i-s-book-club-встреча-клуба.validations.датаВстречи.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  доклад: {
    descriptionKey: 'models.i-i-s-book-club-встреча-клуба.validations.доклад.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВстречаКлубаE', 'i-i-s-book-club-встреча-клуба', {
    датаВстречи: attr('Дата встречи', { index: 0 }),
    доклад: hasMany('i-i-s-book-club-доклад', 'Доклад', {
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
    })
  });

  modelClass.defineProjection('ВстречаКлубаL', 'i-i-s-book-club-встреча-клуба', {
    датаВстречи: attr('Дата встречи', { index: 0 })
  });
};
