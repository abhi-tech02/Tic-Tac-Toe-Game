function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;

  playerConfigOverlay.style.display = "block";
  backdropelement.style.display = "block";
}
function closePlayerConfig() {
  playerConfigOverlay.style.display = "none";
  backdropelement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value='';
}

//getting form data by javascript

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("username").trim(); // '   abhinav tiwari   '= 'abhinav tiwari'

  if (!enteredPlayername) {
    //enteredPlayername === ''
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name";
    return;
  }
  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;
  players[editedPlayer - 1].name = enteredPlayername;
  
  closePlayerConfig()
  // if (editedPlayer === 1) {
  //   players[0].name = enteredPlayername;
  // } else {
  //   players[1].name = enteredPlayername;
  // }
}
