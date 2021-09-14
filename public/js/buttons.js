$('.btn').on('click', function() {
    if(this.classList.contains("selected")){
        $(this).removeClass("selected");
        return;
    }
    $('.buttons').children().each(function (){
        $(this).removeClass('selected');
    });
    $(this).addClass("selected");
   
  });