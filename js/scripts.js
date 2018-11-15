let list=[];
for(let i=0;i<3;i++){
  let obj={};
  obj[`toDo`+ i]={}
  obj[`toDo`+ i].thing=prompt(`Enter the #${i+1} thing on your to do list.`);
  obj[`toDo`+ i].time=prompt(`How long will will this take?`);
  list.push(obj[`toDo`+ i]);
  if(i===0){

  }else if(parseInt(list[i].time)<parseInt(list[i-1].time)){
    list[i].easy=true;
    console.log(list[i].easy);
  }else{
    list[i].easy=false;
    console.log(list[i].easy);
  }
}
console.log(list);
