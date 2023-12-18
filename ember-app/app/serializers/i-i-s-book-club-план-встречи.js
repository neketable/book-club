import { Serializer as ПланВстречиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-book-club-план-встречи';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПланВстречиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
