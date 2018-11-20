document.addEventListener('DOMContentLoaded', function() {
  var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var posts = JSON.parse(this.responseText).posts;
        // Add the contents of options[0] to #foo:
        makeUL(posts);
      }
    };
    xmlhttp.open('GET', 'https://public-api.wordpress.com/rest/v1.1/sites/ecobricksuk.wordpress.com/posts');
    xmlhttp.send();
})


function makeUL(array) {
  
    
    for (var i = 0; i < array.length; i++) {
        var div = document.createElement('div');
        // Create the list item:
        var heading = document.createElement('h2');
        heading.style.marginTop = "10%";
        heading.appendChild(document.createTextNode(array[i].title));
        div.appendChild(heading)
      
        var date = document.createElement('p');
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        date.appendChild(document.createTextNode(new Date(array[i].date).toLocaleDateString('gb-GB', options)));
        date.style.fontWeight = 900
        div.appendChild(date);

        
        div.insertAdjacentHTML('beforeend', array[i].content)
      
        div.appendChild(document.createElement('hr'));
      
        document.getElementById('blog').appendChild(div)
      
    }
}


