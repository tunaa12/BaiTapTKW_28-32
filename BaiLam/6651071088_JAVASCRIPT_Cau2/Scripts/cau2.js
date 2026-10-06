$(function () {
    $("#form1").on("submit", function (e) {
        e.preventDefault();
        var fname = $("input[name='fname']").val();
        var lname = $("input[name='lname']").val();
        alert("Họ và tên: " + fname + " " + lname);
    });
});
