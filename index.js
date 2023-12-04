//function updateEmployeeWithKeyAndValue(employee, key, value) {
    //employee[key] = value
  //  return employee;


//const employee = {} 




const employee = { 
    name: "jimmy",
    streetAdress: "2817 21st st",
}

function updateEmployeeWithKeyAndValue(employee, key, value,) {
 return {
    ...employee,
    [key]: value,
    }
 }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee [key] = value
    return employee
} 

function deleteFromEmployeeByKey(employee, key) {
    return {
        ...employee[key]
    }
}
delete employee.key;


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;  
}

