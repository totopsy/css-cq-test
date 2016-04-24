'use strict';

import {EventEmitter} from 'events';
import {mainDispatcher} from '../dispatchers/main';
import constants from '../constants';

class CategoriesStore extends EventEmitter {
	emitChange(){
		this.emit('changeCategories');
	}
	addChangeListener(callback){
		this.addListener('changeCategories', callback);
	}
	removeChangeListener(callback){
		this.removeListener('changeCategories', callback);
	}
}

export const categoriesStore = new CategoriesStore();

categoriesStore.dispatchToken = mainDispatcher.register(function(payload){

});