// SCOPE OBJECT
scopeArr = [];
var scope = {
  name: "About Scope",
  tx1: "A variable’s scope is the part of a program where it is available for use.",
  tx2: "JavaScript allows nested blocks and therefore nested scopes",
  tx3: "Nested scopes create a scope tree or scope chain.",
  tx4: "let and const create block-scoped variables.",
  tx5: "Variables created with var are scoped to their nearest function or the global scope",
  vid: "https://www.youtube.com/embed/bD-62OMzni0",
};
scopeArr.push(scope);
localStorage.setItem("scope", JSON.stringify(scopeArr));

// HOISTING OBJECT
hoistArr = [];
var hoist = {
  name: "About Hoisting",
  tx1: "When the JavaScript engine executes the JavaScript code, it creates the global execution context.",
  tx2: "The global execution context has two phases: creation and execution. During the creation phase, the JavaScript engine moves the variable and function declarations to the top of your code. This feature is known as hoisting in JavaScript.",
  tx3: "Variable hoisting means the JavaScript engine moves the variable declarations to the top of the script.",
  tx4: "Like variables, the JavaScript engine also hoists the function declarations. This means that the JavaScript engine also moves the function declarations to the top of the script.",
  tx5: "The JavaScript engine doesn’t hoist the function expressions and arrow functions",
  vid: "https://www.youtube.com/embed/AplVrrwY1TI",
};
hoistArr.push(hoist);
localStorage.setItem("hoisting", JSON.stringify(hoistArr));

// CONSTRUCTOR FUNCTION
cfArr = [];
var cf = {
  name: "About Constructor Function",
  tx1: "JavaScript constructor function is a regular function used to create multiple similar objects..",
  tx2: "They are a bleuprint builder on which all the similar kind of objects are built.",
  tx3: "The name of a constructor function starts with a capital letter like Person, Document, etc.",
  tx4: "A constructor function should be called only with the new operator.",
  tx5: "Basically, the new operator does the following: Create a new empty object and assign it to the this variable.",
  vid: "https://www.youtube.com/embed/tV7ZqcB9J3Y",
};
cfArr.push(cf);
localStorage.setItem("constructorfunction", JSON.stringify(cfArr));

// PROTOTYPE
protytypeArr = [];
var prototype = {
  name: "About Prototype",
  tx1: "Prototype is a like a container that contains all the inherited properties from Object().",
  tx2: "The Object() function has a property called prototype that references a Object.prototype object",
  tx3: "Every function includes prototype object by default..",
  tx4: "The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function.",
  tx5: "The prototype object is being used by JavaScript engine in two things, 1) to find properties and methods of an object 2) to implement inheritance in JavaScript",
  vid: "https://www.youtube.com/embed/4jb4AYEyhRc",
};
protytypeArr.push(prototype);
localStorage.setItem("prototype", JSON.stringify(protytypeArr));

//When there's no button is clicked, then let's have scope contents as default contents to display on the page ---->
window.addEventListener("load", function () {
  scopecontent = JSON.parse(localStorage.getItem("scope")) || [];
  displayContent(scopecontent, "scope");
});

// We need to fetch the data of Scope/Hoisting/CF/Prototy from their respective localStorage only when the associated button is clicked --->

// Scope
document.getElementById("scope").addEventListener("click", function () {
  scopecontent = JSON.parse(localStorage.getItem("scope")) || [];
  displayContent(scopecontent, "scope");
});

// Hoisting
document.getElementById("hoisting").addEventListener("click", function () {
  hoistcontent = JSON.parse(localStorage.getItem("hoisting")) || [];
  displayContent(hoistcontent, "hoist");
});

// CONSRUCTOR FUNCTION
document
  .getElementById("constructorFunctions")
  .addEventListener("click", function () {
    cfcontent = JSON.parse(localStorage.getItem("constructorfunction")) || [];
    displayContent(cfcontent, "cf");
  });

// PROTOTYPE
document.getElementById("prototype").addEventListener("click", function () {
  protocontent = JSON.parse(localStorage.getItem("prototype")) || [];
  displayContent(protocontent, "proto");
});

//MAIN FUNCTION THAT WOULD BE BUILDING HTML PAGE ---->
function displayContent(data, check) {
  document.getElementById("contentDisplay").innerHTML = null;
  if (check == "scope") {
    data = JSON.parse(localStorage.getItem("scope")) || [];
  } else if (check == "hoisting") {
    data = JSON.parse(localStorage.getItem("hoisting")) || [];
  } else if (check == "cf") {
    data = JSON.parse(localStorage.getItem("constructorfunction")) || [];
  } else if (check == "proto") {
    data = JSON.parse(localStorage.getItem("prototype")) || [];
  }

  data.map(function (element) {
    let heading = document.createElement("h2");
    heading.textContent = element.name;

    let subheading = document.createElement("h4");
    subheading.textContent = "Quick Points to know";

    let contents = document.createElement("ul");
    let pt1 = document.createElement("li");
    pt1.textContent = element.tx1;
    let pt2 = document.createElement("li");
    pt2.textContent = element.tx2;
    let pt3 = document.createElement("li");
    pt3.textContent = element.tx3;
    let pt4 = document.createElement("li");
    pt4.textContent = element.tx4;
    let pt5 = document.createElement("li");
    pt5.textContent = element.tx5;

    let vidHead = document.createElement("h4");
    vidHead.textContent = "Video Explanation";

    let video = document.createElement("iframe");
    video.frameborder = "0";
    video.src = element.vid;

    contents.append(pt1, pt2, pt3, pt4, pt5);

    document
      .getElementById("contentDisplay")
      .append(heading, subheading, contents, vidHead, video);
  });
}
