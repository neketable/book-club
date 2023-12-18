import { Serializer as ВстречаКлубаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-book-club-встреча-клуба';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВстречаКлубаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
