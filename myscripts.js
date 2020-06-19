const createNote = (noteTitle, noteBody) => {
  let ul = document.getElementById("notes");

  let li = document.createElement("li");
  let a = document.createElement("a");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let xButton = document.createElement("button");
  
  xButton.classList.add("delete");

  let xText = document.createTextNode("X");
  let h2TN = document.createTextNode(noteTitle);
  let pTN = document.createTextNode(noteBody);

  h2.appendChild(h2TN);
  p.appendChild(pTN);
  xButton.appendChild(xText);

  a.appendChild(h2);
  a.appendChild(xButton);
  a.appendChild(p);
  a.setAttribute("href", "#");

  li.appendChild(a);
  ul.appendChild(li);
};

const createNoteFromInput = (e) => {
  e.preventDefault();
  let titleInput = document.getElementById("new-note-title-input");
  let bodyInput = document.getElementById("new-note-body-input");

  let noteTitle = titleInput.value;
  let noteBody = bodyInput.value;

  titleInput.value = "";
  bodyInput.value = "";

  if (!noteTitle || !noteBody) {
    alert("Both Title and body of the note must be provided");
    return;
  }

  createNote(noteTitle, noteBody);
};

document
  .getElementById("inputForm")
  .addEventListener("submit", createNoteFromInput, false);
