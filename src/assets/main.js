$(function() {

  $.ajax({
   url: 'https://www.codeschool.com/users/1752939.json',
   dataType: 'jsonp',
   success: function(response) {
     var badges = document.querySelector('#badges');
     var courses = "";
     response.courses.completed.forEach(function(el){
       courses+="<div class='course'><h3 title="+ el.title + ">"+ el.badge +"</h3><a href=\"" + el.url + "\" target=_blank class=\"btn btn-primary\">See Course</a></div>";
     });
     badgets.innerHTML = courses;
   }
 });

});
