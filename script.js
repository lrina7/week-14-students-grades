let grades = [];

for (let i = 0; i < 12; i++) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  grades.push(randomNumber);
}
let gradesArray = document.querySelector('.grades');
gradesArray.textContent = grades.join(', ');

let averageMark = document.querySelector('.averagemark');
averageMark.textContent  = Math.floor(grades.reduce((total, grade)=>total + grade, 0)/grades.length);

let maxMark = document.querySelector('.maxmark');
maxMark.textContent = Math.max(...grades);

let minMark = document.querySelector('.minmark');
minMark.textContent  = Math.min(...grades);

let positiveStudents = document.querySelector('.positive');
positiveStudents.textContent = grades.filter(el=>el >=60).length;

let negativeStudents = document.querySelector('.negative');
negativeStudents.textContent = grades.filter(el=>el <60).length;

let  letterMark = document.querySelector('.lettermark');
let letters = grades.map(number=> {
  if(number>=80 && number<=100) {
    return "A";
  } else if (number>=60 && number<=79) {
    return "B";
  } else if (number>=40 && number<=59) {
    return "C";
  } else if (number>=20 && number<=39) {
    return "D";
  } else {
    return "E";
  }
});
letterMark.textContent = letters.join(', ');