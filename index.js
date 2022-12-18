//******** */ $ (or jQuery) is used to replace document.querySelector, document.querySelectorAll using jQuery library. *******


$("h1").addClass("margin-50 big-title"); //this adds the class attribute to h1


$("a").attr("href","https://www.yahoo.com"); //this manipulates the href attribute in anchor tag


$(document).keydown(function(event){
    $("h1").text(event.key);
});                              // this manipules the h1 when a key is pressed


$("h1").on("mouseover", function(){
    $("h1").text("Thank You!");
});                              //this manipulates the h1 text when move is moved on it


$("h1").on("click", function(){
    $("h1").css("color","green");
});                              //this manipulates the color of the h1 text to green when clicked.

