// Super / Base class
class Employee{
    constructor(name, age){
        this.name = name;
        this.age = age;
        
    }
}

class PartTime extends Employee{

    constructor(name, age, payRate, hours){
        super(name,age);
        this.payRate = payRate;
        this.hours = hours;
        this.annualSalary = this.calculatePay();
        this.employeeType = "Part Time";

    }

    calculatePay(){
        return this.payRate * this.hours * 52;
    }
}

// An employee who works 40+ hours
class FullTime extends Employee{

    constructor(name, age, payRate){
        super(name, age);
        this.hours = 40;
        this.payRate = payRate;
        this.annualSalary = this.calculatePay();
        this.employeeType = "Full Time";

    }
    calculatePay(){
        return (this.payRate * 40 * 52) - 1000;
    }
}

class Main{
    
    constructor(){
        console.log("hi");
        // 3 hardcoded employees
        const employee1 = new FullTime("jake", 30, 40, 30);
        const employee2 = new PartTime("Aleyna", 22, 32, 10);
        const employee3 = new PartTime("Alyssa", 20, 25, 8);
        
        // Add employees to array employees
        this.employees = [employee1, employee2, employee3];
        this.displayEmployee();

        let again = true;
        // Switch statement
        while(again){
            again = false;
            // User main menu
            let userSelection = parseInt(prompt("Main Menu\n1. Add Employee\n2. Remove Employee\n3. Edit Employee\n4. Display Employees"));
            switch (userSelection) {
                // Add a new employee
                case 1:
                    let userAddEmploy = prompt("Add employee name, age, hours/wk, pay rate [separate each by a comma]").split(",");
                    this.addEmployee(userAddEmploy);
                    again = true;
                    break;
                case 2:
            
                    break;
                case 3:
            
                    break;
                // Display employees
                case 4:
                    this.displayEmployee();
                    break;
                default:
                    again = true;
                    break;
            }
        }
    }
    // Add a new employee to the array
    addEmployee(userAddEmploy){
        // Hours worked variable
        let hours = parseInt(userAddEmploy[2]);
        if (hours >= 40) {
            let newFtEmployee = new FullTime(userAddEmploy[0], userAddEmploy[1], userAddEmploy[3]);
            this.employees.push(newFtEmployee);
            console.log("Added new FT employee");
            this.displayEmployee();
        }
        else if (hours < 40){
            let newPtEmployee = new PartTime(userAddEmploy[0], userAddEmploy[1], userAddEmploy[3], userAddEmploy[2]);
            this.employees.push(newPtEmployee);
            console.log("Added new PT employee");
            this.displayEmployee();
            
        }
    }
    displayEmployee(){
        let id = 1;
        console.log(`ID\tName\tSalary\thrs\tpay\tFT/PT`);
        this.employees.forEach(e=>{
            console.log(`${id}\t${e.name}\t${e.annualSalary}\t${e.hours}\t${e.payRate}\t${e.employeeType}`);
            id++;
        })
    }
}

// IIFE
(()=>{
    const main = new Main();
})();