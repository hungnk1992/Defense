ig.module(
	'game.entities.game-enemy',
)
.requires(
    'impact.entity',
    'game.entities.game-ball',
    'game.entities.game-scanon',
    'game.entities.game-bg',
)
.defines(function(){

EntityGameEnemy = ig.Entity.extend({
	
	size: {x:38, y:74},
	collides: ig.Entity.COLLIDES.FIXED,
	animSheet: new ig.AnimationSheet( 'media/img/ship_1.png', 128, 74 ),
		
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
        this.addAnim( 'idle', 1, [0] );
        ig.game.spawnEntity(EntityGameScanon, this.pos.x+40, this.pos.y+16, 0);
    },

    // Remove resource relate to dead enemy.
    removeEnemyResource: function ()
    {
        var canon = ig.game.getEntitiesByType( EntityGameScanon );
        for (var i = 0; i < canon.length; i ++)
        {
            if (canon[i].pos.x === this.pos.x+40)
            {
                ig.game.removeEntity(canon[i]);
            }
        }
        this.kill();
    },
    collideWith: function(other, axis){
        if(other instanceof EntityGameBall){
            if(axis === 'y' || axis === 'x'){
                var gs = ig.game.getEntitiesByType(EntityGameBg)[0];
                if(gs)
                {
                    gs.updateScore();
                }
                this.removeEnemyResource();
            }
        }
    },
});

});