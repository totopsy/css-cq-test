import {EventEmitter} from 'events';
import {mainDispatcher} from '../dispatchers/main';
import constants from '../constants';

class TransactionsStore extends EventEmitter {
    constructor(){
        super();
    }
    emitChange(){
        this.emit('changeTransactions');
    }
    addChangeListener(callback){
        this.addListener('changeTransactions', callback);
    }
    removeChangeListener(callback){
        this.removeListener('changeTransactions', callback);
    }
}

export const transactionsStore = new TransactionsStore();

transactionsStore.dispatchToken = mainDispatcher.register(function(payload){
});