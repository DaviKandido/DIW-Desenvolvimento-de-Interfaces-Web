$(document).ready(function(){
    $('#btn').click(function(){
        if($(this).css('background-color') == 'rgb(255, 0, 0)'){
            $(this).css('background-color', 'green');
        }else{
            $(this).css('background-color', 'red');
        }
    });

    $('[lang="en"]').css('font-style', 'italic');
})
