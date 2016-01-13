var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher');
var assign = require('react/lib/Object.assign');

var CHANGE_EVENT = 'change';

var BaseStore = assign({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function (cb) {
		this.on(CHANGE_EVENT, cb);
	},

	removeChangeListener: function(cb) {
		this.removeListener(CHANGE_EVENT, cb);
	},
	
	subscribe: function (actionSubscribe) {
		this._dispatchToken = AppDispatcher.register(actionSubscribe());
	},

	getDispatchToken: function () {
		return this._dispatchToken;
	}
});

module.exports = BaseStore;

