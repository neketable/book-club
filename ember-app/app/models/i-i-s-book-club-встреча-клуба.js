import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ВстречаКлубаMixin
} from '../mixins/regenerated/models/i-i-s-book-club-встреча-клуба';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ВстречаКлубаMixin, Validations, {
});

defineProjections(Model);

export default Model;
