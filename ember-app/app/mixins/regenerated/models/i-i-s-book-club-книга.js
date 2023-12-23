import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  название: DS.attr('string'),
  автор: DS.attr('string'),
  количествоСтраниц: DS.attr('number'),
  uRLОбложки: DS.attr('string'),
  uRLОписания: DS.attr('string'),
  теги: DS.attr('string'),
  /**
    Non-stored property.

    @property средняяОценка
  */
  средняяОценка: DS.attr('decimal'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'средняяОценкаCompute' method in model class (outside of this mixin) if you want to compute value of 'средняяОценка' property.

    @method _средняяОценкаCompute
    @private
    @example
      ```javascript
      _средняяОценкаChanged: on('init', observer('средняяОценка', function() {
        once(this, '_средняяОценкаCompute');
      }))
      ```
  */
  _средняяОценкаCompute: function() {
    let result = (this.средняяОценкаCompute && typeof this.средняяОценкаCompute === 'function') ? this.средняяОценкаCompute() : null;
    this.set('средняяОценка', result);
  }
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-book-club-книга.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  автор: {
    descriptionKey: 'models.i-i-s-book-club-книга.validations.автор.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количествоСтраниц: {
    descriptionKey: 'models.i-i-s-book-club-книга.validations.количествоСтраниц.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  uRLОбложки: {
    descriptionKey: 'models.i-i-s-book-club-книга.validations.uRLОбложки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  uRLОписания: {
    descriptionKey: 'models.i-i-s-book-club-книга.validations.uRLОписания.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  теги: {
    descriptionKey: 'models.i-i-s-book-club-книга.validations.теги.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  средняяОценка: {
    descriptionKey: 'models.i-i-s-book-club-книга.validations.средняяОценка.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КнигаE', 'i-i-s-book-club-книга', {
    название: attr('Название', { index: 0 }),
    автор: attr('Автор', { index: 1 }),
    количествоСтраниц: attr('Количество страниц', { index: 2 }),
    uRLОбложки: attr('URL обложки', { index: 3 }),
    uRLОписания: attr('URL описания', { index: 4 }),
    теги: attr('Теги', { index: 5 }),
    средняяОценка: attr('Средняя оценка', { index: 6 })
  });

  modelClass.defineProjection('КнигаL', 'i-i-s-book-club-книга', {
    название: attr('Название', { index: 0 }),
    автор: attr('Автор', { index: 1 }),
    количествоСтраниц: attr('Количество страниц', { index: 2 }),
    теги: attr('Теги', { index: 5 }),
    средняяОценка: attr('Средняя оценка', { index: 6 })
  });
};
