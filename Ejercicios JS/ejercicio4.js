/*
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

*/

console.log();

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];


document.getElementById("student-1").innerHTML=`${student1Courses}`;
document.getElementById("student-2").innerHTML=`${student2Courses}`;

const findCommonCourse = (student1, student2) => {
    const commonCourses = student1.filter(courses => student2.includes(courses))
    if (commonCourses.length > 0) {
        document.getElementById("common-course").innerHTML = `Common Courses: ${commonCourses.join(",")}`
    }else{
        document.getElementById("common-course").innerHTML = `No Common Courses found.`
    }
}
findCommonCourse(student1Courses,student2Courses);