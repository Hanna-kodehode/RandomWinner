// Participants
const participants = [];

function addParticipant() {
  const nameInput = document.querySelector("#nameInput");
  const name = nameInput.value;

  if (name.length > 0) {
    participants.push(name);
    updateParticipantList();
    nameInput.value = "";
  }
}

//Participant list
function updateParticipantList() {
  const participantList = document.querySelector("#participants");
  participantList.replaceChildren();

  for (let i = 0; i < participants.length; i++) {
    const li = document.createElement("li");
    li.textContent = participants[i];

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.style.backgroundColor = "red";
    removeButton.style.color = "white";
    removeButton.style.cursor = "pointer";
    removeButton.style.borderRadius = "10px";

    removeButton.addEventListener("click", () => removeParticipant(i));

    li.appendChild(removeButton);
    participantList.appendChild(li);
  }
}

function removeParticipant(index) {
  participants.splice(index, 1);
  updateParticipantList();
}

// Pick a random winner
function pickWinner() {
  const randomIndex = Math.floor(Math.random() * participants.length);
  const winner = participants[randomIndex];

  document.querySelector(
    "#winner"
  ).textContent = `And the winner is: ${winner}! Congratulations!!`;
}
