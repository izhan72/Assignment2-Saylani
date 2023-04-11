/*1. Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed
to it.*/


function num1(num) {
  return function (num2) {
    console.log(num + num2);
  }
}
let innerFunction = num1(7);
innerFunction(8);


/*2. Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function searchArray(arr, val) {
  if (arr.length === 0) {
    return false;
  }
  else if (arr[0] === val) {
    return true;
  }
  else {
    return searchArray(arr.slice(1), val);
  }
}
console.log(searchArray(arr, 10));


/*3. Write a function that adds a new paragraph element to the bottom of an
HTML document. The function should take a string argument that will be
used as the text content of the new paragraph element.*/

function addParagraphToDocument(text) {
  const newParagraph = `<p>${text}</p>`;
  document.body.innerHTML += newParagraph;
}
addParagraphToDocument("hello how are you.")


/*4. Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.*/

function addListItemToUnorderedList(text) {
  const unorderedList = document.querySelector('ul');
  const newListItem = `<li>${text}</li>`;
  unorderedList.innerHTML += newListItem;
}
addListItemToUnorderedList('Carrot');



/*5. Write a function that changes the background color of an HTML element.
The function should take two arguments: the first argument is a reference
to the HTML element, and the second argument is a string representing
the new background color.*/
function changeBackgroundColor(element, color) {
  const targetElement = document.querySelector(element);
  if (targetElement) {
    targetElement.style.backgroundColor = color;
  } else {
    console.error('Element not found:', element);
  }
}




/*6. Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.
*/

function savesobjecttolocalStorage(key, object) {
  let objectString = JSON.stringify(object);
  localStorage.setItem(key, objectString);

}
let myObject = {
  name: "izhan",
  age: 20,
  city: "karachi"
}
savesobjecttolocalStorage("myObject", myObject)
console.log(myObject)


/*7. Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object.
*/

function getobjecttolocalStorage(key){
  let string=localStorage.getItem(key);
  let object=JSON.parse(string);
  return object;
}
let myObject1=getobjecttolocalStorage("myObject");
console.log(myObject.name);
console.log(myObject.age);
console.log(myObject.city);










