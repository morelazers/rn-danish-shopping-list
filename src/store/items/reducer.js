import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  itemsById: [],
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
  	case types.ITEMS_FETCHED:
  		return state.merge({
  			itemsById: action.itemsArray
  		});
  	case types.ITEM_ADDED:
  		return state.merge({
  			itemsById: action.newItems
  		});
  	case types.ITEM_DELETED:
  		return state.merge({
  			itemsById: action.newItems
  		});
    default:
      return state;
  }
}

export function getItemsById (state) {
	return state.items.itemsById;
}