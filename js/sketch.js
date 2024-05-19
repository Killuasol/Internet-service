$('.button').click(function(){
    var buttonId = $(this).attr('id');
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
})

$('#modal-container').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});

$('.button1').click(function(){
    var buttonId = $(this).attr('id');
    $('#modal-container1').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
})

$('#modal-container1').click(function(){
    $(this).addClass('out1');
    $('body').removeClass('modal-active');
});