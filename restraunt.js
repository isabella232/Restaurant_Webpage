document.getElementById('button').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

var modal = document.getElementById("modal");

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}