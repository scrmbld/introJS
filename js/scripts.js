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
function grammar(){
  let sentence=prompt(`Enter a sentence`);
  let sentenceParsed=sentence.split("");
  if(sentenceParsed[sentenceParsed.length]!=`.` || sentenceParsed[sentenceParsed.length]!=`!` || sentenceParsed[sentenceParsed.length]!=`?`){
    sentenceParsed.push(`.`);
  }
  sentence=[sentenceParsed[0].toUpperCase()]
  for(let i=0;i<sentenceParsed.length;i++){
    sentence.push(sentenceParsed[i+1]);
  }
  sentence=sentence.join(``);
  alert(sentence);
}
grammar();
