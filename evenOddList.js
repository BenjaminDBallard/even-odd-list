let usersWord = "";
let oddList = document.getElementById("odd");
let evenList = document.getElementById("even");

// override new tab on "enter" keypress
function handleSubmit(){
  return false;
}
// Update word to be evaluated
function updateWord(element) {
  usersWord = element.value;

  console.log(usersWord);
}

// evaluate word length and place in list
function wordSubmit() {
  let newListItem = document.createElement("LI");
  newListItem.innerText = usersWord;

  if (usersWord.length % 2 === 0) {
    evenList.appendChild(newListItem);
  } else {
    /*put word in odd list*/
    oddList.appendChild(newListItem);
  }

  usersWord = "";
  document.getElementById("even-odd-form").reset();
  
}

