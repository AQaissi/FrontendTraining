var comment = document.getElementById('text_area');
var listContainer = document.getElementById('list');
var send_button = document.getElementById('send');
var listItem  ;

var comments_array = [];
var data = '';


console.log("Inside Client file");

// send_button.onclick=function(){
  
//     data = comment.value ; 

//     comments_array.push(data);
//     listItem = document.createElement("ul");
//     listItem.innerText = data;
//     listContainer.appendChild(listItem);
  
// } 

send_button.onclick=function(){
  console.log("Inside function")
    data = comment.value ; 

    comments_array.push(data);
    listItem = document.createElement("ul");
    listItem.innerText = data;
    listContainer.appendChild(listItem);
  
} 


