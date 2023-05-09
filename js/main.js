//? Excercise 1
// Ham Tinh tong
function sum(para1, para2, para3, para4, para5) {
    // console.log(benchmark, area, identify, mark1, mark2, mark3);
    var sum =
        Number(para1) +
        Number(para2) +
        Number(para3) +
        Number(para4) +
        Number(para5);
    return sum;
}
// Hàm Hiển thị
function show() {
    // Lay gia tri
    var benchmark = document.getElementById("benchmark").value;
    var area = document.getElementById("area").value;
    var identify = document.getElementById("identify").value;
    var mark1 = document.getElementById("mark1").value;
    var mark2 = document.getElementById("mark2").value;
    var mark3 = document.getElementById("mark3").value;
    if (Number(mark1) == 0 || Number(mark2) == 0 || Number(mark3) == 0) {
        document.getElementById("txtEx1").innerHTML =
            "Ban da rot. Do co diem bang 0";
    } else {
        var result = sum(area, identify, mark1, mark2, mark3);
        if (result < Number(benchmark)) {
            document.getElementById("txtEx1").innerHTML =
                "Ban da rot. " + "Tong diem cua ban: " + result;
        } else if (result >= Number(benchmark)) {
            document.getElementById("txtEx1").innerHTML =
                "Ban da dau. " + "Tong diem cua ban: " + result;
        }
    }
}
document.getElementById("result").onclick = show;

//? Exercise 2
// Hàm tính số Kw
function costKw(para1) {
    var sum = 0;
    // 50kw dau: 500d/kw
    if (Number(para1) <= 50) {
        sum = Number(para1) * 500;
    }
    // 50kw ke: 650d/kw
    else if (Number(para1) <= 100) {
        para1 = Number(para1) - 50;
        sum = 25000 + para1 * 650;
    }
    // 100kw ke: 850d/kw
    else if (Number(para1) <= 200) {
        para1 = Number(para1) - 100;
        sum = 25000 + 32500 + para1 * 850;
    }
    // 150kw ke: 1100d/kw
    else if (Number(para1) <= 350) {
        para1 = Number(para1) - 200;
        sum = 25000 + 32500 + 85000 + para1 * 1100;
    }
    // Con lai: 1300d/kw
    else {
        para1 = Number(para1) - 350;
        sum = 25000 + 32500 + 85000 + 165000 + para1 * 1300;
    }
    return sum;
}
function showEx2() {
    // Lay gia tri
    var name = document.getElementById("nameEx2").value;
    var kw = document.getElementById("priceEx2").value;
    var price = costKw(kw);
    // Hien thi
    document.getElementById("txtEx2").innerHTML =
        "Ho ten: " + name + "<br/>Tien dien: " + price.toLocaleString();
}
document.getElementById("resultEx2").onclick = showEx2;

//? Excercise 3
// Hàm tổng thu nhập chịu thuế
function costTax(para1, para2) {
    var sum = Number(para1) - 4000000 - Number(para2) * 1600000;
    return sum;
}
// Hàm kiểm tra điều kiện tổng thu nhập
function checkIncome(para1, para2) {
    // Dk1: lon hon 4tr
    if (Number(para1) < 4000000) {
        alert("Tong thu nhap phai lon hon 4tr");
    } else {
        // Dk2: Tong thu nhap tru di 4tr phai lon hon (so ng phu thuoc * 1tr6)
        para1 = Number(para1) - 4000000;
        if (para1 < Number(para2) * 1600000) {
            alert(
                "Tong thu nhap tru di 4tr phai lon hon (so ng phu thuoc * 1tr6)"
            );
        }
    }
}
// Ham hien thi
function showEx3() {
    // Lay gia tri
    var name = document.getElementById("nameEx3").value;
    var income = document.getElementById("priceYear").value;
    var people = document.getElementById("peopleEx3").value;
    checkIncome(income, people);
    //Thu nhap thue ca nhan
    var sumTax = costTax(income, people);
    var personalTax = 0;
    if (sumTax <= 60000000) {
        personalTax = sumTax * (5 / 100);
    } else if (sumTax > 6000000 && sumTax <= 120000000) {
        personalTax = sumTax * (10 / 100);
    } else if (sumTax > 120000000 && sumTax <= 210000000) {
        personalTax = sumTax * (15 / 100);
    } else if (sumTax > 210000000 && sumTax <= 384000000) {
        personalTax = sumTax * (20 / 100);
    } else if (sumTax > 384000000 && sumTax <= 624000000) {
        personalTax = sumTax * (25 / 100);
    } else if (sumTax > 624000000 && sumTax <= 960000000) {
        personalTax = sumTax * (30 / 100);
    } else if (sumTax > 960000000) {
        personalTax = sumTax * (35 / 100);
    }
    // Hien thi
    document.getElementById("txtEx3").innerHTML =
        "Ho ten: " +
        name +
        "<br/>Tien thue thu nhap ca nhan: " +
        personalTax.toLocaleString();
}
document.getElementById("resultEx3").onclick = showEx3;

//? Exercise 4
// hàm ẩn hiện khi chọn loại khách hàng
function showHide() {
    var showhide = document.getElementById("chooseCustomer").value;
    if(Number(showhide) == 2){
        document.getElementById("showOrHide").classList.add("show");
    } 
    else{
        document.getElementById("showOrHide").classList.remove("show");
    }
}
