function addTop() {

    // get show div and input value 
    var show = document.getElementById('show');
    var text = document.getElementById('text').value;

    // create a para by document.createElement
    var paraCreated = document.createElement('p');

    // created a text for inserting 
    var paraText = document.createTextNode(text);

    // insert paraText into paraCreated
    paraCreated.appendChild(paraText);

    // add in first position 
    show.insertBefore(paraCreated, show.children[1]);

}

function addBottom() {

    // get show div and input value 
    var show = document.getElementById('show');
    var text = document.getElementById('text').value;

    // create a para by document.createElement
    var paraCreated = document.createElement('p');

    // created a text for inserting 
    var paraText = document.createTextNode(text);

    // insert paraText into paraCreated
    paraCreated.appendChild(paraText);

    // add in the last 
    show.appendChild(paraCreated);

}