let result=document.querySelector(`.result`);
let input=document.querySelector(`.temperature`);
input.addEventListener(`input`, e =>{
  temp=input.value;
  takeTemp();
})
function takeTemp(){
  for(let i=0;i<temp.split(``).length; i++){
    if(temp.split(``)[i].toLowerCase()==`c`){
      convertFromC(parseInt(temp));
    }else if(temp.split(``)[i].toLowerCase()==`f`){
      convertFromF(parseInt(temp));
    }
  }
}
function convertFromF(temp){
    let tempC=(temp-32)*(5/9);
    result.innerHTML=tempC+` C`;
}
function convertFromC(temp){
  let tempF=temp*(9/5)+32;
  result.innerHTML=tempF+` F`
}
