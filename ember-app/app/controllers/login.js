import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

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
    },

    error(error) {
      if (error instanceof Error) {
        return true;
      }

      this.set('errors', error.json.errors);
      return false;
    }
  },

  resetErrors() {
    this.set('errors', {});
  }
});
