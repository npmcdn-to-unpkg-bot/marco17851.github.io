window.onload = function start()
{

}

function showSection(num)
{
	var header, show;
	if (num == 1){
		header=document.getElementById("about_link");
		show=document.getElementById("about_section");
		if (show.style.display == "none"){
			show.style.display = "block";
			header.style.backgroundColor = 'rgba(30, 40, 50, 0.9)';
		} else {
			show.style.display = "none";
			header.style.backgroundColor = 'rgba(95, 100, 105, 0.7)';
		}
	} else {
		header=document.getElementById("about_link");
		show=document.getElementById("about_section");
		show.style.display = "none";
		header.style.backgroundColor = 'rgba(95, 100, 105, 0.7)';
	}
	if (num == 2){
		header=document.getElementById("project_link");
		show=document.getElementById("project_section");
		if (show.style.display == "none"){
			show.style.display = "block";
			header.style.backgroundColor = 'rgba(30, 40, 50, 0.9)';
		} else {
			show.style.display = "none";
			header.style.backgroundColor = 'rgba(95, 100, 105, 0.7)';
		}
	} else {
		header=document.getElementById("project_link");
		show=document.getElementById("project_section");
		show.style.display = "none";
		header.style.backgroundColor = 'rgba(95, 100, 105, 0.7)';
	}
}

function openContactMenu()
{
	var menu=document.getElementById('contact_menu');
	menu.style.display = 'inline-block';
}

function exitContactMenu()
{
	var menu=document.getElementById('contact_menu');
	menu.style.display = 'none';
}