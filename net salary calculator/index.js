// Constants for KRA, NHIF, and NSSF values
const KRA_PERCENTAGE = 0.3; // 30% tax rate
const NHIF_AMOUNT = 500; // Fixed NHIF deduction amount
const NSSF_PERCENTAGE = 0.05; // 5% NSSF deduction rate

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
  // Calculate gross salary
  const grossSalary = basicSalary + benefits;

  // Calculate payee (tax)
  const payee = grossSalary * KRA_PERCENTAGE;

  // Calculate NHIF deductions
  const nhifDeductions = NHIF_AMOUNT;

  // Calculate NSSF deductions
  const nssfDeductions = grossSalary * NSSF_PERCENTAGE;

  // Calculate net salary
  const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

  // Return the calculated values
  return {
    grossSalary,
    payee,
    nhifDeductions,
    nssfDeductions,
    netSalary
  };
}
// Prompt user for input
const basicSalary = parseFloat(prompt("Enter basic salary: "));
const benefits = parseFloat(prompt("Enter benefits: "));

const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("Payee (Tax):", salaryDetails.payee);
console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
console.log("Net Salary:", salaryDetails.netSalary);