ig.module(
	'game.entities.game-scanon'
)
.requires(
    'impact.entity',
    'game.entities.game-ball',
)
.defines(function(){

EntityGameScanon = ig.Entity.extend({
	
	size: {x:0, y:0},
	collides: ig.Entity.COLLIDES.FIXED,
	
	animSheet: new ig.AnimationSheet( 'media/img/ship_1_canon.png', 34, 26),
		
	init: function( x, y, settings ) {
        this.parent( x, y, settings );
        this.addAnim( 'idle', 1, [0] );
        this.addAnim( 'shoottower', 0.1, [0, 1, 2, 3, 4, 5, 4, 3, 2, 1] );
    },
    
    collideWith: function(other, axis){
        if(other instanceof EntityGameBall){
            if(axis === 'y' || axis === 'x'){
                this.kill();
            }
        }
    },

    update: function()
    {
        this.parent();
        var rd = Math.floor((Math.random() * 150) + 1);
        if (rd == 50)
        {
            this.currentAnim = this.anims.shoottower;
            _island = ig.game.getEntitiesByType( EntityGameIsland )[0];
            _isplayer = ig.game.getEntitiesByType( EntityGamePlayer )[0];
            if (_island){
                _island.receiveDamage(10, this);
                var gs = ig.game.getEntitiesByType(EntityGameBg)[0];
                if (gs)
                {
                    gs.updateHp();
                }
            }
            if (_isplayer){
                _isplayer.receiveDamage(10, this);
            }
        }
        if (rd %20 == 0)
        {
            this.currentAnim = this.anims.idle;
        }
    }
});
});