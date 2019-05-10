// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
});

function hideShow(){
	var keyboard = document.getElementById("kcontainer");
	if(keyboard.style.display == "none"){
		keyboard.style.display = "block";
		$(btnHS).text("Hide");
	}
	else {
		keyboard.style.display = "none";
		$(btnHS).text("Show");
	}
}
