
// 1.The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

const cont = document.querySelector('.container')
const studentSol = document.querySelector('.names')
const houseSol = document.querySelector('.houseNames')

cont.append(studentSol)
cont.append(houseSol)

let students = ['Umar', 'Shoaib', 'Hassan Ali', 'Ibtesam', 'Mohammad Ali', 'Atta Ansar', 'Jawad Ali', 'Umair', 'Waleed', 'Ahsan Shaikh', 'Fareed Khan'];

let houses = [];

for (const student of students) {
    if (student.length < 6) {
        houses.push("Gryffindor");
    }
    else if (student.length < 8) {
        houses.push("Hufflepuff");
    }
    else if (student.length < 12) {
        houses.push("Ravenclaw");
    }
    else if(student.length >= 12){
        houses.push("Slytherin");
    }
}

for (const index in students) {
    let html = `
    <li>${students[index]}</li>
    `;
    studentSol.innerHTML += html;
}

for (const index in houses) {
    let html = `
    <li>${houses[index]}</li>
    `;
    houseSol.innerHTML += html;
}