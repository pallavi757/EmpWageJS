//UC5-Calculating  Wages till a condition of total workinghours of 160 or max days of 20 is reached for a month
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_IN_A_MONTH = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empHrs = 0;
let dailyEmpHrs = 0;

while (totalEmpHrs <= MAX_WORKING_HOURS && totalWorkingDays <= MAX_WORKING_DAYS) {
    
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() *3);
    switch (empCheck) {
        case IS_ABSENT:   //0    
         dailyEmpHrs= 0; // 0
            break;
        case IS_PART_TIME: //1
         dailyEmpHrs= PART_TIME_HOURS; //const PART_TIME_HOURS = 4;
            break;
        case IS_FULL_TIME: //2
         dailyEmpHrs= FULL_TIME_HOURS; //const PART_TIME_HOURS = 8;
            break;
        default:
            break
    }
    totalEmpHrs += dailyEmpHrs;
    
}
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Hours: " +totalEmpHrs+ "\nTotal Wage: " + empWage);