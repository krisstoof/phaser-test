demo.state1 = function(){};

var cursors, vel = 500, rocks, grass;

demo.state1.prototype = {
    preload: function(){
        game.load.tilemap('field', 'assets/tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('grassTiles', 'assets/tilemaps/grassTiles.png');
        game.load.image('rockTiles', 'assets/tilemaps/rockTiles.png');
        game.load.spritesheet('adam', 'assets/spritesheets/adamSheet.png', 240, 370);
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#c4ff4d';
        addChangeStateEventListeners();
        
        var map = game.add.tilemap('field');
        map.addTilesetImage('grassTiles');
        map.addTilesetImage('rockTiles');
        
        grass = map.createLayer('grass');
        rocks = map.createLayer('rocks');
        
        map.setCollisionBetween(1, 9, true, 'rocks');
        map.setCollision(11, true, 'grass');
        
        adam = game.add.sprite(200, 200, 'adam');
        adam.scale.setTo(0.2, 0.2);
        game.physics.enable(adam);
        
        cursors = game.input.keyboard.createCursorKeys();
    },
    update: function(){
        game.physics.arcade.collide(adam, rocks, function() { console.log('you hit a rocks');});
        game.physics.arcade.collide(adam, grass, function() { console.log('you hit a grass');});
        if(cursors.up.isDown) {
            adam.body.velocity.y = -vel;
        } else if (cursors.down.isDown) {
            adam.body.velocity.y = vel;
        } else if (cursors.right.isDown) {
            adam.body.velocity.x = vel;
        } else if (cursors.left.isDown) {
            adam.body.velocity.x = -vel;
        } else {
            adam.body.velocity.x = 0;
            adam.body.velocity.y = 0;
        }
    }
};