let btn=document.getElementById("btn");
btn.addEventListener("click",calculateage);
function calculateage() {
    var d1 = document.getElementById("dateIn").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];    //we are adding last days 31+6  current days
        m2 = m2 - 1;                //so we are subtracting month bcz month pura toh nii hua
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
    document.getElementById("result").innerHTML =
         y + " Years " + m + " Months " + d + " Days";
}