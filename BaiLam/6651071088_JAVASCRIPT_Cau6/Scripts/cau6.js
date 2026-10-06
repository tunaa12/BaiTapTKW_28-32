$(function () {
    $("#btnCount").on("click", function () {
        var items = $("#mySelect option").map(function () {
            return $(this).text();
        }).get();
        alert("Có " + items.length + " mục:\n" + items.join("\n"));
    });
});
