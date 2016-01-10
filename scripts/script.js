$(document).ready(function () {
    /* on page load */
    $('.ryu-action').hide();
    $('.ryu-still').show();
    /* on mouseover */
    $('.ryu').mouseenter(function () {
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    });
    $('.ryu').mouseleave(function () {
        $('.ryu-action').hide();
        $('.ryu-still').show();
    });
    /* on click */
    $('.ryu').mousedown(function () {
        playHadouken();
        $('.ryu-action').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate({
                'left': '250px'
            },
            500,
            function () {
                $(this).stop();
                $(this).hide();
                $(this).css('left', '-250px');
            }
        );
    });
    $('.ryu').mouseup(function () {
        $('.ryu-action').hide();
        $('.ryu-still').show();
    });
    /* on keypress */
    $(document).keydown(function (key) {
        //keyCode == 88 is the X key
        if (key.keyCode == 88) {
            $('.ryu-action').hide(); //(this line means hide all 4 divs)
            $('.ryu-cool').show();
            playCool()
        }
    });

    /*    —> keyup —> display the default state --> ryu-still (and hide everything else)*/
    $(document).keyup(function (key) {
        if (key.keyCode == 88) {
            $('.ryu-action').hide(); //(this line means hide all 4 divs)
            $('.ryu-still').show();
            $('#cool')[0].pause();
        }
    });
})

/* playing a sound */
var hadoukenSound = false;

function playHadouken() {
    hadoukenSound = !hadoukenSound;
    if (hadoukenSound) {
        $('#hadouken-sound')[0].volume = 0.5; //set the volume (0 => 0% and 1 => 100%; so 0.5 is 50%)
        $('#hadouken-sound')[0].load(); //load the sound into the memory
        $('#hadouken-sound')[0].play(); //play it
    }
}

var coolSound = false;

function playCool() {
    coolSound = !coolSound;
    if (coolSound) {
        $('#theme-song')[0].pause();
        // $('#cool')[0].load()
        $('#cool')[0].play();
    }
}
