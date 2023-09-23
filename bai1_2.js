const john1 = {
    height: 1.69,
    mass: 78
}

const mark1 = {
    height: 1.95,
    mass: 92
}

const john2 = {
    height: 1.88,
    mass: 95
}

const mark2 = {
    height: 1.76,
    mass: 85
}

function bmi(height, mass) {
    let bmi = mass / (height * height)
    return bmi
}
let bmiMark1 = bmi(mark1.height, mark1.mass)
let bmiMark2 = bmi(mark2.height, mark2.mass)
let bmiJohn1 = bmi(john1.height, john1.mass)
let bmiJohn2 = bmi(john2.height, john2.mass)
console.log("Mark's BMI : " + bmiMark1 + '; ' + bmiMark2)
console.log("John's BMI : " + bmiJohn1 + '; ' + bmiJohn2)
let markHigherBMi = false
if (bmiMark1 > bmiJohn1) {
    if (bmiMark2 > bmiJohn2) {
        markHigherBMi == true
    }
}

if (markHigherBMi == true) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}

if (bmiMark1 > bmiJohn1) {
    console.log("Mark's BMI (" + bmiMark1 + ") is higher than John's (" + bmiJohn1 + ")!")
} else {
    console.log("John's BMI (" + bmiJohn1 + ") is higher than Mark's (" + bmiMark1 + ")!")
}

if (bmiMark2 > bmiJohn2) {
    console.log("Mark's BMI (" + bmiMark2 + ") is higher than John's (" + bmiJohn2 + ")!")
} else {
    console.log("John's BMI (" + bmiJohn2 + ") is higher than Mark's (" + bmiMark2 + ")!")
}