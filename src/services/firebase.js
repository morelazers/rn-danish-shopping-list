import firebase from 'firebase';

class FirebaseService {

	async getItems () {
		let ref = firebase.database().ref('items');
		let response = ref.once('value');
		let items = await response.then((snapshot) => {
			let data = snapshot.val();
			let array = Object.values(data);
			return array.reverse();
		});
		return items;
	}

	async addItem (text, translation) {
		let ref = firebase.database().ref('items');
		const key = ref.push().key;
		let newItem = {
			id: key,	
			text: text,
			translation: translation
		};
		ref.child(key).set(newItem);
		return newItem;
	}

	async deleteItem (id) {
		firebase.database().ref('items/'+id).remove();
	}

}

export default (new FirebaseService());