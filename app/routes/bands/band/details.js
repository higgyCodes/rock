import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		willTransition: function(transition) {
			var controller = this.get('controller'),
			leave;

		if (controller.get('isEditing')) {
			leave = window.confirm("You have unsaved changes. Are you sure you want to leave?");
			if (leave) {
				controller.set('isEditing', false);
			} else {
				transition.abort();
			}
		}
	},
		model: function() {
			return this.modelFor('bands.band');
		}
	}
});
