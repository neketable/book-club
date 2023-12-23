import EditFormNewRoute from 'ember-flexberry/routes/edit-form-new';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default EditFormNewRoute.extend(AuthenticatedRouteMixin, {
  modelProjection: 'КнигаE',
  modelName: 'i-i-s-book-club-книга',
  templateName: 'i-i-s-book-club-книга-e',
});
