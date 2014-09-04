window.onload = function start()
{
    loadImage();
    
    document.getElementById("enterBtn").onclick=function()
    {
        var homeScreen = document.getElementById("screen");
        homeScreen.style.opacity= "0";
        
        window.setTimeout(function(){
    		enterSite();
    	}, 2000);
    };
}

function enterSite()
{
	hidden=document.getElementById("screen")
	hidden.style.display = "none";
	showMain()
}

function showMain()
{
	hidden=document.getElementById("main")
	hidden.style.display = "block";
	
	document.getElementById("main_content").style.background = "#893232";
	document.getElementById("mainLink").style.background = "#893232";
		
	hidden=document.getElementById("about")
	hidden.style.display = "none";
	document.getElementById("aboutLink").style.background = "none";
	
	hidden=document.getElementById("projects")
	hidden.style.display = "none";
	document.getElementById("projectsLink").style.background = "none";
	
	hidden=document.getElementById("contact")
	hidden.style.display = "none";
	document.getElementById("contactLink").style.background = "none";
}

function showAbout()
{
	hidden=document.getElementById("main")
	hidden.style.display = "none";
	document.getElementById("mainLink").style.background = "none";
	
	hidden=document.getElementById("about")
	hidden.style.display = "block";
	document.getElementById("main_content").style.background = "#87A96B";
	document.getElementById("aboutLink").style.background = "#87A96B";
	
	hidden=document.getElementById("projects")
	hidden.style.display = "none";
	document.getElementById("projectsLink").style.background = "none";
	
	hidden=document.getElementById("contact")
	hidden.style.display = "none";
	document.getElementById("contactLink").style.background = "none";
}

function showProjects()
{
	hidden=document.getElementById("main")
	hidden.style.display = "none";
	document.getElementById("mainLink").style.background = "none";
	hidden=document.getElementById("about")
	hidden.style.display = "none";
	document.getElementById("aboutLink").style.background = "none";
	
	hidden=document.getElementById("projects")
	hidden.style.display = "block";
	document.getElementById("main_content").style.background = "#71A6D2";
	document.getElementById("projectsLink").style.background = "#71A6D2";
	
	hidden=document.getElementById("contact")
	hidden.style.display = "none";
	document.getElementById("contactLink").style.background = "none";
}

function showContacts()
{
	hidden=document.getElementById("main")
	hidden.style.display = "none";
	document.getElementById("mainLink").style.background = "none";
	
	hidden=document.getElementById("about")
	hidden.style.display = "none";
	document.getElementById("aboutLink").style.background = "none";
	
	hidden=document.getElementById("projects")
	hidden.style.display = "none";
	document.getElementById("projectsLink").style.background = "none";
	
	hidden=document.getElementById("contact")
	hidden.style.display = "block";
	document.getElementById("main_content").style.background = "#734F96";
	document.getElementById("contactLink").style.background = "#734F96";
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
	
	picture = document.getElementById("screenImg");
	
    window.setInterval(function()
    {
        picNum = (picNum + 1) % 4;
		picture.src = folder.concat(pics[picNum]);
		//document.getElementById("screen").style.backgroundImage = 'url('+picture.src+')';
    }, 2500);
}