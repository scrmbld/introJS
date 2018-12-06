
const btn=document.querySelector(`[id="1"]`);
const cancel=document.querySelector(`[id="2"]`);
const clearValue=document.querySelector(`[id="3"]`);
/*
let delay=``;
let macInstances=``;
let counter=0;

function delayAlert(){
  delay=parseInt(prompt(`enter a time to wait in seconds`));
  delay=delay*1000;
  maxInstances=parseInt(prompt(`enter the number of times you want to wait`));
  console.log(maxInstances);
  timer=setInterval(quote, delay);

}
function quote(){
  let random=Math.random().toString(27);
  if(counter==maxInstances){
    clearInterval(timer);
  }else{
    console.log(random);
  }
  counter++;
}

btn.addEventListener(`click`, function(event){
  delayAlert();
})
cancel.addEventListener(`click`, function(event){
  clearInterval(timer);
})
*/
let userName=``;
let password=``;
const user={};
btn.addEventListener(`click`, function(event){
  user.userName=prompt(`Enter your username`);
  user.password=prompt(`Enter your password`);
  console.log(user);
  btn.setAttribute(`disabled`, true);
  localStorage.setItem(`username`, user.userName);
  localStorage.setItem(`password`, user.password);
})

cancel.addEventListener(`click`, function(event){
  alert(localStorage.getItem(`username`));
})
clearValue.addEventListener(`click`, function(event){
  localStorage.removeItem(`username`);
  console.log(localStorage.getItem(`username`));
  btn.removeAttribute(`disabled`);
})
