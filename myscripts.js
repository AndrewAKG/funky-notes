let notesCount = 0;

let itemList = document.getElementById("notes");

let noNotesEl = document.getElementById("no-notes");

const createNote = (noteTitle, noteBody) => {
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
  itemList.appendChild(li);
};

const createNoteFromInput = (e) => {
  e.preventDefault();
  notesCount++;

  if (notesCount > 0) {
    noNotesEl.classList.add("hidden");
  }

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

const removeNote = (e) => {
  if (e.target.classList.contains("delete")) {
    if (
      confirm(
        `Are you sure to delete the "${e.target.previousElementSibling.innerText}" note?`
      )
    ) {
      let li = e.target.parentElement.parentElement;

      itemList.removeChild(li);
      notesCount--;

      if (notesCount < 1) {
        noNotesEl.classList.remove("hidden");
      }
    }
  }
};

document
  .getElementById("inputForm")
  .addEventListener("submit", createNoteFromInput, false);

itemList.addEventListener("click", removeNote);