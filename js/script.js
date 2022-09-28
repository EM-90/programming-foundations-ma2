//Question 1

var pets = [
  {
    type: "cat",
    age: 5.5,
  },
  {
    type: "dog",
    age: 3.8,
  },
  {
    type: "parrot",
    age: 4.0,
  },
];

console.log(pets);

for (let i = 0; i < pets.length; i++) {
  if (pets[i].age >= 4) {
    console.log(pets[i].type);
  }
}

//Question 2

function checkValue(theWord) {
  var wordValue = typeof theWord;

  if (wordValue === "boolean") {
    console.log(theWord);
  } else {
    console.log("Please pass a boolean value in");
  }
}

checkValue("hello");

//Question 3

var subHeading = document.querySelector("h2");
var upDateButton = document.querySelector("button");

function changeSubHeading() {
  subHeading.innerHTML = "update subheading";
  subHeading.style.color = "blue";
}

upDateButton.onclick = changeSubHeading;
