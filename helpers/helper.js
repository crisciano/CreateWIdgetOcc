class Helper {
  constructor() {}
  
  getDate() {
    var d = new Date();
    var year = d.getFullYear();
    var month = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0'); 

    return `${year}-${month}-${day}`;
  }
}

exports.Helper = new Helper();