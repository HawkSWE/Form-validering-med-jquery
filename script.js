$(document).ready(function(){
    $('form').submit(function(){
        var name = $('input[id=name]').val();
        var email = $('input[id=email]').val();
        var password = $('input[id=password]').val();
        var conpass = $('input[id=confirm_password]').val();
        var terms = $('input[id=terms]:checked');

        alert(terms);
    });
});