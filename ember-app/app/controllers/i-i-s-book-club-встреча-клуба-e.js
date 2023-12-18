import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-book-club-встреча-клуба-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      let updateLookupValue = this.get('actions.updateLookupValue').bind(this);
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-book-club-доклад+книга':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'название',
            required: true,
            relationName: 'книга',
            projection: 'КнигаL',
            autocomplete: true,
            updateLookupValue: updateLookupValue
          };
          break;

        case 'i-i-s-book-club-доклад+спикер':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фамилия',
            required: true,
            relationName: 'спикер',
            projection: 'СпикерL',
            autocomplete: true,
            updateLookupValue: updateLookupValue
          };
          break;

      }
    }

    return cellComponent;
  },
});
