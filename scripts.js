$( document).ready(function() {

  $('#gi_horizontal #hz_inner-wrap > div').addClass('inline_div');

  
//var totalWidth = $('#inner-wrap > div').outerWidth;
//console.log(totalWidth);


var width = 0;
$('#gi_horizontal #hz_inner-wrap').children().each(function() {
    width += $(this).outerWidth( true );
});

  
console.log(width);
$('#gi_horizontal #hz_inner-wrap').css('width', width + 250);

}); // END document.ready
