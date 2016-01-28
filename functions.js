//**1**
//Read about the Array.prototype.sort method. Create a function that can be used 
//with sort. This function should take two strings, and return a value that sort 
//can use to determine which is the longest string. Finally, create an array of 
//strings and try to get it sorted using your new function.

/*var arr = ["hi", "this is the longest string"];

arr.sort(function(a,b){
           return a.length<b.length;
        });
        console.log(arr);
        
//**2**
//Create an array of objects (don’t need to use new here, just regular object 
//literals). These objects will contain a name and email property. Then, run some 
//code that will sort your array by the longest name. Then, run some code that will 
//sort your array by e-mail address in alphabetical order.

var obj1 = {
    name: 'a',
    email: 'ai@email.com',
};
var obj2 = {
    name: 'diiii',
    email: 'd@email.com',
};
var obj3 = {
    name: 'ciii',
    email: 'c@email.com',
};

var arr = [obj1, obj2, obj3];

arr.sort(function(a,b){
  if (a.name.length < b.name.length)
    return -1;
  else if (a.name.length > b.name.length)
    return 1;
        });
console.log(arr);

arr.sort(function(a,b){
  if (a.email < b.email)
    return -1;
  else if (a.email > b.email)
    return 1;
  else 
    return 0;
        });
console.log(arr);

console.log(arr);

// to make unique name/email sort functions

function sortByNameLength (sortArr) { /// modifies original array
    sortArr.sort(function(a,b){         /// sort method modifies original array (all above)
  if (a.name.length < b.name.length)    ///(arr) variable is only here (scope doesn't apply)
    return -1;
  else if (a.name.length > b.name.length)
    return 1;
        });
    return sortArr
    //console.log(arr);
}

var result = sortByNameLength(arr);
*/

//**3**
//Create a function that can be used with Array.prototype.map. This function should 
//take a number and return its square. Then, use this function with map on an array 
//of numbers to check the result.

var numbers = [1, 4, 9];
function square(n) {
    return n*n;
}
var roots = numbers.map(square);

console.log(roots)