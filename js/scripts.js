//Setting up variables
let dateConfirmed=false;
let namesTaken=false;

//taking names
while(namesTaken==false){
  let firstName=prompt(`Enter your first name.`);
  let lastName=prompt(`Enter your last name`);
  namesTaken=confirm(`Is your name ${firstName} ${lastName}?`);
  if(namesTaken==true){
    console.log(`names taken`);
  }
}

//date loop
while(dateConfirmed==false){

  //Taking date from user
  let date=new Date(prompt(`Enter a date.`));
  console.log(date);

  //Converting date to a string
  let thing=date.toString();

  //Checking that the date is valid and notifying the user
  if(thing==`Invalid Date`){
    //if the date is invalid, this is done
    console.log(`date incorrect`);
    dateConfirmed=false;
    alert(`Date Invalid`);

  }else{
    //if the date is valid, this is done
    console.log(thing);
    dateConfirmed=confirm(`Is the date ${thing} correct?`);

  }
  console.log(`date confirmed is ` + dateConfirmed);
}
//confirming that process is complete
console.log(`date taken`);
