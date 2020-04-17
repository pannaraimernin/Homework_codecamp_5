let score = prompt("what is your score");
let grade;
grade = (score > 80) ? "A":(score >70 && score <79) ? "B":(score >60 && score <69) ? "C":(score >50 && score <59) ? "D":"F";
alert(grade)

