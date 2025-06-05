// chapter # 6-9
// Question#1

  // document.write("<h3>Result</h3>");
  // document.write("The value of a is:10 <br><br>")

  // document.write("The value of ++a is:11 <br>")
  // document.write("now tha value of a is:11 <br><br>")

  // document.write("The value of a++ is:11 <br>")
  // document.write("now tha value of a is:12 <br><br>")

  // document.write("The value of --a is:11 <br>")
  // document.write("now tha value of a is:11 <br><br>")

  //  document.write("The value of a-- is:11 <br>")
  // document.write("now tha value of a is:10 <br><br>")

  // Question#2

//   var a = 2 , b = 1

//   var result =--a - --b + ++b + b--;
//   console.log(result)

//  document.write("a is " + "<b>" + a + "</b>" + "<br/>");
//  document.write("b is " +"<b>" + b + "</b>" + "<br/>");
//  document.write(" Method:  --a - --b + ++b + b--" + "<br/>");
//  document.write(" Explanation:  1 - 0 + 1 + 1" + "<br/>");
//  document.write("Result is " + "<b>" + result + "</b>" + "<br/>");

// // Question#3

// var user = prompt("Enter Your Name");
// alert("Hello, " + user + "\n Welcome To Our Website!")

// Question#5

// var table =Number(prompt("You want to see table of:" ,5));
// var num = 1;

// document.write(table + " x " + num + " = " + (table*num) + "<br/>");
// document.write(table + " x " + ++num + " = " + (table*num) + "<br/>");
// document.write(table + " x " + ++num + " = " + (table*num) + "<br/>");
// document.write(table + " x " + ++num + " = " + (table*num) + "<br/>");
// document.write(table + " x " + ++num + " = " + (table*num) + "<br/>");
// document.write(table + " x " + ++num + " = " + (table*num) + "<br/>");
// document.write(table + " x " + ++num + " = " + (table*num) + "<br/>");
// document.write(table + " x " + ++num + " = " + (table*num) + "<br/>");
// document.write(table + " x " + ++num + " = " + (table*num) + "<br/>");
// document.write(table + " x " + ++num + " = " + (table*num) + "<br/>");

// Question#6

// var science=Number(prompt("How many marks did you get in science"));
// var english=Number(prompt("How many marks did you get in english"));
// var computer=Number(prompt("How many marks did you get in computer"));
// var a = 100 , b = 100 , c= 100
// var total_num = science + computer +english;
// var total_marks =a+b+c;

// console.log(total_num);
// console.log(total_marks);

// document.write("Science marks: "+ a +"/  Total number: "+ science +"/ percentage: " +((science/a) * 100)+"%<br><br>");
// document.write("English marks: "+ a +"/  Total number: "+ english +"/ percentage: " +((english/a) * 100)+"%<br><br>");
// document.write("Computer marks: "+ a +"/  Total number: "+ computer +"/ percentage: " +((computer/a) * 100)+"%<br><br>");
// document.write("Total marks:" + (a+b+c) + "<br/>Total number:"+(science+english+computer)+"<br/> percentage: "+((total_num/total_marks) * 100)+"%<br>" );

// chapter # 9 to 11

// Question#1

// var city = prompt("Enter Your City ")

// if (city === "karachi"){
//   alert("Welcome to city of lights")
// }
// else{
//   alert("welcome to " + city)
// }

// Question#2

// var Gander= prompt("Enter your gander")
// if (Gander === "male"){
//   alert("Good Morning Sir.")
// }
// else if (Gander === "female") {
//   alert("Good Morning Ma’am.")
// } else {
//   alert("!!Please correct the sentence!!")
// }

// Question#3

// var trafficSignal = prompt("Colour of road traffic signal is:")

