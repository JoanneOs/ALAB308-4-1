//Hi this is some of my homework, 1sr,2nd part

//previous homework CSV
/*
let csvArray =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
console.log("----------------------------");
console.log("Part 1: Refactoring Old Code");
console.log(csvArray);*/

//Part 2: Expanding Functionality
/*Begin with the following task:
Declare a variable that stores the number of columns in each row of data within the CSV .
Instead of hard-coding four columns per row, expand your code to accept any number of
columns. This should be calculated dynamically based on the first row of data.*/

//split csv into rows
/*
let row = csvArray.split("\n");
let dataColl = []; //my array*/
//for loop to put data to array
//for (let i=0;i,row.length;i++)
//   {let column=row.split(",");
//csvArray.push(column);
//}

//Part 3: Transforming Data

// row.forEach((row) => {
//   let column = row.split(",");
//   // csvArray.push(column);});  //not an array erro
//   dataColl.push(column);
// });

//});
//output
// console.log("----------------------------");
// console.log("Part 2: Expanding Functionality");
// console.log(dataColl);

// //Part 3: Transforming Data
// let csvArray1 =
//   "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// let row1 = csvArray1.split("\n");
// let h=row1[0].split(",");
// let dataColl1 = [];

// row1.forEach((row1) => {
//   let column1 = row1.split(",");
//   dataColl1.push(column1);
// });

// Loop through the remaining rows (skipping the headers row)
// for (let i = 1; i < row1.length; i++) {
//   let column1 = row1[i].split(","); // Split each row into columns
//   let rowObject = {}; // Create an empty object for each row
  
//   // Assign values to the object based on headers
//   for (let j = 0; j < h.length; j++) {
//     rowObject[h[j].toLowerCase()] = column1[j];
//   }
  
//   dataColl1.push(rowObject); // Push the object to the array
// }
// console.log("----------------------------");
// console.log("Part 3: Transforming Data");

// console.log(dataColl1);

//objects can be done tomorrow
//for loop to put data to array
// for (let i=1;i,row.length;i++)//strting from second row
//  { for (let j=1;j,row.length;j++){let dataColl1[i][j]=dataColl1[0][]+dataColl1[j][];
// //csvArray.push(column);
// }
// console.log(dataColl1);

//will submit this half of work, and wait until learning objects on Tusday to complete

//part 3
/*
let firstrow=[];
for (leyx=0;i< dataColl[0].length;i++)
{firstrow.push(dataColl[0][i]);}

//transfrom rows to objects

let object=[];
for (leti=1;i<dataColl.length;i++)
{let rowR={};
for (let j=0;j<firstrow.length;j++){rowR[firstrow[j]]=dataColl[i][j];}
object.push(rowR);}
console.log("here data as object:",object);
*/
//wring clean code
// Extract the first row (headers)
// let firstrow = [];
// for (let i = 0; i < dataColl[0].length; i++) {
//   firstrow.push(dataColl[0][i].toLowerCase()); // Convert to lowercase
// }

// // Transform rows to objects
// let object = [];
// for (let i = 1; i < dataColl.length; i++) {
//   let rowR = {};
//   for (let j = 0; j < firstrow.length; j++) {
//     rowR[firstrow[j]] = dataColl[i][j]; // Assign values to keys
//   }
//   object.push(rowR);
// }
// console.log("----------------------------");
// console.log("Part 4: Sorting and Manipulating Data");
// console.log("Here is the data as objects:", object);

//part 5
//As a final task, transform the final set of data back into CSV format.
// so we doing backwork for previous steps
/*
let object1 = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];


let finalcsv=" id,name,occupation,age\n";
for (let i=0;i<object1.length;i++)
  {let r=object1.id+","+object1[i].name+","+object1[i].occupation+","+object1[i].age;
  finalcsv+=r+"\n";//adding row and new line
  // console.log("Part 5: Final CSV format:\n", finalcsv);
  }
console.log("Part 5: Final CSV format:\n", finalcsv);
*/

// The array of objects
// let object1 = [
//   { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//   { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//   { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//   { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//   { id: "7", name: "Bilbo", occupation: "None", age: "111" },
// ];

// // Step 1: Define the CSV header
// let finalcsv = "id,name,occupation,age\n";

// Step 2: Loop through the objects and build each CSV row
// for (let i = 0; i < object1.length; i++) {
//   // Access properties using object1[i]
//   let r =
//     object1[i].id +
//     "," +
//     object1[i].name +
//     "," +
//     object1[i].occupation +
//     "," +
//     object1[i].age;

//   // Add the row and a new line
//   finalcsv += r + "\n";
// }
// // Loop through each object in "object1"
// for (let i = 0; i < object1.length; i++) {
  
//   // Create a row with id, name, occupation, and age, separated by commas
//   let r = object1[i].id + "," + object1[i].name + "," + object1[i].occupation + "," + object1[i].age;

//   // Add the row to "finalcsv" and move to the next line
//   finalcsv += r + "\n"; // "\n" means new line
// }



// // Step 3: Output the final CSV format
// console.log("----------------------------");
// console.log("Part 5: Final CSV format:\n", finalcsv);


//////////////////
//clean homework without comments collected from work above
/////////////////
// Part 1: CSV String to Data Array
console.log("----------------------------");
console.log("Part 1: Converting CSV to Array");

let csvData = `
id,name,occupation,age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor's Assistant,26
`;

// Step 1: Split the CSV string into an array of rows
let rows = csvData.trim().split("\n");
console.log("CSV rows:", rows);

// Part 2: Split Each Row Into Individual Data Points
console.log("----------------------------");
console.log("Part 2: Splitting Rows into Data Points");

let headers = rows[0].split(",");
let dataColl = rows.slice(1).map(row => row.split(","));
console.log("Headers:", headers);
console.log("Data Collection (raw):", dataColl);

// Part 3: Transform Data Points into Objects
console.log("----------------------------");
console.log("Part 3: Transforming Data into Objects");

let dataColl1 = dataColl.map(row => {
  return {
    id: row[0],
    name: row[1],
    occupation: row[2],
    age: row[3]
  };
});
console.log("Data Collection (as objects):", dataColl1);

// Part 4: Sorting and Manipulating Data
console.log("----------------------------");
console.log("Part 4: Sorting and Manipulating Data");

// Step 1: Remove the last element from the array
let removedLast = dataColl1.pop();
console.log("Removed the last element:", removedLast);
console.log("Array after removing the last element:", dataColl1);

// Step 2: Insert the object at index 1
let barry = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
dataColl1.splice(1, 0, barry); // Insert Barry at index 1
console.log("Inserted Barry at index 1:");
console.log(dataColl1);

// Step 3: Add the following object to the end of the array
let bilbo = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
dataColl1.push(bilbo); // Add Bilbo to the end
console.log("Added Bilbo to the end of the array:");
console.log(dataColl1);

// Step 4: Calculate the average age of the group
let totalAge = 0;
dataColl1.forEach((person) => {
  totalAge += parseInt(person.age); // Convert the age string to a number
});

let averageAge = totalAge / dataColl1.length;
console.log("Average age of the group:", averageAge);

//renaming 