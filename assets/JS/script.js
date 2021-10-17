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
    
    constructor(){
        
        let again = true;
        // Switch statement
        while(again){
            again = false;
            // User main menu
            let userSelection = parseInt(prompt("Main Menu\n1. Add Employee\n2. Remove Employee\n3. Edit Employee\n4. Display Employees"));
            switch (userSelection) {
                case 1:
            
                    break;
                case 2:
            
                    break;
                case 3:
            
                    break;
                case 4:
            
                    break;
                default:
                    again = true;
                    break;
            }
        }
    }
    
}

// IIFE
(()=>{
    const main = new Main();
})();