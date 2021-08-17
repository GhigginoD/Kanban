$(document).ready(function() {
    $('#lista_to_do li,#lista_in_progress li, #lista_done').draggable({
        helper: 'clone', 
        revert: 'invalid',
        
    });

    $('#to_do').droppable({
        drop: function(event, ui) {
            $('#lista_to_do').append(ui.draggable);
        }
    });

    $('#in_progress').droppable({
        drop: function(event, ui) {
            $('#lista_in_progress').append(ui.draggable);
        }
    });

    $('#done').droppable({
        drop: function(event, ui) {
            $('#lista_done').append(ui.draggable);
        }
    });

    // start: function(event, ui) {console.log(event);},
    // over: function( event, ui ) {console.log(event)},
    // stop: function(event, ui) {console.log(event);}
});
