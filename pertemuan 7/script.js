$(document).ready(function () {
    $('.card').each(function () {
        $(this).click(function () {
            const hewan = $(this).find('h4').attr('id');
            $('#gambar').remove()
            $(this).prepend(`<img id="gambar" class="card-img-top" src="images/${hewan}.jpg" alt="">`);
            $('#sound').remove()
            $(this).append(`<audio src="sound/${hewan}.mp3" autoplay id="sound"></audio>`);
            
        });
    });
});