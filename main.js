function printOvertimeRate(hours, rate) {
  // Calculate totat hours worked
  let sum = 0;
  for (let i = 0; i < hours.length; i++) {
    sum += hours[i];
  }
  // Calculate overtime hours
  let overtime;
  if (sum > 40) {
    overtime = sum - 40;
  } else {
    overtime = 0;
  }
  // Cactutate the overtime rate
  let overtimeRate;
  if (overtime < 5) {
    overtimeRate = rate * 1.1;
  } else if (overtime < 10) {
    overtimeRate = rate * 1.2;
  } else {
    overtimeRate = rate * 1.3;
  }
  // Print the overtime rate
  console.log("overtime rate is " + overtimeRate);
}