// if (trafficSignal === "red" || trafficSignal === "Red" ) {
//     alert("Must Stop!");
// } 
// else if (trafficSignal === "yellow" || trafficSignal === "Yellow" ) {
//     alert("Ready to Move!");
// }
// else if (trafficSignal === "green" || trafficSignal === "Green" ) {
//     alert("Move Now!");
// }
// else  {
//     alert("Enter Correct Colour!");
// }

// // Question#4 

// var remainingFuel = +prompt("Enter Remaining Fuel of Your Car ((0.1-your value)  in litre)");

// if (remainingFuel <= 0.25) {
//     alert("Please refill the fuel in your car!")   
// } else {
//     alert("Enjoy Your Ride!");
// }

// // Question#5

//a

// var a = 4;

// if (++a === 5) {
//     alert("given condition for variable a is true"); 
// }

// b

// var b = 82;

// if (b++ === 83) {
//     alert("given condition for variable b is true"); 
// }

// c

// var c = 12;
//  if (c++ === 13) {
//     alert("condition 1 is true"); 
// }
// if (c === 13) {
//     alert("condition 2 is true"); 
// } 
// if (++c < 14) {
//     alert("condition 3 is true"); 
// }
// if(c === 14) {
//     alert("condition 4 is true"); 
// }

// d

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals"); 
// }

// e

// if (true)  {
//     alert("True");
// }

// if (false) {
//     alert("False"); 
// }

// f

// if("car" < "cat") {
//     alert("car is smaller than cat"); 
// }

// // Question#6

// var first_sub_marks = +prompt("Enter Marks of First Subject "  + "\n Please Enter Valid Number(0-100)")
// var second_sub_marks = +prompt("Enter Marks of Second Subject "  + "\n Please Enter Valid Number(0-100)")
// var third_sub_marks = +prompt("Enter Marks of Third Subject "  + "\n Please Enter Valid Number(0-100)")
// var total_marks = +prompt("Enter Total Marks");
// var obtain_marks = first_sub_marks+second_sub_marks+third_sub_marks
// var the_percentage =  ((obtain_marks/(total_marks))*100)

// document.write ( "<h1>" + "Marks Sheet" + "</h1>")
// document.write ( "<h3>" + "Total Marks:  " + total_marks + "</h3>")
// document.write ( "<h3>" + "Marks Obtained:  " + obtain_marks + "</h3>")
// document.write ( "<h3>" + "Percentage:  " + the_percentage + "%" + "</h3>")

// if (the_percentage >= 80) {
//     document.write ( "<h3>" + "Grade:  " + "A-one" + "</h3>")
//     document.write ( "<h3>" + "Remarks:  " + "Excellent" + "</h3>")
// }
// else if (the_percentage >= 70) {
//     document.write ( "<h3>" + "Grade:  " + "A" + "</h3>")
//     document.write ( "<h3>" + "Remarks:  " + "Good" + "</h3>")
// }
// else if (the_percentage >= 60) {
//     document.write ( "<h3>" + "Grade:  " + "B" + "</h3>")
//     document.write ( "<h3>" + "Remarks:  " + "You Need to Improve" + "</h3>")
// } else {
//     document.write ( "<h3>" + "Grade:  " + "Failed" + "</h3>")
//     document.write ( "<h3>" + "Remarks:  " + "Sorry" + "</h3>")
// }

// Question#7

// var secretNumber = 6;
// var guessNumber = +prompt("Guess The Secret Number (0-10)")

// if (guessNumber === secretNumber) {
//     alert("Bingo! Correct Answer");
// }
// else if (guessNumber === 5 || guessNumber === 7) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Sorry! Wrong Answer");
// } 

// // Quesiton#8

// var numTaken = +prompt("Enter Your Number:");
// var afterCheck = numTaken%3;

// if (numTaken < 1) {
//     alert("Enter Valid Number");
// }
// else{

//     if (afterCheck === 0 ) {
//         alert("Number is Divisible by 3");
//     } else {
//         alert("Number is not Divisible by 3");
//     }
// }

// // Question#9

