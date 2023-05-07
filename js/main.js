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

//? Exercise2
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
        sum = 25000 + (para1 * 650)
    }
    // 100kw ke: 850d/kw
    else if(Number(para1) <= 200) {
        para1 = Number(para1) - 100;
        sum = 25000 + 32500 + (para1 * 850);
    }
    // 150kw ke: 1100d/kw
    else if(Number(para1) <= 350) {
        para1 = Number(para1) - 200;
        sum = 25000 + 32500 + 85000 + (para1 * 1100);
    }
    // Con lai: 1300d/kw
    else {
        para1 = Number(para1) - 350;
        sum = 25000 + 32500 + 85000 + 165000 + (para1 * 1300);
    }
    return sum;
}
function showEx2(){
    // Lay gia tri
    var name = document.getElementById("nameEx2").value;
    var kw = document.getElementById("priceEx2").value;
    var price = costKw(kw);
    // Hien thi
    document.getElementById("txtEx2").innerHTML = "Ho ten: " + name + "<br/>Tien dien: " + price.toLocaleString();

}
document.getElementById("resultEx2").onclick = showEx2;
