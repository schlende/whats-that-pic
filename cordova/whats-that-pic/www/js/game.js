
var serverURI = "http://192.168.1.93:3000/game/1"

$(document).ready(function(){
    loadGame(serverURI);
});

function loadGame(url){
    $.ajax({
        dataType: "json",
        url: url,
        data: {}
    }).done(function( images ) {
        for(image in images){
            uri = images[image];
            $('body').append("<img src='" + uri + "'/>");
        }
    }).fail(function(self, message) {
        alert( "error" );
    });
}
