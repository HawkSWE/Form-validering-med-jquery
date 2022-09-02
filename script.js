// funktionen nedanför validerar en email.
function validera_email(email) {
    // Här sparar jag ett mönster som man kan använda för att testa om en email är riktig.
    var mönster = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // Här testar vi mönstret mot mailen som användaren har matat in. Vi får antingen true eller false tillbaka.
    // False betyder att mailen inte är godtagbar medans om det är true så är det tvärtom.
    return mönster.test(email);
}

$(document).ready(function(){
    // Denna kod körs när formen blir submitad.
    $('form').submit(function(){

        var fel = false;

        var name = $('input[id=name]').val();
        var email = $('input[id=email]').val();
        var password = $('input[id=password]').val();
        var conpass = $('input[id=confirm_password]').val();
        var terms = $('#terms').is(":checked")

        // Kollar ifall användaren har kryssat rutan.
        if (terms == false){
            fel = true;
            $('#fel').html('You need to agree to the terms of the site');
        }
        // Kollar ifall password och confirm password har samma inmatning.
        if (conpass != password){
            fel = true;
            $('#fel').html('Confirm password must match password');
        }
        // Kollar ifall password är mer än 6 tecken.
        if (password.length < 6){
            fel = true;
            $('#fel').html('Password must be atleast six characters');
        }
        // använder funktionen för att kolla om det är en riktig email.
        if (!validera_email(email)){
            fel = true;
            $('#fel').html('You need to enter a valid email');
        }
        // Kollar ifall namn är tomt.
        if (name == '' || name == null){
            fel = true;
            $('#fel').html('You need to enter a name');
        }
        // Kollar om det finns några fel. Om det finns fel så kommer submiten att stoppas och användaren får veta vad som är fel.
        if (fel == true){
            return false;
        }


    });
});