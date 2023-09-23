function printForecast(arr) {
    // Tạo một vòng lặp để lặp qua các nhiệt độ dự báo tối đa trong mảng.
    for (let i = 0; i < arr.length; i++) {
        // Tính số ngày tương ứng với nhiệt độ dự báo hiện tại.
        const days = i + 1;

        // Tạo một chuỗi với nhiệt độ dự báo hiện tại và số ngày tương ứng.
        const forecast = `${days} days ... ${arr[i]}oC`;

        // Thêm dấu ba chấm (`...`) vào đầu và cuối chuỗi.
        const formattedForecast = `... ${forecast} ...`;

        // In chuỗi được định dạng ra console.
        console.log(formattedForecast);
    }
}

// Dữ liệu thử nghiệm 1
const data1 = [17, 21, 23];

// Dữ liệu thử nghiệm 2
const data2 = [12, 5, -5, 0, 4];

// In ra dự báo nhiệt độ cho dữ liệu thử nghiệm 1.
printForecast(data1);

// In ra dự báo nhiệt độ cho dữ liệu thử nghiệm 2.
printForecast(data2);