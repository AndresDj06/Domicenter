const app = document.gerElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
.typeString('Capital de la selva')
.pauseFor(200)
.start();