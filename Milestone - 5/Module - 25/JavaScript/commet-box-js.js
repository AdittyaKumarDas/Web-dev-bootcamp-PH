//Step - 1:-  First Button making then click handling
document.getElementById("submit-btn").addEventListener("click", function () {
  console.log("button clicked");
  //Step - 2:-    get the value form input field
  const inputField = document.getElementById("input-field");
  console.log(inputField);
  const inputValue = inputField.value;
  console.log(inputValue);

  //Step - 3:-    Find the parent node for publish comment
  const commentDiv = document.getElementById("comment-div");
  console.log(commentDiv);

  //   Step - 4:- Create a new paragraph tag and then set the value
  const newParagraph = document.createElement("p");

  newParagraph.innerText = inputValue;
  newParagraph.classList.add("comment"); //Comment add in the comment class

  //   Step - 5 :- Connect paragraph With parent Node

  commentDiv.appendChild(newParagraph);

  //   Step - 6:- Clean comment Box after publish
  inputField.value = " ";
});
