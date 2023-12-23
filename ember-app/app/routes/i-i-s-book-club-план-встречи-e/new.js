import EditFormNewRoute from 'ember-flexberry/routes/edit-form-new';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default EditFormNewRoute.extend(AuthenticatedRouteMixin, {
  modelProjection: 'ПланВстречиE',
  modelName: 'i-i-s-book-club-план-встречи',
  templateName: 'i-i-s-book-club-план-встречи-e',
});
