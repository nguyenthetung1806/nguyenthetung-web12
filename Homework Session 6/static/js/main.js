

$(function(){
  console.log('Doc full loaded');
  $('#question').on('input', function(){
    let remainCharacter = 200 - $('#question').val().length;
    $('#remainCharacter').text(remainCharacter);
  });
  // Sau khi HTML tải hoàn tất thì sẽ thực hiện các lệnh bên trong
});



$('#question').on('input', function(){
  let remainCharacter = 200 - $('#question').val().length;
  $('#remainCharacter').text(remainCharacter);
});

$( document ).ready(function(){
  console.log('Doc full loaded');
  // Sau khi HTML tải hoàn tất thì sẽ thực hiện các lệnh bên trong
});


$('.nav-link').click(function(){
  console.log('đeádasd');
  $('.nav-link').removeClass('active');
  $(this).addClass('active');
});
