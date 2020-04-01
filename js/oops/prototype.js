function Employee(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Employee.prototype.fullName = function() {
    return this.firstName+ ' '+ this.lastName;
}
Employee.prototype.company = 'MPS Limited';
var employee1 = new Employee('Chaman', 'Bharti');
var employee2 = new Employee('Roshan', 'Praveen');
console.log(employee1.fullName());
console.log(employee2.fullName());
console.log(employee1.firstName+" "+employee1.lastName+" "+employee1.company);
comlnsole.log(employee1.fullName()+" "+employee1.company);
';'