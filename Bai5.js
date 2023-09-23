function calcAverage(scores) {
    // Tính trung bình cộng của 3 điểm
    return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

function checkWinner(avgDolphins, avgKoalas) {
    // Xác định đội chiến thắng
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        return `No winner`;
    }
}

// Data 1
const dolphinsScores1 = [44, 23, 71];
const koalasScores1 = [65, 54, 49];

// Tính điểm trung bình cho mỗi đội
const avgDolphins1 = calcAverage(dolphinsScores1);
const avgKoalas1 = calcAverage(koalasScores1);

// Xác định đội chiến thắng
const winner1 = checkWinner(avgDolphins1, avgKoalas1);
console.log(winner1);

// Output:
// Koalas win (30 vs. 13)

// Data 2
const dolphinsScores2 = [85, 54, 41];
const koalasScores2 = [23, 34, 27];

// Tính điểm trung bình cho mỗi đội
const avgDolphins2 = calcAverage(dolphinsScores2);
const avgKoalas2 = calcAverage(koalasScores2);

// Xác định đội chiến thắng
const winner2 = checkWinner(avgDolphins2, avgKoalas2);
console.log(winner2);

// Output:
// Dolphins win (33.3 vs. 16.3)