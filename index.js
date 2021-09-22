// creating variables for all ids
let addToDoButton=document.getElementById('addToDo');
let toDoContainer=document.getElementById('toDoContainer');
let inputField=document.getElementById('inputField');

// adding addEventListener to add button so that when it is clicked, a <p> tag is created and appended in html
addToDoButton.addEventListener('click',function(){
   var paragraph=document.createElement('p');
   paragraph.classList.add('paragraph-styling')
   paragraph.innerText=inputField.value;
   toDoContainer.appendChild(paragraph);
   // to make current value of inputField as null
   inputField.value='';
   paragraph.addEventListener('click',function(){
      paragraph.style.textDecoration="line-through"
   })
   paragraph.addEventListener('dblclick',function(){
      toDoContainer.removeChild(paragraph); 
   })
})