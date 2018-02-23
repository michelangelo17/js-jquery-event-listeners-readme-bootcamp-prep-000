function getIt() {
  $('p').on('click');
  alert('Hey!');
}

function frameIt() {
  $('img').on('load');
  $('img').addClass('tasty');
}

function pressIt() {
  $('input').on('keydown', function(e) {
    if (e.which === 71) {
      alert('You have pressed the letter "G"');
    }
  } 
)}

$(document).ready(function(){
  getIt();
  frameIt();

});