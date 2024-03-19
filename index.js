function scuberGreetingForFeet(){
if(distance<=400){
  return 'This one is on me!';
}else if (distance>400 && distance<=2000){
  return 'That will be twenty bucks'.;
}else if (distance>2000 && distance<=2500) {
  return 'i will gladly take your thirsty bucks';
}else if (distance>2500){
  return'No can do.';
 }
}
function ternaryCheckCity(city){
  return city=== 'NYC' ? 'Ok, sounds good.' : 'No, go.';
}

function switchOnCharmFromTip(){
  switch(Tip) {
    case 'generous':
      return 'Thank you so much';
      break;
    case 'not as generous':
      return 'Thank you';
      break;
    default:
      return 'Bye';
      break;
  }
}