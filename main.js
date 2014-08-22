window.boxDrawn = 0;
function aboutMeHandler() {
    if(window.boxDrawn)
        return;
    
    var aboutMeHead = document.createElement('h');
    aboutMeHead.innerHTML = "About Me";
    aboutMeHead.setAttribute('style', "display: inline");
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
    window.boxDrawn = 1;
    
}