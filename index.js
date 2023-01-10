/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(array)
{
    const employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents:[],
        timeOutEvents:[]
    };
return employee;
}
function createEmployeeRecords(arrayOffArrays)
{
    const employeeRecords = [];
    for (const arr of arrayOffArrays)
    {
        employeeRecords.push(createEmployeeRecord(arr));
    }
    return employeeRecords;
}
function createTimeInEvent(date)
{
const dateArray = date.split(" ");
const dateObject = 
{
    type: "TimeIn",
    hour: dateArray[1],
    date: dateArray[0]
}
console.log(dateObject);
}
function createTimeOutEvent(date)
{
const dateArray = date.split(" ");
const dateObject = 
{
    type: "TimeOut",
    hour: dateArray[1],
    date: dateArray[0]
}
console.log(dateObject);
}
function hoursWorkedOnDate(hourDate)
{

}
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

