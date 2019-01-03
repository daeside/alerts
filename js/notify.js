
function show()
{
    setTimeout(function() {
        $("#container-notify").fadeIn(1200);
    },0);
}

function hide()
{
    setTimeout(function() {
        $("#container-notify").fadeOut(1200);
    },3700);
}

function destroy()
{
    $("#container-notify").remove();   
}

function names(types)
{
    switch(types)
    {
        case 'fail':
        return 'ERROR';
        break;

        case 'alert':
        return 'ADVERTENCIA';
        break;

        case 'ok':
        return 'EXITO';
        break;

        case 'info':
        return 'INFORMACION';
        break;
    }
}

function notify(type, msg)
{
    destroy();

    alert = '<div id="container-notify"><div class="message-notify ' + type + '-notify"><p><span>' + names(type) + ': </span>' + msg + '</p></div>';
    $("body").append(alert);

    show();
    hide();
}