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