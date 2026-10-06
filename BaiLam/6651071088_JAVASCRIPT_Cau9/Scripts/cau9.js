$(function () {
    function validDate(s) {
        var m = /^(\d{1,2})([\/-])(\d{1,2})\2(\d{4})$/.exec(s);
        if (!m) return "Ngày sinh phải theo dạng mm/dd/yyyy hoặc mm-dd-yyyy.";
        var mm = +m[1], dd = +m[3], yy = +m[4];
        if (mm < 1 || mm > 12) return "Tháng phải từ 1 đến 12.";
        if (yy >= new Date().getFullYear()) return "Năm phải nhỏ hơn năm hiện tại.";
        var days = new Date(yy, mm, 0).getDate();
        if (dd < 1 || dd > days) return "Ngày không hợp lệ (tháng " + mm + " có " + days + " ngày).";
        return "";
    }

    function validEmail(s) {
        var parts = s.split("@");
        if (parts.length !== 2) return "Email phải có đúng 1 dấu @.";
        var acc = parts[0], dom = parts[1];
        if (acc === "" || dom === "") return "Email thiếu tên account hoặc domain.";
        if ((acc.match(/\./g) || []).length > 1) return "Tên account có nhiều nhất 1 dấu chấm.";
        if (dom.indexOf(".") === -1) return "Domain phải có ít nhất 1 dấu chấm.";
        if (/^\.|\.$|\.\./.test(dom) || /^\.|\.$/.test(acc)) return "Email không hợp lệ.";
        return "";
    }

    $("#btnClear").on("click", function () {
        $("#regForm")[0].reset();
        $("#regForm input[type=text]").val("");
        $("input[name=sex]").prop("checked", false);
        $("#region").val("");
    });

    $("#regForm").on("submit", function (e) {
        e.preventDefault();
        var errors = [];
        var v = function (id) { return $.trim($("#" + id).val()); };

        if (!v("name")) errors.push("Chưa nhập tên.");
        if (!$("input[name=sex]:checked").length) errors.push("Chưa chọn giới tính.");

        if (!v("email")) errors.push("Chưa nhập email.");
        else { var e1 = validEmail(v("email")); if (e1) errors.push(e1); }

        if (!v("birthday")) errors.push("Chưa nhập ngày sinh.");
        else { var e2 = validDate(v("birthday")); if (e2) errors.push(e2); }

        if (!v("street")) errors.push("Chưa nhập địa chỉ.");
        if (!v("city")) errors.push("Chưa nhập thành phố.");
        if (!$("#region").val()) errors.push("Chưa chọn vùng.");

        if (!v("zip")) errors.push("Chưa nhập Zip code.");
        else if (!/^\d{5}$/.test(v("zip"))) errors.push("Zip code phải có đúng 5 số.");

        if (errors.length) alert("Dữ liệu không hợp lệ:\n- " + errors.join("\n- "));
        else alert("Đăng ký thành công!");
    });
});
