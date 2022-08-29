$(document).ready(function(){

    $('form').submit(function(){
        var name = $('input[id=name]').val();
        alert(name);
    });

});