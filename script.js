function onPageChange(link){
    window.location.href=link;
}

    var tableRowsLength = document.getElementsByTagName("th").length;

    var direction = Array(tableRowsLength);

    for(var i = 0; i < tableRowsLength; i++) {
        direction[i] = false;
    }


function sortTable(selectedCell) {
    alert(direction);

    var tableRows = document.getElementsByTagName("tr");

    var saveLarger = tableRows[1].innerHTML;

    for(var i = 1; i < tableRows.length; i++) {
        for(var j = 1; j < tableRows.length; j++) {
            if(tableRows[j].cells[selectedCell].innerHTML < tableRows[i].cells[selectedCell].innerHTML && !direction[selectedCell]) {
                saveLarger = tableRows[i].innerHTML;
                tableRows[i].innerHTML = tableRows[j].innerHTML;
                tableRows[j].innerHTML = saveLarger;
            }

            else if(tableRows[j].cells[selectedCell].innerHTML > tableRows[i].cells[selectedCell].innerHTML && direction[selectedCell]) {
                saveLarger = tableRows[i].innerHTML;
                tableRows[i].innerHTML = tableRows[j].innerHTML;
                tableRows[j].innerHTML = saveLarger;
            }
        }
    }

    
    direction[selectedCell] = !direction[selectedCell];

}