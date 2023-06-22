function signInAction() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let isChecked = document.getElementById('terms').checked;
    if (isChecked) {
        if (username == "admin" && password == "admin") {
            window.open("admin.html")
        } else if (username == "manager" && password == "manager") {
            window.open("manager.html");
        } else if (username == "student" && password == "student") {
            window.open("student.html");
        } else { // fail
            window.alert("wrong credentials ❌");
        }
    } else {
        window.alert("please, accept the terms and conditions!");
    }
}
function checkReservation() {
    let arrival = document.getElementById('arrival-date').value;
    let departure = document.getElementById('departure-date').value;

    console.log(arrival)
    if (arrival === undefined) {
        alert("enter arrival date!")
    } else if (departure === undefined) {
        alert("enter departure date!")
    } else {
        let arr_dd, arr_mm, arr_yy, dep_dd, dep_mm, dep_yy;
        [arr_dd, arr_mm, arr_yy] = dateToValues(arrival);
        [dep_dd, dep_mm, dep_yy] = dateToValues(departure);
        if(dep_yy < arr_yy){
            alert("Invalid year ❌");
        }else if(dep_mm < arr_mm){
            alert("Invalid month ❌");
        }else if(dep_dd < arr_dd){
            alert("Invalid day ❌");
        }else{
            alert("successful update ✅")
        }
    }
}
function dateToValues(date) { // assuming the date always have 10 characters
    let yy = parseInt(date.substring(0, 4))
    let mm = parseInt(date.substring(5, 7))
    let dd = parseInt(date.substring(8, 10))
    return [dd, mm, yy];
}