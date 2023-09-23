// 1. Create an array 'bills' containing all 10 test bill values
const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
const tips1 = [];
const totals1 = [];

// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array.
// Use a for loop to perform the 10 calculations!

function calcTip(bill) {
    //Kiểm tra giá trị hóa đơn
    if (bill >= 50 && bill <= 200) {
        return bill * 0.15
    } else {
        return bill * 0.2
    }
}

for (let index = 0; index < bills1.length; index++) {

    const tip = calcTip(bills1[index]);
    const total = bills1[index] + tip;

    tips1.push(tip);
    totals1.push(total);
}

// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array.

function calcAverage(arr) {
    //Cộng tát cả giá trị trong mảng
    let sum1 = 0;
    for (let index = 0; index < arr.length; index++) {
        sum1 += bills1[index];
    }
    //Tính giá trị trung bình 
    const avg = sum1 / arr.length;

    //Trả lại kết quả là giá trị trung bình của mảng
    return avg;
}

// Gọi lại hàm với mảng totals 
const avgTotals = calcAverage(totals1);


console.log(`Average tip: ${avgTotals}`);