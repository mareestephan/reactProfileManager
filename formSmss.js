// document.getElementsByTagsName("normal-state").addEventListener("submit", myFunction);

// function myFunction() {
//   console.log("appels");
// }

var inputs = document.getElementsByTagName(‘button’);

for(var i=0; i<inputs.length; i++){
if(inputs[i].getAttribute(‘type’)==‘submit’){
  console.log("appels pere");

}
}
