const endDate = "2 january 2024 4:50 pm"
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

const clock = () =>{
  const end = new Date(endDate);
  const now = new Date()
  const diff = (end - now)/1000;  //divide by 1000 to convert the milisecond into second
  if(diff < 0)return;

  //converting into days
  inputs[0].value =(Math.floor(diff/3600/24)); 


  //converting into hours
  inputs[1].value =(Math.floor(diff / 3600)%24);
 
  //converting into minutes
  inputs[2].value =(Math.floor(diff / 60) %60)

  //converting into seconds
  inputs[3].value =Math.floor(diff%60)
}

clock();

setInterval( () =>{
  clock()
},1000)
