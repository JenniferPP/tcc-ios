// Carousel de mais vendidos
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });


//Validação do campo Newsletter
console.clear()
function validar(){
    alert('Ficamos muito felizes por você fazer parte da nossa comunidade!')
}   
