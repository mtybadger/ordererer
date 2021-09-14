$('.disabled').addClass('disabledByDefault')

$('.btn').on('click', function() {
    if(this.classList.contains("selected")){
        $('.disabledByDefault').addClass('disabled')
        $(this).removeClass("selected");
        return;
    }
    $('.buttons').children().each(function (){
        $(this).removeClass('selected');
    });
    $(this).addClass("selected");
    $('.disabledByDefault').removeClass('disabled')
   
  });