function openPopup() {
  document.getElementById("popup").style = "display: block";
}

function closePopup() {
  document.getElementById("popup").style = "display: none";
}

;(async function() {
  let vids = await get("youtube", "vlog");
  console.log(vids);
})();
