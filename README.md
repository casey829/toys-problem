# toys-problem

**ABOUT THE GRADING**
The program defines a function 'gradeClaculator'that calculates the grade based on the input marks and specified grade range.
The 'main' function takes the input marks using 'prompt', calls gradecalculator, and displays the corresponding grade using 'console.log'.
# Grade Range
A: Greater than 79
B: 60 to 79
C: 50 to 59
D: 40 to 49
E: Less than 40
$$
OUTCOME;
$$
For marks greater than 79, it prints: "Grade: A".
For marks between 60 and 79, it prints: "Grade: B".
For marks between 50 and 59, it prints: "Grade: C".
For marks between 40 and 49, it prints: "Grade: D".
For marks less than 40, it prints: "Grade: E".







the NSSF rate and the gross salary.
The code follows the following steps to calculate the net salary:.

Calculate Gross Salary:
The gross salary is calculated by adding the basic salary and benefits.

Calculate Tax:
Tax is calculated based on the tax rate and the gross salary.

Calculate NHIF Deductions:
NHIF deductions are calculated based on the NHIF rate and the gross salary.

Calculate NSSF Deductions:
NSSF deductions are calculated based on 
Calculate Net Salary:
The net salary is calculated by subtracting the total deductions (tax, NHIF, and NSSF) from the gross salary.

Usage
To calculate the net salary for an individual:

Open the JavaScript file where the calculateNetSalary function is defined.

Call the netSalaryCalculation function, passing the basic salary and benefits as arguments. For example:

javascript

const basicSalary = 70000; // salary in KES
const benefits = 8000; // benefits in KES
const result = calculateNetSalary(basicSalary, benefits); // Calculate net salary
Run the program and observe the output. It will display the gross salary, tax, NHIF deductions, NSSF deductions, and net salary for the provided inputs.




**Speed Detector **
This JavaScript program takes the speed of a car as input and calculates demerit points based on the specified criteria. It then prints the appropriate message according to the number of demerit points.
GUIDES
The program defines a function speedDetector that calculates demerit points based on the input speed and a predefined speed limit.
The points function takes the input speed, calls  speedDetector, and logs the appropriate message based on the demerit points.
Example :
If the speed is less than 70 km/h, it prints: "Ok".
If the speed is greater than or equal to 70 km/h, it calculates and prints the demerit points.
If the demerit points exceed 12, it prints: "License suspended".