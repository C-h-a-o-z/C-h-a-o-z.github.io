function projectSwitch (projectPage, titleProject) {
    document.getElementById("projectContent").innerHTML = projectPage;
    document.getElementById("TitleProject").innerHTML = titleProject;
}
function scrollTopDiv() {
    var divElement = document.getElementById("projectContent");
    divElement.scroll({
        top: 0,//scroll to the bottom of the element
        behavior: 'auto' //auto, smooth, initial, inherit
    });
}

var project1Page = ("\
<div>\
<h1>Top Page :D (facts) </h1>\
long monolouge or something bla bla </br>\
<img src=\"https://via.placeholder.com/500\" alt=\"image project\"> </br>\
wadwasdwasdw\
info image\
project stuff\
<a class=\"btn btn-primary\" href=\"../index.html\" role=\"button\">home page</a>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
<p>AA</p>\
</div>\
");
var project2Page = ("\
<div>\
<h1>Top Page :D</h1>\
long monolouge 2 or something bla bla </br>\
<img src=\"https://via.placeholder.com/500\" alt=\"image project\"> </br>\
wadwasdwasdw wow diff text :D\
info image\
project stuff\
<a class=\"btn btn-primary\" href=\"../index.html\" role=\"button\">home page</a>\
<p>BB</p>\
<p>BB</p>\
<p>BB</p>\
<p>BB</p>\
<p>BB</p>\
</div>\
");
var project3Page = ("\
<div>\
<h1>Top Page :D</h1>\
long monolouge 3 or something bla bla </br>\
<img src=\"https://via.placeholder.com/500\" alt=\"image project\"> </br>\
wadwasdwasdw wow diff text :D\
info image\
project stuff\
<a class=\"btn btn-primary\" href=\"../index.html\" role=\"button\">home page</a>\
<p>CC</p>\
<p>CC</p>\
<p>CC</p>\
<p>CC</p>\
<p>CC</p>\
</div>\
");
var project4Page = ("\
<div>\
<h1>Top Page :D</h1>\
long monolouge 4 or something bla bla </br>\
<img src=\"https://via.placeholder.com/500\" alt=\"image project\"> </br>\
wadwasdwasdw wow diff text :D\
info image\
project stuff\
<a class=\"btn btn-primary\" href=\"../index.html\" role=\"button\">home page</a>\
<p>DD</p>\
<p>DD</p>\
<p>DD</p>\
<p>DD</p>\
<p>DD</p>\
</div>\
");
var project5Page = ("\
<div>\
<h1>Top Page :D</h1>\
long monolouge 5 or something bla bla </br>\
<img src=\"https://via.placeholder.com/500\" alt=\"image project\"> </br>\
wadwasdwasdw wow diff text :D\
info image\
project stuff\
<a class=\"btn btn-primary\" href=\"../index.html\" role=\"button\">home page</a>\
<p>EE</p>\
<p>EE</p>\
<p>EE</p>\
<p>EE</p>\
<p>EE</p>\
</div>\
");
