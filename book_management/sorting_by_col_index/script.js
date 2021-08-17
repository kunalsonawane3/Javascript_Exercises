function sort(order){
    var table, rows, isSwitching, i, x, y, needSwitch;
    table = document.getElementById("bookTable");
    col = document.getElementById("col").value;
    isSwitching = true;
    while (isSwitching) {
      isSwitching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        needSwitch = false;
        x = rows[i].getElementsByTagName("TD")[col-1];
        y = rows[i + 1].getElementsByTagName("TD")[col-1];
        if (order === 0){
            if (x.innerHTML > y.innerHTML) {
                needSwitch = true;
                break;
          }}
        else if (order === 1) {
            if (x.innerHTML < y.innerHTML) {
                needSwitch = true;
                break;
              }}
        }

      
      if (needSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        isSwitching = true;
      }
    }
}
  