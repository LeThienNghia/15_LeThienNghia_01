class Person {
    constructor(name, mass, height) {
            this.name = name;
            this.mass = mass;
            this.height = height;
            this.bmi = null;
        }
        //2. Create "calcBMI" method
    calcBMI() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }

}

//1. Tạo hai đối tượng mark và john
const mark = new Person("Mark Miller", 78, 1.69);
const john = new Person("John Smith", 92, 1.95);


//Tính chỉ số bmi và lưu vào biến bmi 
mark.calcBMI();
john.calcBMI();

// Compare BMI and log to the console
if (mark.bmi > john.bmi) {
    console.log(`${mark.name}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.name}'s (${john.bmi.toFixed(1)})!`);
} else {
    console.log(`${john.name}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.name}'s (${mark.bmi.toFixed(1) })!`);
}