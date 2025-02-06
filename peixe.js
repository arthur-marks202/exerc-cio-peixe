var config = {
    type: Phaser.AUTO,
    width: 900,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var bot, startButton;
var botSpeedX = 3;
var botSpeedY = 3;
var gameStarted = false;

function preload() {
    this.load.image('mar','asstes/fundo-de-fundo-do-mar-para-videoconferencia_23-2148657078.avif');
    this.load.image('logo', 'asstes/logo-inteli_azul.png');
    this.load.image('peixe','asstes/peixes/fish3.png');
    this.load.image('bot', 'asstes/tubarao3.png');
    this.load.image('startButton', 'asstes/image-removebg-preview.png');
}

function create() {
    this.add.image(450, 300, 'mar');
    this.add.image(470, 60, 'logo' ).setScale(0.5);

    startButton = this.add.image(450, 300, 'startButton').setInteractive();
    startButton.setScale(0.5);

    startButton.on('pointerdown', startGame, this);
}

function startGame() {
    startButton.destroy();
    
    peixinho = this.add.image(400, 300, 'peixe');
    peixinho.setFlip(true, false);

    bot = this.add.image(450, 300, 'bot');
    bot.setScale(0.5);

    gameStarted = true;
}

function update() {
    if (!gameStarted) return;

    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

    bot.x += botSpeedX;
    bot.y += botSpeedY;

    if (bot.x <= 0 || bot.x >= 900) {
        botSpeedX *= -1;
    }
    if (bot.y <= 0 || bot.y >= 600) {
        botSpeedY *= -1;
    }
}
