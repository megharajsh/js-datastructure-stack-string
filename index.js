// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1><hr>`;


function Stack() {
  this.storage = ""
}

Stack.prototype.push = function(val) {
  this.storage = this.storage.concat(",", val);
  console.log(this.storage);
}

Stack.prototype.pop = function() {
  var str = this.storage.slice(this.storage.lastIndexOf(',')+1)
  console.log(str);
  this.storage = this.storage.substring(0, this.storage.lastIndexOf(','));
  console.log(this.storage);
  return str;
}

Stack.prototype.size = function() {
  
}

var myStack = new Stack();
myStack.push('Book');
myStack.push('Pencil');
myStack.push('Eraser');
myStack.push('Pen');

myStack.pop();