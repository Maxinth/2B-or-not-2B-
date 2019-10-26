const list = document.querySelector("#task-list ul");

// delete items
list.addEventListener("click", e => {
  if (e.target.className === "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// Adding items
const addForm = document.forms["add-task"];

// on Submitting an Entry to be added to the list.
addForm.addEventListener("submit", e => {
  e.preventDefault();
  const FormEntry = addForm.querySelector("input[type=text]");
  const Entry = FormEntry.value;

  //feedback

  const feedBack = document.querySelector(".feedback");
  feedBack.textContent =
    "Kindly enter a value and click the Add button to Continue !";

  // If statement runs only if a value is supplied into the input box, supply nothing and the list isn't updated.
  if (Entry !== "") {
    const newLi = document.createElement("li"); //creating a new list item

    // A new span
    const spanName = document.createElement("span");
    spanName.classList.add("name");
    spanName.textContent = Entry;
    newLi.appendChild(spanName); // Appending the first span to the list-item

    // Second span for the delete functionality
    const spanDelete = document.createElement("span");
    spanDelete.classList.add("delete");
    spanDelete.textContent = "Delete";
    newLi.append(spanDelete); // Appending the button to delete

    list.append(newLi); // Adding the new list-item to the ul

    FormEntry.value = ""; // Clear The entry after each click
    FormEntry.focus(); // Re-assign focus back into the form input field

    feedBack.style.display = "none"; // hide feedback
  } else {
    feedBack.style.display = "block"; // show feedback as nothing has been entered
  }
});

// checkBox Event

const toggleCheck = document.querySelector('.formSub input[type="checkbox"]');
const finalButton = document.querySelector(".formSub button");
const hint = document.querySelector(".formSub small.lead");
const info = toggleCheck.nextElementSibling;

toggleCheck.addEventListener("change", () => {
  if (toggleCheck.checked) {
    finalButton.style.display = "initial"; // its initial state as defined by the css styles applied to it
    list.style.display = "none";
    hint.style.color = "red";
    hint.style.fontWeight = "bold";
    hint.style.display = "block";
    info.classList.remove("text-secondary");
    info.classList.add("text-success");
  } else {
    finalButton.style.display = "none"; // hide the button
    list.style.display = "initial";
    info.classList.remove("text-success");
    info.classList.add("text-secondary");
    hint.style.fontWeight = "normal";
    hint.style.color = "grey";
    hint.style.display = "none";
  }
});

// Search To Filter
const searchBar = document.forms["search-box"].querySelector("input");
searchBar.addEventListener("keyup", e => {
  const term = e.target.value.toLowerCase(); // value entered into the search box in lowercase
  const getList = list.getElementsByTagName("li");

  const arrList = Array.from(getList); // make getList which initally was an HTML collection an array.
  arrList.forEach(eachList => {
    const listTitle = eachList.firstElementChild.textContent; // get textContent of each list entry
    if (listTitle.toLowerCase().indexOf(term) !== -1) {
      // if list entry doesn't contain the value entered in any word or string
      eachList.style.display = "block";
    } else {
      eachList.style.display = "none";
    }
  });
});
