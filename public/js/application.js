$(document).ready(function(){
  $('#get_color').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type:     'post',
      url:      '/color',
      dataType: 'json',
      data: $(this).serialize()
    }).done(function(data){
       $('#color_me li:nth-child('+data.cell+')').css('background', ''+data.color+'');

    });

  });

});
