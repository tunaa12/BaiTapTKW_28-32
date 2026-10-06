function removecolor() {
    var select = document.getElementById("colorSelect");
    if (select.options.length === 0) {
        alert("Danh sách đã hết giá trị!");
        return;
    }
    select.remove(select.selectedIndex);
}
