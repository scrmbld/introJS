/*
let arr1=[1, 2, 3];
let arr2=[4, 5, 6];

console.log(...arr1, ...arr2);

//array destructuring
let todoList=[`dishes`, `mow lawn`, `put up christmas tree`];
let [firstItem, secondItem, thirdItem]=todoList;//[firstItem]=todoList[0]
//secondItem=todoList[1], thirdItem=todoList[2]
console.log(todoList);
console.log(firstItem);


//object destructuring
let person={
  name:`name`,
  age:900,
  personTwo:{
    name:`other name`,
    age:9
  }
};
let {name:bannana = `Boulder Joe`}=person;//bannana=person.name
console.log(bannana);//in this case returns `name`
*/

//api's
/*
function getAllCharacters(url){
  fetch(url)
    .then(response => response.json())
    .then(data => {
      makeCard(data)
      let next = data.info.next;
      if(next){
        getAllCharacters(next);
      }
    })
    .catch(errors => console.log(errors));
}
*/
async function getAllCharacters(url){
  let response = await fetch(url);
  let data= await response.json();
  let population = await data.info.next;

  if(population){getAllCharacters(data.info.next)}

  makeCard(data);
}
function makeCard(data){
  let {results:characters = `error`}=data;
  characters.forEach(character => {
    let card=document.createElement(`div`);
    card.classList.add(`card`);
    card.innerHTML=`
      <img class="card-img-top" src="${character.image}">
      <div class="card-body">
        <h2 class="card-title">${character.name}</h2>
        <p class="card-text">Species: ${character.species}</p>
        <p class="card-text">Location: ${character.location.name}</p>
      </div>
    `
    document.body.append(card);
  })
}

getAllCharacters(`https://rickandmortyapi.com/api/character/`);
