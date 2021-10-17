// Super / Base class
class Employee{
    constructor(name, age, annualSalary){
        this.name = name;
        this.age = age;
        this.annualSalary = annualSalary;
    }
}

class PartTime extends Employee{

    constructor(payRate, hours, type){
        super();
        this.payRate = payRate;
        this.hours = hours;
        this.employeeType = type;

    }

    calculatePay(){

    }
}

// An employee who works 40+ hours
class FullTime extends Employee{

    constructor(payRate, type){
        super();
        this.payRate = payRate;
        this.employeeType = type;

    }
    calculatePay(){

    }
}

class Main{

}

// IIFE
(()=>{
    const main = new Main();
})();