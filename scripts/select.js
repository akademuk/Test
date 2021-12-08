var username = document.getElementById("select_name");
var menu = document.getElementById("select_name_list");

function show_or_hide()
{
   if(menu.style.display!="block") menu.style.display="block";
   else menu.style.display="none";

}

username.addEventListener("click", show_or_hide);
