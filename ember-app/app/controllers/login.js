/* eslint-disable ember/new-module-imports */
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import Ember from 'ember';

const {
  $,
} = Ember;

export default Controller.extend({
  session: service(),
  modalErr: false,

  actions: {
    async login(login, pass) {
      try {
        await this.get('session').authenticate('authenticator:jwt', {
          password: pass,
          login: login
        });
      }
      catch(e) {
        this.send('error', e);
      }

      if (this.get('session.isAuthenticated')) {
        this.transitionToRoute('index');
      }
    },

    error(error) {
      if (error instanceof Error) {
        return true;
      }
      this.set('modalErr', true)
      // this.send('showModalDialog', 'modal/modal-dialog', {
      //   contoller: 'login',
      // });
      this.set('errors', error.json.errors);
      return false;
    },

    closeModal() {
      $('.flexberry-modal').modal('hide dimmer');
      this.set('modalErr', false)
      this.send('removeModalDialog');
    }
  },

  resetErrors() {
    this.set('errors', {});
  }
});
