import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаявкаMixin
} from '../mixins/regenerated/models/i-i-s-book-club-заявка';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаявкаMixin, Validations, {
});

defineProjections(Model);

export default Model;
