//square function
function square (){
  let num=parseInt(prompt(`Enter a number to square`));
  if(num.toString()==`NaN`){
    alert(`Not a number`);
    square();
  }else{
    alert(num*num);
  }
}
