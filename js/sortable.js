$(function(){
    $('#lista_to_do, #lista_in_progress').sortable({
        connectWith: '.lista',
        cursor: 'pointer',
        delay: 150,   
        helper: 'clone',
        revert: 'invalid'
         
        // start: function(event, ui) {console.log(event);},
        // over: function( event, ui ) {console.log(event)},
        // stop: function(event, ui) {console.log(event);}
        
    }); 
});