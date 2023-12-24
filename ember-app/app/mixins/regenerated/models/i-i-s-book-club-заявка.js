import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаявки: DS.attr('date'),
  книга: DS.belongsTo('i-i-s-book-club-книга', { inverse: null, async: false }),
  спикер: DS.belongsTo('i-i-s-book-club-спикер', { inverse: null, async: false })
});

export let ValidationRules = {
  датаЗаявки: {
    descriptionKey: 'models.i-i-s-book-club-заявка.validations.датаЗаявки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  книга: {
    descriptionKey: 'models.i-i-s-book-club-заявка.validations.книга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спикер: {
    descriptionKey: 'models.i-i-s-book-club-заявка.validations.спикер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаявкаE', 'i-i-s-book-club-заявка', {
    датаЗаявки: attr('Дата заявки', { index: 0 }),
    книга: belongsTo('i-i-s-book-club-книга', 'Книга', {
      название: attr('Название', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'название' }),
    спикер: belongsTo('i-i-s-book-club-спикер', 'Спикер', {
      fullName: attr('FullName', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'fullName' })
  });

  modelClass.defineProjection('ЗаявкаL', 'i-i-s-book-club-заявка', {
    датаЗаявки: attr('Дата заявки', { index: 0 }),
    книга: belongsTo('i-i-s-book-club-книга', 'Название', {
      название: attr('Название', { index: 1 })
    }, { index: -1, hidden: true }),
    спикер: belongsTo('i-i-s-book-club-спикер', 'FullName', {
      fullName: attr('Спикер', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