// var num_taken = +prompt("Enter Your Number:");
// var after_check = num_taken%2;

// if (num_taken < 1) {
//     alert("Enter Valid Number");
// }
// else{

//     if (after_check === 0 ) {
//         alert("Even Number!");
//     } else {
//         alert("Odd Number!");
//     }
// }

// // Question#10

// var temperature = +prompt("Enter current temperature: \n(In Degree Centigrade)");

// if (temperature >= 40) {
//     alert("It is Too Hot Outside.")
// }
// else if (temperature >= 30) {
//     alert("The Weather today is Normal.")
// }
// else if (temperature >= 20) {
//     alert("Today’s Weather is cool.")
// }
// else if (temperature >= 0) {
//     alert("OMG! Today’s weather is so Cool.")
// }

// // Question#11 

// var num1 = +prompt("Enter First Number");
// var opr = prompt("Enter Operator (+ - * /)");
// var num2 = +prompt("Enter Second Number");

// var result ;

// if (opr === "+") {
//     result = num1 + num2
//     alert (result);
// }

// else if (opr === "-") {
//     result = num1 - num2
//     alert (result);
// }

// else if (opr === "*") {
//     result = num1 * num2
//     alert (result);

// }

// else if (opr === "/") {
//     result = num1 / num2
//     alert (result);

// }

// else {
//     alert("Enter Correct Operator")
// }

// // Chapter# 12to13

// // Question#1

// var input = prompt("Enter Your Input Here: \n(number or uppercase letter or lower case letter)")

// var ascii = input.charCodeAt(0)

// if (ascii >= 65 && ascii <= 90){
//     alert("you input a Capital letter")
// } else if (ascii >= 97 && ascii <=122){
//     alert("you input a Small letter")
// }else if (ascii >= 48 && ascii <=57){
//     alert("you input a number")
// }
//  else{
//     alert ("Invalid Input")
// }

// // Question#2 

// var firstNumber = +prompt("Enter a number 1 ")
// var secondNumber = +prompt("Enter a number 2 ")

// if (firstNumber > secondNumber) {
//         alert(firstNumber + " is greater than " + secondNumber)
// } else {
//         alert(secondNumber + " is greater than " + firstNumber)
// }

// // Question#3

// var number = +prompt("Enter the number: ")

// if (number > 0) {
//     alert("Positive number")
// }
// else if (number < 0) {
//     alert("Negative number")
// }
// else if (number === 0) {
//     alert("Zero")
// }
// else {
//     alert("Invalid Input")
// }

// // Question#4

// var letter = prompt("Write a letter:")

// if (letter === "a" ||letter === "A" ||letter === "e" ||letter === "E" ||letter === "i" ||letter === "I" ||letter === "o" ||letter === "O" ||letter === "U" ||letter === "u" ) {
//     alert("True!  (It is Vowel)")    
// } else {
//     alert("False! (It is not Vowel)")
// }

// // Question#5

// var correctPassword1 = "0987654123";
// var correctPassword2 = "qwerty";

// var password1 = prompt("Enter Your First Password: ");

// if (password1 === "" ) {
//     alert("Please Enter Valid Password!")  
// }else {
// var password2 = prompt("Enter Your Second Password: ");
// if (password2 === "") {
//     alert("Please Enter Valid Password!")  
// }
// else {
//     if (password1 === correctPassword1 && password2 === correctPassword2) {
//         alert("Correct! The password you entered matches the original password")
//     } else {
//         alert("Incorrect Password!")
//     }
// }
// }

// // Question#6

// var greeting;

// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
//     alert(greeting)
// }
// else {
//     greeting = "Good evening";
//     alert(greeting)
// }

// // Question#7

// var inputTime = prompt("Please Enter Time In 24 Hours Format");
// if (inputTime === "") {
//     alert("Enter Valid Time In 24 Hours Format!")
// } else {

