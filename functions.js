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
	hidden=document.getElementById("about")
	hidden.style.display = "none";
	hidden=document.getElementById("projects")
	hidden.style.display = "none";
	hidden=document.getElementById("contact")
	hidden.style.display = "none";
}

function showAbout()
{
	hidden=document.getElementById("main")
	hidden.style.display = "none";
	hidden=document.getElementById("about")  //Find the element 
	hidden.style.display = "block";
	hidden=document.getElementById("projects")
	hidden.style.display = "none";
	hidden=document.getElementById("contact")
	hidden.style.display = "none";
}

function showProjects()
{
	hidden=document.getElementById("main")
	hidden.style.display = "none";
	hidden=document.getElementById("about")  //Find the element 
	hidden.style.display = "none";
	hidden=document.getElementById("projects")
	hidden.style.display = "block";
	hidden=document.getElementById("contact")
	hidden.style.display = "none";
}

function showContacts()
{
	hidden=document.getElementById("main")
	hidden.style.display = "none";
	hidden=document.getElementById("about")  //Find the element 
	hidden.style.display = "none";
	hidden=document.getElementById("projects")
	hidden.style.display = "none";
	hidden=document.getElementById("contact")
	hidden.style.display = "block";
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
        num = (num + 1) % 4;
		picture.src = folder.concat(pics[num]);
    }, 5000);
}