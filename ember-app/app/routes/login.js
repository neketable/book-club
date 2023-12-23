import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  model() {
    return {
      password: '',
      login: ''
    }
  },

  resetController(controller, isExiting) {
    this._super(...arguments);
    if (isExiting) {
      controller.resetErrors();
    }
  }
});