//     if (inputTime >= 0000 && inputTime < 1200 ) {
//         alert("Good Morning!")
//     } 
//     else {
//         if (inputTime >= 1200 && inputTime < 1700 ) {
//             alert("Good Afternoon!")
//     } else {
//         if (inputTime >= 1700 && inputTime < 2100 ) {
//             alert("Good Evening!")
//         } else {
//             if (inputTime >= 2100 && inputTime <= 2359 ) {
//                 alert("Good Night!")
//             }
//         }
//     }
// }
// }

// // Chapter#14-16
// // Question#1 & 2

// var studentNames = [];

// // Question # 3

// var stringArray = ["Karachi", "Lahore", "Islamabad", "Multan"];

// // Question # 4

// var numberArray = [1,2,3,4,5,6,7,8,9];

// // Question # 5

// var booleanArray = [true, false];

// // Question # 6

// var mixedArray = ["Pakistan", "China", 1, 2, 3, 4, true, false];

// // Question # 7

// var qualificationsInPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]; 

// // Question # 8

// var names = ["Roashan", "Abyyan", "Aira"];
// var score = [484, 450, 460];
// var total = 500;

// document.write("<h3>" + "Score of " + names[0] + "  is " + score[0] + ". Pecentage:  " + ((score[0]*100)/total) + "%" + "</h3>")
// document.write("<h3>" + "Score of " + names[1] + "  is " + score[1] + ". Pecentage:  " + ((score[1]*100)/total) + "%" + "</h3>")
// document.write("<h3>" + "Score of " + names[2] + "  is " + score[2] + ". Pecentage:  " + ((score[2]*100)/total) + "%" + "</h3>")

// // Question # 10

// var studentScores = [87,76,93,56,73,84,90,48];
// document.write("Scores of Students :  " + studentScores);


// var sortedScores = studentScores.sort()

// document.write("<br/>" + "<br/>" + "Ordered Scores of Students :  " + studentScores);

// // Question # 11

// var  citiesNames = ["Karachi", "Lahore", "Multan", "Islamabad", "Quetta" ];

// var selectedCities = citiesNames.slice(0, 3)

// document.write("<h3>" + "Cities Names" +"</h3>")

// document.write("<h4>" + citiesNames +"</h4>")

// document.write("<h3>" + "Selected Cities Names" +"</h3>")

// document.write("<h4>" + selectedCities +"</h4>")

// // Question # 12

// var arr = ["This", "is", "my",  "cat"];
// document.write("<h1>" + "Array:  "+ "</h1>");
// document.write("<h1>" + arr + "</h1>" +"<br>");

// var joined_arr = arr.join(" ");

// document.write("<h1>" + "String:  "+ "</h1>");
// document.write("<h1>" + joined_arr + "</h1>" +"<br>");

// // Question # 13

// var devices = ["keyboard", "mouse", "monitor",  "printer"];

// document.write("<h2>" + "Devices:  "+ "</h2>");
// document.write("<h2>" + devices + "</h2>" +"<br>");

// var firstDevice = devices.shift();
// document.write("<h2>" + "Out:" + "<br/>" + firstDevice +"</h2>")

// var secondDevice = devices.shift();
// document.write("<h2>" + "Out:" + "<br/>" + secondDevice +"</h2>")

// var thirdDevice = devices.shift();
// document.write("<h2>" + "Out:" + "<br/>" + thirdDevice +"</h2>")

// var fourthDevice = devices.shift();
// document.write("<h2>" + "Out:" + "<br/>" + fourthDevice +"</h2>")

// // Question # 14    

// var devices = ["keyboard", "mouse", "monitor",  "printer"];

// document.write("<h2>" + "Devices:  "+ "</h2>");
// document.write("<h2>" + devices + "</h2>" +"<br>");

// var firstDevice = devices.pop();
// document.write("<h2>" + "Out:" + "<br/>" + firstDevice +"</h2>")

