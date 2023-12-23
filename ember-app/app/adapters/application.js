import AdapterMixin from 'ember-flexberry-data/mixins/adapter';
import OdataAdapter from 'ember-flexberry-data/adapters/odata';
import config from '../config/environment';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default OdataAdapter.extend(AdapterMixin, {
  session: service(),

  host: config.APP.backendUrls.api,
  headers: computed(function() {
    let session = this.get('session');
    if (session.get('isAuthenticated')) {
      return {
        Authorization: `Bearer ${session.get('data.authenticated.token')}`
      }
    }
    else {
      return {};
    }
  }).volatile()
});
