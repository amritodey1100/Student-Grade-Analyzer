// let Name = "Amrito";
// let Age = 19;
// let City = "Narayanaganj";
// let favouriteAnime = "none";
// let isCoder = true;

// console.log(Name, Age, City, favouriteAnime, isCoder);

// favouriteAnime = "Nothing";

// console.log(favouriteAnime);

// let score = 70;
// let passed = score >= 33;
// let excellent = score >= 80;
// let scholarship = excellent || score >= 75;

// console.log("Score:", score);
// console.log("Passed:", passed);
// console.log("Excellent:", excellent);
// console.log("Did he got the scholarship ?", scholarship);

// let score = 76;

// if (score >= 80) {
//   console.log("You've got A+ !");
// } else if (score >= 70 && score <= 79) {
//   console.log("You've got A !");
// } else if (score >= 60 && score <= 69) {
//   console.log("You've got A- !");
// } else if (score >= 50 && score <= 59) {
//   console.log("You've got B !");
// } else if (score >= 33 && score <= 49) {
//   console.log("You've got C !");
// } else {
//   console.log("You've failed. Better luck next time.");
// }

// let score = 33;
// let isRegularStudent = false;
// let hasExtraCredit = true;

// if (score >= 80) {
//   if (isRegularStudent || hasExtraCredit) {
//     console.log("A+", "Scholarship Eligible");
//   } else {
//     console.log("A+");
//   }
// } else if (score >= 79) {
//   if (isRegularStudent || hasExtraCredit) {
//     console.log("A", "Scholarship Eligible");
//   } else {
//     console.log("A");
//   }
// } else if (score >= 69) {
//   if ((score >= 70 && isRegularStudent) || hasExtraCredit) {
//     console.log("A-", "Scholarship Eligible");
//   } else {
//     console.log("A-");
//   }
// } else if (score >= 59) {
//   console.log("B");
// } else if (score >= 33 && score <= 49) {
//   console.log("C");
// } else {
//   console.log("F");
// }

// const userInput = null;

// if (userInput) {
//   console.log("Truthy !");
// } else {
//   console.log("Falsy !");
// }

// let count = 1;
// while (count <= 5) {
//   console.log(count);
//   count++;
//   //   console.log(count);
// }

// for (count = 1; count <= 5; count++) {
//   console.log(count);
// }

// let x = 10;

// do {
//   console.log("This runs at least once", x);
//   x++;
// } while (x > 10);

// let fruits = ["Apple", "Banana", "Mango"];
//  for(let i =0; i < fruits.length; i++){

//  }

// function checkIfDivisable(numb) {
//   for (let numb = 0; numb >= 50; numb++) {
//     if (numb / 3 && numb / 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (numb / 3 === 0) {
//       console.log("Fizz");
//     } else if (numb / 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log("Enter a number that is dividable by 5,3, or both.");
//     }
//   }
// }

// console.log(checkIfDivisable(5));

// function checkIfDivisable() {
//   for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// checkIfDivisable();

// function checkIfDivisable() {
//   for (i = 1; i <= 20; i++) {
//     if (i % 4 === 0 && i % 6 === 0) {
//       console.log("QuadHex");
//     } else if (i % 4 === 0) {
//       console.log("Quad");
//     } else if (i % 6 === 0) {
//       console.log("Hex");
//     } else {
//       console.log(i);
//     }
//   }
// }

// checkIfDivisable();

// let i = 1;
// while (i <= 20) {
//   if (i % 4 === 0 && i % 6 === 0) {
//     console.log("QuadHex");
//   } else if (i % 4 === 0) {
//     console.log("Quad");
//   } else if (i % 6 === 0) {
//     console.log("Hex");
//   } else {
//     console.log(i);
//   }
//   i++;
// }

// let i = 1;
// do {
//   if (i % 4 === 0 && i % 6 === 0) {
//     console.log("QuadHex");
//   } else if (i % 4 === 0) {
//     console.log("Quad");
//   } else if (i % 6 === 0) {
//     console.log("Hex");
//   } else {
//     console.log(i);
//   }
//   i++;
// } while (i <= 20);

