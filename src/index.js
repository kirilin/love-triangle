/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var num = 0;
  	var trVertex = [];
  	var lOne, lTwo, lThree 

  	preferences.unshift(0);
  	  	
  	for (var i = 1; i < preferences.length; i++) {
    	lOne = preferences[i];
    	lTwo = preferences[lOne];
    	lThree = preferences[lTwo];

    	if (lOne !== lTwo && lOne !== lThree && lTwo !== lThree &&
      		lThree === i) {
      		if (trVertex.indexOf(i) === -1) {
        		trVertex.push(lOne);
        		trVertex.push(lTwo);
        		trVertex.push(lThree);
        		num ++;
      		}
    	}
  	}
  
 	return num;
};
