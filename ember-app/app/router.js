import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-book-club-встреча-клуба-l');
  this.route('i-i-s-book-club-встреча-клуба-e',
  { path: 'i-i-s-book-club-встреча-клуба-e/:id' });
  this.route('i-i-s-book-club-встреча-клуба-e.new',
  { path: 'i-i-s-book-club-встреча-клуба-e/new' });
  this.route('i-i-s-book-club-заявка-l');
  this.route('i-i-s-book-club-заявка-e',
  { path: 'i-i-s-book-club-заявка-e/:id' });
  this.route('i-i-s-book-club-заявка-e.new',
  { path: 'i-i-s-book-club-заявка-e/new' });
  this.route('i-i-s-book-club-книга-l');
  this.route('i-i-s-book-club-книга-e',
  { path: 'i-i-s-book-club-книга-e/:id' });
  this.route('i-i-s-book-club-книга-e.new',
  { path: 'i-i-s-book-club-книга-e/new' });
  this.route('i-i-s-book-club-план-встречи-l');
  this.route('i-i-s-book-club-план-встречи-e',
  { path: 'i-i-s-book-club-план-встречи-e/:id' });
  this.route('i-i-s-book-club-план-встречи-e.new',
  { path: 'i-i-s-book-club-план-встречи-e/new' });
  this.route('i-i-s-book-club-спикер-l');
  this.route('i-i-s-book-club-спикер-e',
  { path: 'i-i-s-book-club-спикер-e/:id' });
  this.route('i-i-s-book-club-спикер-e.new',
  { path: 'i-i-s-book-club-спикер-e/new' });
  this.route('login');
  this.route('index', { path: '/' });
});

export default Router;
