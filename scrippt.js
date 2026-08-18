// Javascript Assignment : 04

// task 01
// // 1. Array to store student's names
// var studentNames = [];

// // 2. Strings array
// var stringsArray = ["Ali", "Sara", "Bilal", "Ayesha"];

// // 3. Numbers array
// var numbersArray = [10, 25, 3, 47, 8];

// // 4. Boolean array
// var booleanArray = [true, false, true, true, false];

// // 5. Mixed array
// var mixedArray = ["Ahmed", 22, true, 3.5, "BS Computer Science"];

// // 6. Education qualifications available in Pakistan
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("1. Empty array: " + studentNames + "<br><br>");

// document.write("2. Strings Array: " + stringsArray + "<br><br>");

// document.write("3. Numbers Array: " + numbersArray + "<br><br>");

// document.write("4. Boolean Array: " + booleanArray + "<br><br>");

// document.write("5. Mixed Array: " + mixedArray + "<br><br>");

// document.write("6. Education Qualifications in Pakistan: <br>");
// for ( i=0 ; i < qualifications.length ; i++ ) {
//     document.write((i+1) + "." + qualifications[i] + "<br>")
// }


// task 02
// var students = ["Danish", "Saad", "Samad"];
// var scores = [450 , 410, 320];
// var totalmarks = 500;

// for (i=0 ; i < students.length ; i++){
//     var percentage = (scores[i] / totalmarks) * 100;

//     document.write("Name: " + students[i] + "<br>");
//     document.write("Obatined marks: " + scores[i] + " out of " + totalmarks + "<br>");
//     document.write("Percentage: " + percentage + "%<br><br>");
// }


// task 03
// // Initializing the color array
// var colornames = ["Blue", "Green", "Red", "Black"];
// console.log(colornames);

// // Asking user to add to the begnning of the array
// colornames.unshift(prompt("What color you want to add to the begnning of the array?"));
// console.log(colornames);

// // Asking user to add to the end of the array
// colornames.push(prompt("What color you want to add to the end of the array?"));
// console.log(colornames);

// // Adding two more colors to the begnning of the array
// colornames.unshift("Light Orange", "Peach");
// console.log(colornames);

// // Deleting the first color of array
// colornames.shift();
// console.log(colornames);

// // Deleting the last color of array
// colornames.pop();
// console.log(colornames);

// // Asking user at which index the color should be added
// var coloradd = prompt("At which index you want to add a color?");
// var color = prompt("Please provide the name of the color: ")
// colornames.splice(coloradd , 0 , color);
// console.log(colornames);

// // Asking user from which index the color(s) should be deleted and how many....
// var indexdel = prompt("From which index you want to delete the color or colors?");
// var del_length = prompt("How many colors do you want to delete from " + indexdel + "?");
// colornames.splice(indexdel , del_length);
// console.log(colornames);


// task 04
// // Array to store student scores
// var studentScores = [78, 45, 92, 60, 33, 88];
// document.write("Original Scores: " + studentScores + "<br><br>");
// studentScores.sort(function(a, b) {
//   return a - b;
// });
// document.write("Scores in Ascending Order: " + studentScores);  


// task 05
// var citynames = ["Karachi" , "Lahore" , "Islamabad" , "Multan" , "Faisalabad"];
// document.write("City Names:<br>" + citynames + "<br><br>");
// selectedcities = citynames.slice(0 , 3);
// document.write("Selected Cities:<br>" + selectedcities);


// task 06
// var arr = ["This ", " is ", " my ", " cat"];

// var joinedarray = arr.join("");

// document.write(joinedarray);





// task 07
// var accesories = ["Keyboard", "Mouse", "Printer", "Monitor"];

// document.write("Array: " + accesories + "<br>");

// document.write(accesories.shift() + "<br>");  

// document.write(accesories.shift() + "<br>");  

// document.write(accesories.shift() + "<br>");  

// document.write(accesories.shift() + "<br>");  


// task 08
// var accesories = ["Keyboard", "Mouse", "Printer", "Monitor"];

// document.write("Array: " + accesories + "<br>");

// document.write(accesories.pop() + "<br>");  

// document.write(accesories.pop() + "<br>");  

// document.write(accesories.pop() + "<br>");  

// document.write(accesories.pop() + "<br>");  


