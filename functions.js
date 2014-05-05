window.onload = function start()
{
    loadImage();
    
    document.getElementById("enterBtn").onclick=function()
    {
        var p=document.getElementById("screen");
        p.style.opacity= "0";
        
        window.setTimeout(function(){
        if (document.getElementById("screen").style.opacity == "0")
    	{
    		enterSite();
    	}}, 2000);
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
	document.getElementById("main_content").style.background = "lavender";
	document.getElementById("mainLink").style.background = "lavender";
	//document.getElementById("border").style.border = "lavender";
		
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
	document.getElementById("main_content").style.background = "lightblue";
	document.getElementById("aboutLink").style.background = "lightblue";
	
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
	document.getElementById("main_content").style.background = "lightgreen";
	document.getElementById("projectsLink").style.background = "lightgreen";
	
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
	document.getElementById("main_content").style.background = "lightyellow";
	document.getElementById("contactLink").style.background = "lightyellow";
}

function loadImage()
{
	var num = 0;
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
    }, 2500);
}