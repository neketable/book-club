import Route from '@ember/routing/route';
import ModalApplicationRouteMixin from 'ember-flexberry/mixins/modal-application-route';
import { inject as service } from '@ember/service';

export default Route.extend(ModalApplicationRouteMixin, {session: service()});
