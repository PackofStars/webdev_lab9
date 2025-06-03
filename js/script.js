function init(){
  function alerta() {
    alert("Davon Young: "+form.value); 
  }
  var button = document.getElementById('entrybutton');
  var form = document.getElementById('entryinput');
  var text = document.getElementById('textoutput');
  button.addEventListener('click', alerta);
  button.addEventListener('click', function() {
    text.innerHTML = form.value;
  });



}
window.addEventListener('load', init);