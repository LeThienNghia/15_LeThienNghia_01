function calcTip(bill) {
    //Kiểm tra giá trị hóa đơn
    if (bill >= 50 && bill <= 200) {
        return bill * 0.15
    } else {
        return bill * 0.2
    }
}

//Kiểm tra hàm 
console.log(calcTip(100));

//Khởi tạo mảng bills
const bills = [125, 555, 44]

//khởi tạo mảng chứa tiền tip
const tips = bills.map(bill => calcTip(bill));

// In ra mảng tiền boa
console.log(tips); // [18.75, 111, 8.8]

//Khởi tạo mảng total chứa hóa đơn và tiền tip:
const totals = bills.map(bill => bill + tips[bills.indexOf(bill)]);
console.log(totals);