let students = [
  {
    name: "Bakkesh",
    marks: [80, 75, 90]
  },
  {
    name: "Rancho",
    marks: [85, 70, 88]
  },
  {
    name: "Chatur",
    marks: [60, 72, 68]
  }
];


students.forEach(student => {
  let total = 0;

  student.marks.forEach(mark => {
    total += mark;
  });


  let average = total / student.marks.length;

  console.log("Student:", student.name);
  console.log("Average Marks:", average);
  console.log("----------------------");
});