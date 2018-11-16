//setting up variables
let list=[];
let lastDiffEqual=0;
let largestNumber=0;
let diffAlert=`should be easy.`;
let alertAdd=``;
let numEasy=0;
//taking user input
for(let i=0;i<3;i++){
  let obj={};
  obj[`toDo`+ i]={}
  obj[`toDo`+ i].thing=prompt(`Enter the #${i+1} thing on your to do list.`);
  obj[`toDo`+ i].time=parseInt(prompt(`How long will will this take?`));
    list.push(obj[`toDo`+ i]);
    console.log(list[i].time);
}
console.log(list);
//finding the longest time
for(let i=0;i<list.length;i++){
  if(list[i].time>largestNumber){
    largestNumber=list[i].time;
  }
}
//applying difficulty values to items
for(let listIndex=0;listIndex<list.length;listIndex++){
  if(list[listIndex].time===largestNumber){
    list[listIndex].easy=false;
  }else{
    list[listIndex].easy=true;
  }
  if(list[listIndex].easy==true){
    alertAdd=`${list[listIndex].thing} and `;
    diffAlert=alertAdd+diffAlert;
  }
}
alert(diffAlert);
