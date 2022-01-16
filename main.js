function openPopup() {
  document.getElementById("popup").style = "display: block";
}

function closePopup() {
  document.getElementById("popup").style = "display: none";
}

fetch("test.json")
.then(raw => raw.json())
.then(res => console.log(res))
.catch(err => console.log(err))
