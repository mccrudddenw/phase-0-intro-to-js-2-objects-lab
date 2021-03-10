

const employee = {
    name: 'wyatt',
    streetAddress: '6049 Rose Loop NE'
  
}


function updateEmployeeWithKeyAndValue(employee, key, value) {
     
    const newObj = {...employee};

    newObj[key] = value;  


    return newObj;

}


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    
    obj[key] = value;

    return obj;
}


function deleteFromEmployeeByKey(employee, key) {

    const newObj = {...employee};

    delete newObj[key];

    return newObj;

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];

    return employee;

}