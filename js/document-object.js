
//DOM: document object model (mo hinh doi tuong tai lieu)
var msg = '<p><b>page title: </b>' +document.title+ '</br>';
msg += document.URL + '<br/>';
msg += document.lastModified;

var el = document.getElementById('footer');
el.innerHTML = msg;