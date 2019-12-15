var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (name in names) {

  //first letter
  var firstLetter = names[name].charAt(0).toLowerCase();

  //comparison
  switch (firstLetter){
    case "j":
      byeSpeaker.speak(names[name]);
      break;
    default:
      helloSpeaker.speak(names[name]);

  }
}
