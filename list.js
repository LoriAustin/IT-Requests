
function list() {

pjs.defineDisplay("display", "list.json");
while(true) {

var records = pjs.query("SELECT * from requests where name <> ' '");

display.grid.replaceRecords(records);
display.list.execute();

display.grid.readChanged();
  if (!pjs.endOfData()) {
    pjs.query("UPDATE requests SET ? WHERE id = ?", [{complete }, id]);
  }

  }
}

exports.default = list;