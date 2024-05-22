#Salary Calculator README
This is a simple salary calculator program written in JavaScript. It calculates the net salary of an employee based on their basic salary and benefits, taking into account deductions for taxes, NHIF (National Hospital Insurance Fund), and NSSF (National Social Security Fund).

##How to Use
Open the JavaScript file in an integrated development environment (IDE).
Locate the constants at the beginning of the code:
KRA_PERCENTAGE: Represents the tax rate as a decimal. In this code, it is set to 0.3, which corresponds to a 30% tax rate.
NHIF_AMOUNT: Represents the fixed NHIF deduction amount. In this code, it is set to 500.
NSSF_PERCENTAGE: Represents the NSSF deduction rate as a decimal. In this code, it is set to 0.05, which corresponds to a 5% deduction rate.
Customize the constants if needed. You can modify the tax rate, NHIF deduction amount, and NSSF deduction rate according to your requirements.
Locate the calculateNetSalary function, which takes the basicSalary and benefits as input parameters. It performs the necessary calculations to determine the gross salary, payee (tax), NHIF deductions, NSSF deductions, and net salary.
Below the calculateNetSalary function, you will find the code that prompts the user to enter the basic salary and benefits. The values entered by the user are then passed to the calculateNetSalary function to calculate the salary details.
Run the JavaScript code in  a web browser's developer console .
After running the code, the calculated salary details will be displayed in the console. The output will include the gross salary, payee (tax), NHIF deductions, NSSF deductions, and net salary.