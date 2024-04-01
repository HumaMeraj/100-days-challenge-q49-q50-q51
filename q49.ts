//Function with rest parameters

function logHobbies(... hobbies:string[]){
hobbies.forEach(hobby =>{
    console.log(`I enjoy ${hobby}.`);
});

}
logHobbies("Reading","Coding","Cycling");