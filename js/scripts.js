//setting up variables
let draggable=[];//the elements that can be dragged
let dragging=``;//the element that is being dragged
const ol=document.querySelectorAll(`ol`);//the list(s)
let currentLocation=``;//where "dragging" is at any given time
let endParent=``//the parent element of dragged once it is done being dragged
let oldLocation=``;//where dragged is coming from

function dragInit(){
  draggable=document.querySelectorAll(`.container`);//drawing values for draggable
  //adding event listeners to draggable elements
  draggable.forEach(function(element){
    element.addEventListener(`dragstart`, function(event){
      dragging=event.target;//drawing value for dragging
      console.log(dragging);
    })
  })
  //adding event listener to ol(s)
  ol.forEach(function(element){
      element.addEventListener(`dragover`, function(event){
      event.preventDefault();
      currentLocation=event.target;//drawing value for currentLocation
    })
  })
  //adding final event listener to draggable elements
  draggable.forEach(function(element){
    element.addEventListener(`dragend`, function(event){
      //if currentLocation is another item
      if(currentLocation.outerHTML.toString().split(`>`)[0]==`<li class="li-drag"`){
        //set the endParent to be an ol
        endParent=currentLocation.parentElement.parentElement;
        currentLocation=currentLocation.parentElement;
        endParent.insertBefore(dragging, currentLocation);
      }else{
        //otherwise the endParent is already an ol
        currentLocation.appendChild(dragging);
      }

    })
  })
}
dragInit();
