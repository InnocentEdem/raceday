let raceNumber = Math.floor(Math.random() * 1000);
let hasRegistered = false;
let runnerAge = 25;
if(runnerAge>17 && hasRegistered ===true){
  raceNumber += 1000;
}
let registrationTime=0;

if(runnerAge>17 && registrationTime==='early'){
  console.log(`Your race number is ${raceNumber}, you will race at 9:30am`)
} else if(runnerAge>18 && registrationTime==='late' ){
  console.log(`Your race number is ${raceNumber},You will race at 11:00am`)
} else if(runnerAge<18){
  console.log(`Your race number is ${raceNumber},You will race at 12:30pm`)
}else{
  console.log('See the registration desk')
}

