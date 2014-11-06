window.aboutMeBoxDrawn = 0;
window.projectsBoxDrawn = 0;
function aboutMeHandler() {
    if(window.aboutMeBoxDrawn)
        return;
    
    var aboutMeHead = document.createElement('h');
    aboutMeHead.innerHTML = "About Me";
    aboutMeHead.setAttribute('style', "display: inline");
    aboutMeHead.setAttribute('id', 'aboutmehead');
    document.getElementById('thecontainer').appendChild(aboutMeHead);
    
    var imageHolder = document.createElement('div');
    imageHolder.setAttribute('id', "imageholder");
    imageHolder.setAttribute('style', "display: inline");
    imageHolder.innerHTML = "<img src='ab.jpg' width=380px></img>";
    document.getElementById('thecontainer').appendChild(imageHolder);
    
    var aboutMeContent = document.createElement('p');
    aboutMeContent.setAttribute('id', "aboutmecontent");
    aboutMeContent.innerHTML =
        "&nbsp; &nbsp; I'm an aspiring computer engineer and college student at the University of Maryland.  When I'm not writing code, I'm often biking, running, or swimming as part of triathlon training.  This website has links to my work, resume, and contact information."
    document.getElementById('thecontainer').appendChild(aboutMeContent);

    if(window.projectsBoxDrawn) {
    	document.getElementById('thecontainer').removeChild(document.getElementById('projectshead'));
    	document.getElementById('thecontainer').removeChild(document.getElementById('projectscontent'));
    	document.getElementById('thecontainer').removeChild(document.getElementById('projectssubhead1'));
    	window.projectsBoxDrawn = 0;
    }

    window.aboutMeBoxDrawn = 1;
    
}

function projectsHandler() {
	if(window.projectsBoxDrawn)
		return;

	var projectsHead = document.createElement('h');
	projectsHead.innerHTML = "Projects<br/><br/>";
	projectsHead.setAttribute('style', "display: inline");
	projectsHead.setAttribute('id', 'projectshead');
	document.getElementById('thecontainer').appendChild(projectsHead);

	var projectsSubHead1 = document.createElement('sh');
	projectsSubHead1.innerHTML = "<a href='http://roadbuilder.abarghi.com'>RoadBuilder</a>";
	projectsSubHead1.setAttribute('style', "display: inline");
	projectsSubHead1.setAttribute('id', 'projectssubhead1');
	document.getElementById('thecontainer').appendChild(projectsSubHead1);

	var projectsContent = document.createElement('p');
	projectsContent.setAttribute('id', 'projectscontent');
	projectsContent.innerHTML =
		"RoadBuilder is a road network simulator I developed as a research student at TJHSST.  Its source is available on GitHub.";
	document.getElementById('thecontainer').appendChild(projectsContent);

	if(window.aboutMeBoxDrawn == 1) {
		document.getElementById('thecontainer').removeChild(document.getElementById('aboutmehead'));
		document.getElementById('thecontainer').removeChild(document.getElementById('imageholder'));
		document.getElementById('thecontainer').removeChild(document.getElementById('aboutmecontent'));
		window.aboutMeBoxDrawn = 0;
	}
	window.projectsBoxDrawn = 1;
}