function fetchRecord(){
  rowId = document.getElementById("row").value;
  details = document.getElementById("bookTable").rows[rowId];
  displayRec = document.getElementById("selectedRow");
  displayRec.innerHTML = "<ul><li>S. No.: "+ details.cells[0].innerText + "<li>Name: "+ details.cells[1].innerText + "<li>Author: "+ details.cells[2].innerText + "<li>Price: "+ details.cells[3].innerText
  //console.log(rowId)
}