var addButton = document.querySelector("#addOption");
var items = document.querySelector(".items");
var dropbox = document.querySelector(".dropbox");
var submitReport = document.querySelector("#submitReport");
var notifBox = null;

addButton.onclick = function() {
    dropbox.style.display = "block";
};

submitReport.onclick = function() {
    dropbox.style.display = "none";
    var head = document.getElementsByName("lName")[0].value;
    var link = document.getElementsByName("lAddress")[0].value;

    var pattern = /^((http|https|ftp):\/\/)/;

    if(!pattern.test(link)) {
        link = "http://" + link;
    }

    console.log(link);
    if(head !== "" || link !=="" || head !== null || link !== null)
    {
        var newLink = document.createElement("li");
        newLink.setAttribute("class","allLinks");
        var linkButton = document.createElement('button');
        linkButton.setAttribute('onclick',"openNewTab('"+ link +"');");
        var notifBar = document.createElement('div');
        notifBar.setAttribute('class',"notificationBox");
        var span = document.createElement("span");
        var spanContent = document.createTextNode(head);
        span.appendChild(spanContent);
        linkButton.appendChild(span);
        newLink.appendChild(linkButton);
        items.appendChild(newLink);

        newLink.appendChild(notifBar);
        notifBox = notifBar;
    }
}

window.addEventListener('click', function(e){
    if(!document.querySelector(".dropDown").contains(e.target)) {
        dropbox.style.display = "none";
    }
});



function openNewTab(link) {
    window.open(link, '_blank').focus();
}
// Fix the notification option
// Add data to jason docs
