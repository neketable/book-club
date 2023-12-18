import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СпикерMixin
} from '../mixins/regenerated/models/i-i-s-book-club-спикер';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СпикерMixin, Validations, {
});

defineProjections(Model);

export default Model;