// var secondDevice = devices.pop();
// document.write("<h2>" + "Out:" + "<br/>" + secondDevice +"</h2>")

// var thirdDevice = devices.pop();
// document.write("<h2>" + "Out:" + "<br/>" + thirdDevice +"</h2>")

// var fourthDevice = devices.pop();
// document.write("<h2>" + "Out:" + "<br/>" + fourthDevice +"</h2>")

// // Question # 15

// var mobileCompanies = ["Apple","Samsung", "Motorola", "Nokia","Sony", "Haier"];


// document.write("<select>")
// document.write("<option>"  + mobileCompanies[0]  + "</option>")
// document.write("<option>" + mobileCompanies[1] + "</option>")
// document.write("<option>" + mobileCompanies[2] + "</option>")
// document.write("<option>" + mobileCompanies[3] + "</option>")
// document.write("<option>" + mobileCompanies[4] + "</option>")
// document.write("<option>" + mobileCompanies[5] + "</option>")
// document.write("</select>")

// // Chapter # 17-20

// // Question # 1

// var mulDimArr = [[], [], []];

// // Question # 2

// var mulDimArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]

// document.write(mulDimArray[0] + "<br>" + mulDimArray[1] + "<br>" + mulDimArray[2] + "<br>");

// // Question # 3

// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br />")
// }

// // Question # 4

// var tableOf = +prompt("Enter number to  show its multiplication table:");
// var tableStart = +prompt("Start of " + tableOf + "'s table:")
// var tableTill = +prompt("End of " + tableOf + "'s table:");

// document.write("<h4>" + "Table of " + tableOf + "</h4>")

// for (var i = tableStart; i <= tableTill ; i++) {
//     document.write("<h4>" + tableOf + " x " + i + " = " + tableOf*i + "</h4>")
// }

// // Question # 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length ; i++) {
//     document.write(fruits[i] + "<br/>")
// }
// document.write("<br/>" + "<br/>")
// for (var i = 0; i < fruits.length ; i++) {
//     document.write("Element at index  " + i + " is " + fruits[i], "<br>")
// }

// // Question # 6

// document.write("<h1>" + "Counting:" + "</h1>");
// for (var i = 1; i <= 15 ; i++) {
//     document.write(i + " ")
// }

// document.write("<h1>" + "Reverse Counting:" + "</h1>");
// for (var i = 10; i >= 1 ; i--) {
//     document.write(i + " ")
// }

// document.write("<h1>" + "Even Numbers:" + "</h1>");
// for (i = 0; i <= 20; i++) {

//     if (i % 2 == 0) {
//         document.write(i + " ")
//     }
// }

// document.write("<h1>" + "Odd Numbers:" + "</h1>");
// for (i = 0; i <= 20; i++) {

//     if (i % 2 == 0) {


//     } else {
//         document.write(i + " ")
//     }
// }

// document.write("<h1>" + "Series:" + "</h1>");
// for (i = 2; i <= 20; i++) {

//     if (i % 2 == 0) {
//         document.write(i + "k" + "  ")
//     }
// }

// // Question # 7

// A = ["cake", "apple pie", "cookie", "chips", "patties"];
// userInput = prompt("Enter a snack :")
// flag = false;
// for (i = 0; i <= A.length; i++) {
//     if (userInput == A[i]) {
//         flag = true;
//         userInput = A[i];
//         number = i;
//     }
// }
// if (flag == true) {
//     document.write(userInput + " is available at index " + number + " in our bakery")
// }
// else {
//     document.write("We are Sorry. " + userInput + " is not available")
// }

// // Question # 8

// var a = [24, 53, 78, 91, 12];
// var max = 0;

// document.write("<h4>" + "Array Items:   " + a + "</h4>");

// for(var i = 0; i < a.length; i++){
//         if(max < a[i]){
//             max = a [i];
//         }
// }

// document.write("<h4>" + "The largest number is " + max + "</h4>")

