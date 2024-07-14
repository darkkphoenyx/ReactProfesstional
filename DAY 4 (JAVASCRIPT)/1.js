// const studnet = ["ram", "shyam"]
// const studnet2 = ["hari", "sita"]

// //there is a concat function that concatinates the two strings

// const allstudents = studnet.concat(studnet2)
// for (let index = 0; index < allstudents.length; index++)  //for loop in js is written like this 
//     console.log('Name of student is: '+allstudents[index]);
    

//filter starts here
const age = [2, 3, 4, 5, 6, 7, 8, 9]
const len = age.filter(function (age) {
    return age > 5;
});
console.log("The age greater that 5 are:")
console.log(len);