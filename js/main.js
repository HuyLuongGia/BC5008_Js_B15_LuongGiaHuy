//? Excercise 1
// Lay gia tri

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
