window.onload = function start()
{
	
}

function showSection(num)
{
	if (num == 1){
		show=document.getElementById("about_section")
		if (show.style.display == "none"){
			show.style.display = "block";
		} else {
			show.style.display = "none";
		}
	} else {
		show=document.getElementById("about_section")
		show.style.display = "none";
	}
	if (num == 2){
		show=document.getElementById("project_section")
		if (show.style.display == "none"){
			show.style.display = "block";

		} else {
			show.style.display = "none";
		}
	} else {
		show=document.getElementById("project_section")
		show.style.display = "none";
	}
	if (num == 3){
		show=document.getElementById("contact_section")
		if (show.style.display == "none"){
			show.style.display = "block";

		} else {
			show.style.display = "none";
		}
	} else {
		show=document.getElementById("contact_section")
		show.style.display = "none";
	}
}