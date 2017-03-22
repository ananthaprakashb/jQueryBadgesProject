$(function() {

  $.ajax({
   url: 'https://www.codeschool.com/users/1752939.json',
   dataType: 'jsonp',
   success: function(response) {
     var badges = document.querySelector('#badges');
     var courses = "";
     response.courses.completed.forEach(function(el){
       var newDiv = document.createElement('div');
       newDiv.className="course";
       badges.appendChild(newDiv);
     });
     badgets.innerHTML = courses;
   }
 });

});
