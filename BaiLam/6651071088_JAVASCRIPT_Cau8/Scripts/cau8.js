$(function () {
    $(".op").on("click", function () {
        var a = $("#num1").val().trim();
        var b = $("#num2").val().trim();
        if (a === "" || b === "" || isNaN(a) || isNaN(b)) {
            $("#result").val("Lỗi: nhập số");
            return;
        }
        a = parseFloat(a);
        b = parseFloat(b);
        var r;
        switch ($(this).data("op")) {
            case "+": r = a + b; break;
            case "-": r = a - b; break;
            case "*": r = a * b; break;
            case "/":
                if (b === 0) { $("#result").val("Lỗi: chia cho 0"); return; }
                r = a / b; break;
            case "^": r = Math.pow(a, b); break;
        }
        $("#result").val(r);
    });
});
