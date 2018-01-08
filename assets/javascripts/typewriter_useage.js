var pause_time = 1500;
var splash_screen_text = document.querySelector('.splashscreen-text');

var typewriter = new Typewriter(splash_screen_text, {
    loop: true
});

typewriter.typeString('WEBSEITEN')
    .pauseFor(pause_time)
    .deleteAll()
    .typeString('LOGOS')
    .pauseFor(pause_time)
    .deleteAll()
    .typeString('VISITENKARTEN')
    .pauseFor(pause_time)
    .deleteAll()
    .typeString('SCHULUNGEN')
    .pauseFor(pause_time)
    .deleteAll()
    .typeString('BERATUNG')
    .pauseFor(pause_time)
    .start();
