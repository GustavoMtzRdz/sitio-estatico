const tabla = document.querySelector('.card-header');
const aviso = document.querySelector('.aviso');

if (tabla) {
    $(tabla).on('mouseover', function(event) {
        aviso.className = 'row aviso bg-info card-body d-block';
    });
    $(tabla).on('mouseout', function(event) {
        aviso.className = 'row aviso bg-info card-body d-none';
    });
}
