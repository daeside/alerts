function destroyModal()
{
	$('div').addClass('hide-alert');
	
	setTimeout(function(){
    $('#container-modal').remove();
    }, 300);
}

function message(msg, title)
{
	var title = title || "";
	var alert = '<div id="container-modal"><div><h2>' + title + '</h2><p>' + msg + '</p><button onclick="destroyModal()">Aceptar</button></div></div>';
	
	$("body").append(alert);
}