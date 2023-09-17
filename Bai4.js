function calculateTip(billAmount) {
    // Tính tiền boa là 15% nếu giá trị hóa đơn nằm trong khoảng từ 50 đến 300.
    return billAmount >= 50 && billAmount <= 300 ? billAmount * 0.15 : billAmount * 0.2;
}
const bill = 275
const tip = calculateTip(bill)

console.log(`Hóa đơn là ${bill}, tiền boa là ${tip} và tổng giá trị là ${bill + tip}`);