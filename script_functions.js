window.onload = function start()
{
    //loadImage();
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

function loadImage()
{
	var picNum = 0;
	var folder = "images/screenImages/";
	var pics = new Array();
	
	pics[0] = "notre_dame.jpg";
	pics[1] = "eiffel_tower.jpg";
	pics[2] = "louvre.jpg";
	pics[3] = "fnac_view.jpg";
	
	picture = document.getElementById("main_screen");
	
    window.setInterval(function()
    {
        picNum = (picNum + 1) % 4;
		picture.src = folder.concat(pics[picNum]);
    }, 2500);
}