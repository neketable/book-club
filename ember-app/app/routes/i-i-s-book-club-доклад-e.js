import EditFormRoute from 'ember-flexberry/routes/edit-form';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default EditFormRoute.extend(AuthenticatedRouteMixin, {
  modelProjection: 'ДокладE',
  modelName: 'i-i-s-book-club-доклад'
});
