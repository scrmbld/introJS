//taking the user's first first name
let firstName=prompt(`What is your first name?`);
console.log(firstName);
//taking the user's last name
let lastName=prompt(`What is your last name?`);
console.log(lastName);

//Taking the user's birthday
let birthDate=new Date(prompt(`What is your birthday?`));
console.log(birthDate);

//confirming user info
confirm(`Your name is ${firstName} ${lastName}
and you were born on ${birthDate}. Is this correct?`);