/*For loop ===*/

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let numb of arr) {
//   if (numb % 2 === 0 && numb % 3 === 0) {
//     console.log("EvenDiv3");
//   } else if (numb % 3 === 0) {
//     console.log("Div3");
//   } else if (numb % 2 === 0) {
//     console.log("Even");
//   } else {
//     console.log(numb);
//   }
// }

// for (key in student) {
//   console.log(key, ":", student[key]);
// }

// student.lovesCoding = true;
// student.age = 20;
// console.log(student);

// for (grade of student.grades) {
//   if (grade > 80) {
//     console.log(grade);
//   }
// }

// let student = {
//   name: "Amrito",
//   age: 19,
//   class: 12,
//   grades: [88, 99, 77, 64, 56, 78, 77],
// };
// let sum = 0;
// for (grade of student.grades) {
//   sum += grade;
// }

// let average = sum / student.grades.length;
// console.log(`Average grade of ${student.name} is:`, average);

// 1st One (for of version)

// const marks = [75, 88, 92, 67, 81];
// let sum = 0;
// for (mark of marks) {
//   sum += mark;
// }

// let average = sum / marks.length;
// console.log(average);

// let students = [
//   {
//     name: "Amrito",
//     grades: [88, 99, 77, 64, 56, 78, 77],
//   },
//   {
//     name: "Tuhin",
//     grades: [75, 80, 68, 90, 82, 79],
//   },
//   {
//     name: "Tarok",
//     grades: [60, 55, 70, 65, 72, 68],
//   },
// ];

// for (student of students) {
//   let sum = 0;

//   for (grade of student.grades) {
//     sum += grade;
//   }

//   let average = sum / student.grades.length;
//   console.log(`Average grade of ${student.name} is : ${average}`);
// }

// let students = [
//   { name: "Amrito", grades: [88, 99, 77, 64, 56, 78, 77] },
//   { name: "Tuhin", grades: [75, 80, 68, 90, 82, 79] },
//   { name: "Tarok", grades: [60, 55, 70, 65, 72, 68] },
// ];

// for (let student of students) {
//   console.log(`Grades >= 75 for ${student.name}:`);
//   let count = 0;
//   for (let grade of student.grades) {
//     if (grade >= 75) {
//       console.log(grade);
//       count++;
//     }
//   }

//   if (count >= 3) {
//     // Step 4: Top Performer
//     console.log("Top Performer!");
//   }
//   console.log("------"); // optional separator
// }

// let students = [
//   { name: "Amrito", grades: [88, 99, 77, 64, 56, 78, 77] },
//   { name: "Tuhin", grades: [75, 80, 68, 90, 82, 79] },
//   { name: "Tarok", grades: [60, 55, 70, 65, 72, 68] },
// ];

// for (let student of students) {
//   console.log(`Grades >= 75 for ${student.name}:`);

//   let count = 0;
//   let sum = 0;

//   for (let grade of student.grades) {
//     sum += grade; // total sum for average

//     if (grade >= 75) {
//       console.log(grade); // print high grades
//       count++; // increment high-grade counter
//     }
//   }

//   let average = sum / student.grades.length;

//   // Condition for Top Performer
//   if (count >= 3 && average >= 75) {
//     console.log("Top Performer!");
//   }

//   console.log(`Average grade: ${average.toFixed(2)}`);
//   console.log("------");
// }

// let students = [
//   { name: "Amrito", grades: [88, 69, 77, 64, 56, 78, 77], attendance: 85 },
//   { name: "Tuhin", grades: [75, 80, 68, 90, 82, 79], attendance: 75 },
//   { name: "Tarok", grades: [60, 55, 70, 65, 72, 68], attendance: 90 },
// ];

// for (let student of students) {
//   let count = 0;
//   let sum = 0;
//   console.log(`Grades of student name: ${student.name}`);
//   for (let grade of student.grades) {
//     sum += grade;

//     if (grade >= 70) {
//       console.log(grade);
//       count++;
//     }
//   }
//   if (count > 3) {
//     console.log("Eligible for award!");
//   } else {
//     console.log("Needs improvement.");
//   }
//   let average = sum / student.grades.length;

//   console.log(`Average grade of ${student.name} is : ${average}`);
//   console.log("Marks over 70 is:", count);
//   console.log("------");
// }

// function analyzeStudents(students) {
//   for (let student of students) {
//     let count = 0;
//     let sum = 0;
//     console.log(`Grades of student: ${student.name}`);

//     for (let grade of student.grades) {
//       sum += grade;
//       if (grade >= 70) {
//         console.log(grade);
//         count++;
//       }
//     }

//     let average = sum / student.grades.length;
//     console.log(`Average grade: ${average.toFixed(2)}`);
//     console.log("Marks over 70:", count);

//     if (count >= 3 && student.attendance >= 80) {
//       console.log("Eligible for award!");
//     } else {
//       console.log("Needs improvement.");
//     }

//     console.log("------");
//   }
// }

// // You can now call the function on any group of students
// analyzeStudents(students);

// let students = [
//   { name: "Amrito", grades: [88, 69, 77, 64, 56, 78, 77], attendance: 85 },
//   { name: "Tuhin", grades: [75, 80, 68, 90, 82, 79], attendance: 75 },
//   { name: "Tarok", grades: [60, 55, 70, 65, 72, 68], attendance: 90 },
// ];

// function getTopPerformers(students) {
//   let topPerformers = [];

//   for (let student of students) {
//     let count = 0;
//     let sum = 0;

//     for (let grade of student.grades) {
//       sum += grade;
//       if (grade >= 70) count++;
//     }

//     let average = sum / student.grades.length;
//     if (count >= 3 && student.attendance >= 80) {
//       topPerformers.push(student.name);
//     }
//   }

//   return topPerformers;
// }

// console.log("Top performers:", getTopPerformers(students));
