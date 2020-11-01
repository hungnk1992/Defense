ig.module(
	'game.entities.game-ball'
)
.requires(
    'impact.entity',
    'game.entities.game-player',
)
.defines(function(){

EntityGameBall = ig.Entity.extend({
	
	size: {x:25, y:25},
	collides: ig.Entity.COLLIDES.ACTIVE,
	
	animSheet: new ig.AnimationSheet( 'media/img/canon_ball.png', 25, 25 ),
	
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
        this.addAnim( 'idle', 0.1, [0,1,2,3,4,4,4,4,3,2,1] );
    },

    collideWith: function(other, axis){
        if(other instanceof EntityGameEnemy){
            if(axis === 'y' || (axis === 'x')){
                this.removeBallResource ();
            }
        }
    },
    removeBallResource: function ()
    {
        var posb = ig.game.getEntitiesByType( EntityGamePlayer )[0];
        if (posb)
            posb.readyToShoot();
        this.kill();
    },
    update: function()
    {
        this.parent();
        if (this.pos.x > 1024 || this.pos.x < 0 || this.pos.y > 768 || this.pos.y < 0 || !ig.game.getEntitiesByType( EntityGamePlayer )[0])
        {
            this.removeBallResource();
        }
    }
    
});

});