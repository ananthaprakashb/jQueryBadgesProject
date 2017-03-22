$(function() {

  $.ajax({
   url: 'https://www.codeschool.com/users/1752939.json',
   dataType: 'jsonp',
   success: function(response) {
     var badges = document.querySelector('#badges');
     response.courses.completed.forEach(function(el){
       var newDiv = document.createElement('div');
       newDiv.className="course";
       var subhead = document.createElement('h3');
       subhead.textContent = el.title;
       newDiv.appendChild(subhead);
       var courseImage = document.createElement('img');
       courseImage.src = el.badge;
       newDiv.appendChild(courseImage);
       var button = document.createElement('a');
       button.className = "btn btn-primary";
       button.href= el.url;
       button.target = "_blank";
       button.textContent = "See Course";
       newDiv.appendChild(button);
       badges.appendChild(newDiv);
     });
   }
 });

});
