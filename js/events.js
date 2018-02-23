function getIt() {
  $('p').on('click');
  alert('Hey!');
}

function frameIt() {
  $('img').on('load');
  $('img').addClass('tasty');
}

function pressIt() {
  $('input').on('keydown')
}

$(document).ready(function(){
  getIt();
  frameIt();

});