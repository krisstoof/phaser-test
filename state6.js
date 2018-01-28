var volcano, emitter;

demo.state6 = function(){};
demo.state6.prototype = {
    preload: function(){
        game.load.image('volcano', 'assets/sprites/volcano.png');
        game.load.image('redBall', 'assets/sprites/redBall.png');
        game.load.image('orBall', 'assets/sprites/orBall.png');
    },
    create: function(){
        game.stage.backgroundColor = '#00cc00';
        addChangeStateEventListeners();
        
        game.add.sprite(centerX, 1000, 'volcano').anchor.setTo(0.5, 1);
        emitter = game.add.emitter(centerX, 500, 2000);
        emitter.makeParticles(['redBall', 'orBall'], 0, 5000, false, true);
        emitter.maxParticleSpeed.set(400, -400);
        emitter.minParticleSpeed.set(-400, -100);
        emitter.gravity = 300;
        game.time.events.add(2000, function() {
            emitter.start(false, 5000, 20);
            game.time.events.loop(500, function() {
                if(emitter.on) {
                    emitter.on = false;
                } else {
                    emitter.on = true;
                }
            });
        });
    },
    update: function(){}
};