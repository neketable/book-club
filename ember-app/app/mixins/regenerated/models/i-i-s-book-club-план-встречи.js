import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаВстречи: DS.attr('date')
});

export let ValidationRules = {
  датаВстречи: {
    descriptionKey: 'models.i-i-s-book-club-план-встречи.validations.датаВстречи.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланВстречиE', 'i-i-s-book-club-план-встречи', {
    датаВстречи: attr('Дата встречи', { index: 0 })
  });

  modelClass.defineProjection('ПланВстречиL', 'i-i-s-book-club-план-встречи', {
    датаВстречи: attr('Дата встречи', { index: 0 })
  });
};
