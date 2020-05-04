/*** ACTIVITY 3 ***
1. Start off by creating an array with three student names.
2. Create a loop that will prompt the user for three more names.
3. After every user input, store the new name into the array.
4. Create a new loop that will iterate through the array and console log each element of the array.
================================================================================
*/


 // Create an array with 3 student names
 const students = ["James", "Joe", "John"];
        
 // Create a loop prompting user for 3 more names and push each name to the array
 let counter = 3;
 while (counter > 0){
     // Store the new name into the array
     students.push(prompt("Enter a new student name:"));
     counter = counter - 1;
 }

 // Create a loop iterating through the array and console log each student
 for (let i = 0; i < students.length; i++){
     console.log(students[i] + "\n");
 }