//square function
function exponent (base, exponent){
  let counter=exponent;
  let num=base;
  while(counter>1){
    num=num*base;
    counter--;
  }
  alert(num);
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
//grammar();
exponent(3,3);
