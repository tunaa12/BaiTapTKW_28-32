function getFormvalue() {
    var form = document.getElementById("form1");
    var fname = form.elements["fname"].value;
    var lname = form.elements["lname"].value;
    var full = "Họ và tên: " + fname + " " + lname;
    console.log(full);
    document.getElementById("result").innerHTML = full;
    alert(full);
    return false; // không reload trang
}
