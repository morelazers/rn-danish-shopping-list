import React from 'react';

class TranslateService {
	
	async getTranslation (fromCode, toCode, text) {
		const url = "https://translate.yandex.net/api/v1.5/tr.json/translate?"
			+ "key=trnsl.1.1.20161018T150612Z.164aded7fc158834.74932f537f0106034fa353d872a56f5eefdddc5c"
			+ "&text=" + text
			+ "&lang=" + fromCode + "-" + toCode;

		const response = await fetch(url, {
	    method: 'GET',
	    headers: {
	      Accept: 'application/json'
	    }
	  });
	  const data = await response.json();

	  return data.text[0];
	}

}

export default (new TranslateService());