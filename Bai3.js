// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphins = {
    dt1: [96, 108, 89],
    dt2: [97, 112, 101],
    dt3: [97, 112, 101]
}

const Koalas = {
    dt1: [88, 91, 110],
    dt2: [109, 95, 123],
    dt3: [109, 95, 106]
}

//1. Tính điểm trung bình của mỗi đội
avgDolphins = {
    avg1: dolphins.dt1.reduce((partialSum, a) => partialSum + a, 0) / dolphins.dt1.length,
    avg2: dolphins.dt2.reduce((partialSum, a) => partialSum + a, 0) / dolphins.dt2.length,
    avg3: dolphins.dt3.reduce((partialSum, a) => partialSum + a, 0) / dolphins.dt3.length
}

avgKoalas = {
    avg1: Koalas.dt1.reduce((partialSum, a) => partialSum + a, 0) / Koalas.dt1.length,
    avg2: Koalas.dt2.reduce((partialSum, a) => partialSum + a, 0) / Koalas.dt2.length,
    avg3: Koalas.dt3.reduce((partialSum, a) => partialSum + a, 0) / Koalas.dt3.length
}
console.log(avgDolphins);
console.log(avgKoalas);

//2. So sánh điểm trung bình của mỗi đội
console.log("Data 1");
if (avgDolphins.avg1 > avgKoalas.avg1) {
    console.log("Đội Dolphins có điểm trung bình cao hơn đội Koalas");
} else if (avgDolphins.avg1 == avgKoalas.avg1) {
    console.log("Hai đội hòa nhau");
} else {
    console.log("Đội Koalas có điểm trung bình cao hơn đội Dolphins");
}
console.log("Data 2");
if (avgDolphins.avg2 > avgKoalas.avg2) {
    console.log("Đội Dolphins có điểm trung bình cao hơn đội Koalas");
} else if (avgDolphins.avg2 == avgKoalas.avg2) {
    console.log("Hai đội hòa nhau");
} else {
    console.log("Đội Koalas có điểm trung bình cao hơn đội Dolphins");
}
console.log("Data 3");
if (avgDolphins.avg3 > avgKoalas.avg3) {
    console.log("Đội Dolphins có điểm trung bình cao hơn đội Koalas");
} else if (avgDolphins.avg3 == avgKoalas.avg3) {
    console.log("Hai đội hòa nhau");
} else {
    console.log("Đội Koalas có điểm trung bình cao hơn đội Dolphins");
}


function avrScore(scores) {
    const total = scores.reduce((sum, score) => sum + score);
    return total / scores.length;
}

//3, 4: bonuss
//test 1
if (avrScore(dolphins.dt1) >= 100 || avrScore(Koalas.dt1) >= 100) {
    if (avrScore(dolphins.dt1) > avrScore(Koalas.dt1)) {
        console.log("Bonus 1 belongs to Dolphins !!!!!");
    } else if (avrScore(dolphins.dt1) < avrScore(Koalas.dt1)) {
        console.log("Bonus 1 belongs to Koalas !!!!!");
    } else {
        console.log("Bonus 2 does not belong to both teams !!!!!");
    }
} else {
    console.log("Bonus does not belong to any team !!!!!");
}

//test 2:
if (avrScore(dolphins.dt2) >= 100 || avrScore(Koalas.dt2) >= 100) {
    if (avrScore(dolphins.dt2) > avrScore(Koalas.dt2)) {
        console.log("Bonus 1 belongs to Dolphins !!!!!");
    } else if (avrScore(dolphins.dt2) < avrScore(Koalas.dt2)) {
        console.log("Bonus 1 belongs to Koalas !!!!!");
    } else {
        console.log("Bonus 2 does not belong to both teams !!!!!");
    }
} else {
    console.log("Bonus does not belong to any team !!!!!");
}

//test 3:
if (avrScore(dolphins.dt3) >= 100 || avrScore(Koalas.dt3) >= 100) {
    if (avrScore(dolphins.dt3) > avrScore(Koalas.dt3)) {
        console.log("Bonus 1 belongs to Dolphins !!!!!");
    } else if (avrScore(dolphins.dt3) < avrScore(Koalas.dt3)) {
        console.log("Bonus 1 belongs to Koalas !!!!!");
    } else {
        console.log("Bonus 2 does not belong to both teams !!!!!");
    }
} else {
    console.log("Bonus does not belong to any team !!!!!");
}