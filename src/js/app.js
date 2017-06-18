$(document).ready(function(){

	var header = document.querySelector('header');
	var columnA = document.querySelector('.column-a');
	var requestURL = '../src/js/nyregion.json';
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'text';
	request.send();

	request.onload = function() {
		var nyRegionText = request.response;
		var nyRegion = JSON.parse(nyRegionText);
		populateColumns(nyRegion);
	}

	function populateColumns(jsonObj) {
		var page = jsonObj['page'];
		var columnAtext = page.content[1];
		var columnBtext = page.content[2];
		var columnCtext = page.content[3];
		var columns = [columnAtext, columnBtext, columnCtext];

		for(i = 0; i < columns.length; i++) {
			var mySection = document.createElement('section');
			var myH2 = document.createElement('h2');
			var myPara1 = document.createElement('p');
			var myPara2 = document.createElement('p');

			var stories = [];
			var collections = columns[i].collections;

			for (var i = 0; i < collections.length; i++) {
				var story = collections[i];
				stories.push(story);
			}

			myH2.textContent = stories[0]['assets'][0]['headline'];
			myPara1.textContent = stories[0]['assets'][0]['byline'];
			myPara2.textContent = stories[0]['assets'][0]['url'];

			mySection.appendChild(myH2);
			mySection.appendChild(myPara1);
			mySection.appendChild(myPara2);
			columnA.appendChild(mySection);
		}
	}

});
