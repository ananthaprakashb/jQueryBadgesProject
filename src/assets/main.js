$(function() {

  $.ajax({
   url: 'https://www.codeschool.com/users/1752939.json',
   dataType: 'jsonp',
   success: function(response) {
     var badges = document.querySelector('#badges');
     response.courses.completed.forEach(function(el){
       var newDiv = document.createElement('div');
       newDiv.className="course";
       var subhead = document.createElement('h3')
       badges.appendChild(newDiv);
     });
   }
 });

});
