import { Serializer as СпикерSerializer } from
  '../mixins/regenerated/serializers/i-i-s-book-club-спикер';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СпикерSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
