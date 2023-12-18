import { Serializer as КнигаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-book-club-книга';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КнигаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
