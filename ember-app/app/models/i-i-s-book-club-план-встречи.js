import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПланВстречиMixin
} from '../mixins/regenerated/models/i-i-s-book-club-план-встречи';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПланВстречиMixin, Validations, {
});

defineProjections(Model);

export default Model;
