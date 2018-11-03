Info: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"

//Syntax:
array.join([separator]);

/*The join() method creates and returns a new string by concatenating 
all of the elements in an array (or an array-like object),
separated by commas or a specified separator string.*/

//Examples:
var array = ['Wind', 'Rain', 'Fire'];
array.join();      // 'Wind,Rain,Fire'
array.join(', ');  // 'Wind, Rain, Fire'
array.join(' + '); // 'Wind + Rain + Fire'
array.join('');    // 'WindRainFire'
