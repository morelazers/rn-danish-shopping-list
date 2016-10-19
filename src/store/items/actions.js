import _ from 'lodash';
import * as types from './actionTypes';
import * as itemsSelectors from './reducer';
import firebaseService from '../../services/firebase';
import translateService from '../../services/translate';

export function fetchItems () {
  return async(dispatch, getState) => {
    try {
      const itemsArray = await firebaseService.getItems();
      dispatch({ type: types.ITEMS_FETCHED, itemsArray });
    } catch (error) {
      console.error(error);
    }
  };
}

export function addItem (text) {
  return async(dispatch, getState) => {
    if (text == "") return;
    try {
      // get translation
      let translation = await translateService.getTranslation("en", "da", text);
      const newItem = await firebaseService.addItem(text, translation);
      const oldItems = itemsSelectors.getItemsById(getState());
      let newItems = [newItem];
      newItems = newItems.concat(oldItems);
      dispatch({ type: types.ITEM_ADDED, newItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function deleteItem (id) {
  return async(dispatch, getState) => {
    try {
      firebaseService.deleteItem(id);
      let oldItems = itemsSelectors.getItemsById(getState());
      let newItems = oldItems.filter(o => o.id !== id );
      dispatch({ type: types.ITEM_DELETED, newItems });
    } catch (error) {
      console.log(error);
    }
  }
}