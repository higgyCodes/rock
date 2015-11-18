import Ember from 'ember';
//import Song from '../../../models/song';


var Song = Ember.Object.extend({ title: '',
rating: 0,
band: ''
});
var blackDog = Song.create({ title: 'Black Dog',
band: 'Led Zeppelin', rating: 3
});
var yellowLedbetter = Song.create({ title: 'Yellow Ledbetter',
band: 'Pearl Jam',
rating: 4
});
var pretender = Song.create({ title: 'The Pretender', band: 'Foo Fighters', rating: 2
});
var SongCollection = Ember.Object.extend({
content: [],
sortProperties: ['rating:desc'],
sortedContent: Ember.computed.sort('content', 'sortProperties'),
});

var songs = SongCollection.create(); songs.get('content').pushObject(blackDog); songs.get('content').pushObject(yellowLedbetter); songs.get('content').pushObject(pretender);
export default Ember.Route.extend({ 
	model: function() {
return this.modelFor('bands.band');
},

actions: {
	createSong: function() {
		var controller = this.get('controller');
		var band = this.modelFor('bands.band');
		var title = controller.get('title');

		var song = Song.create({ title: title, band: band });
		band.get('songs').pushObject(song);
		controller.set('title', '');
	}
}
});
