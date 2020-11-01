ig.module(
	'game.entities.game-player'
)
.requires(
    'impact.entity',
    'game.component.soundmgr',
)
.defines(function(){
var isShooting = false;
var stronghel = 5;
EntityGamePlayer = ig.Entity.extend({	
    size: {x:25, y:25},
    health: 200*stronghel-10,
	collides: ig.Entity.COLLIDES.FIXED,
	
	animSheet: new ig.AnimationSheet( 'media/img/island_canon.png', 140, 100 ),
	
	bounciness: 1,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
        this.addAnim( 'idle', 0.1, [0] );
        this.addAnim( 'shoott', 0.1, [0,1,2,3,4,3,2,1]);
        ig.game.spawnEntity(EntitySoundmgr, 0, 0, 0);
    },
    
    readyToShoot: function ()
    {
        isShooting = false;
    },

    update: function() {
        
        if (ig.game.getEntitiesByType( EntityGameEnemy ) && ig.game.getEntitiesByType( EntityGameEnemy ).length < 3)
        {
            var enemyposx = Math.floor((Math.random() * 850) + 1);
            var enemyposy = 592;
            if (enemyposx < 400)
            {
                enemyposx = 600;
            }
            ig.game.spawnEntity(EntityGameEnemy, enemyposx, 592, 0);
        }

        if (!ig.game.getEntitiesByType( EntityGameBall )[0])
        {
            ig.game.spawnEntity(EntityGameBall, 308, 360, 0);
        }
        
        if( !isShooting && ig.input.state('mouseclick')) 
        {
            isShooting = true;
            this.currentAnim = this.anims.shoott;
            var pose = ig.input.mouse; 
            var posb = ig.game.getEntitiesByType( EntityGameBall )[0];

            // Caculate delta bettwen 2 point.
            var delx = pose.x - posb.pos.x;
            var dely = pose.y - posb.pos.x;

            // Caculate angle
            var angle = Math.atan2(dely, delx);
            
            //var angle = posb.angleTo (pose);
            posb.vel.x = Math.cos(angle)*100.0;
            posb.vel.y = Math.sin(angle)*100.0;
            
        }
        else if (ig.input.state('left'))
        {
            console.debug ("left");
            this.vel.x += 200;
        }
        else if (ig.input.state('right'))
        {
            console.debug ("right");
            this.vel.x += 200;
        }
        else
        {
            if (Math.floor((Math.random() * 20) + 1) === 20)
            {
                this.currentAnim = this.anims.shoott.rewind();
                this.currentAnim = this.anims.idle;
            }
            var posb = ig.game.getEntitiesByType( EntityGameBall )[0];
        }
		this.parent();
	}

});

});