function validera_email(email) {
    var mönster = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return mönster.test(email);
}

$(document).ready(function(){
    $('form').submit(function(){

        var fel = false;

        var name = $('input[id=name]').val();
        var email = $('input[id=email]').val();
        var password = $('input[id=password]').val();
        var conpass = $('input[id=confirm_password]').val();
        var terms = $('#terms').is(":checked")

        if (terms == false){
            fel = true;
            $('#fel').html('You need to agree to the terms of the site');
        }

        if (conpass != password){
            fel = true;
            $('#fel').html('Confirm password must match password');
        }

        if (password.length < 6){
            fel = true;
            $('#fel').html('Password must be atleast six characters');
        }

        if (!validera_email(email)){
            fel = true;
            $('#fel').html('You need to enter a valid email');
        }

        if (name == '' || name == null){
            fel = true;
            $('#fel').html('You need to enter a name');
        }

        if (fel == true){
            return false;
        }


    });
});