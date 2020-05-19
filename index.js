// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Datastructure - Stack Implementation Using Strings</h1><hr>`;


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
  console.log(this.storage.match(/,/g));
  return (this.storage.match(/,/g) || []).length;
}

var myStack = new Stack();
myStack.push('Book');
appDiv.innerHTML+= `Push: Book, Size: ${myStack.size()}<br>`;
myStack.push('Pencil');
appDiv.innerHTML+= `Push: Pencil, Size: ${myStack.size()}<br>`;
myStack.push('Eraser');
appDiv.innerHTML+= `Push: Eraser, Size: ${myStack.size()}<br>`;
myStack.push('Pen');
appDiv.innerHTML+= `Push: Pen, Size: ${myStack.size()}<br><br>`;

appDiv.innerHTML+= `Pop: ${myStack.pop()}, Size: ${myStack.size()}<br>`;
appDiv.innerHTML+= `Pop: ${myStack.pop()}, Size: ${myStack.size()}<br><br>`;

myStack.push('Notebook');
appDiv.innerHTML+= `Push: Notebook, Size: ${myStack.size()}<br><br>`;

appDiv.innerHTML+= `Pop: ${myStack.pop()}, Size: ${myStack.size()}<br>`;