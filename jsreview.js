var course = "technology";
let Myname = "Kylan";

console.log(`This page was created in the STEM PREP ${course} by ${Myname}`);

alert(`This page was created in the stem prep $[course} by ${myname}`);

function output()
{
  let name = document.getElementById("name").value;
  var school = document.getElementById("school").value;
  let grade = document.getElementById("Grade").value;

let output = "name: <b>" + name + "</b><br>";
  output += "Grade: <b>" + grade + "</b><br>;
    output += "school: <b>" + school +"</b><br>";
  
document.getElementById("output").innerHTML = output;
}
