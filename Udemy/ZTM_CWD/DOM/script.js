var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

document.querySelectorAll('li').forEach((li)=>{
	handleListItem(li);
	return false;
});

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	handleListItem(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDoneClass(event) {
	event.target.classList.toggle('done');
}

function removeListItem(event) {
	event.target.parentElement.remove();
}

function createRemoveButton() {
	var removeButton = document.createElement('span');
	removeButton.appendChild(document.createTextNode('	\u2718'));
	removeButton.className = 'clearItem';
	removeButton.addEventListener('click', removeListItem);
	return removeButton;
}

function handleListItem(li){
	li.addEventListener("click", toggleDoneClass);
	li.appendChild(createRemoveButton());
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);