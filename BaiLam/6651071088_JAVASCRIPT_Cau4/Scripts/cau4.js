$(function () {
    $("#btnRemove").on("click", function () {
        var $sel = $("#colorSelect");
        if ($sel.find("option").length === 0) {
            alert("Danh sách đã hết giá trị!");
            return;
        }
        $sel.find("option:selected").remove();
    });
});
