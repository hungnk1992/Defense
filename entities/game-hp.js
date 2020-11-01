ig.module(
	'game.entities.game-hp'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityGameHp = ig.Entity.extend({
	
	size: {x:20, y:20},
	collides: ig.Entity.COLLIDES.FIXED,
	gamescore: 0,
	animSheet: new ig.AnimationSheet( 'media/img/heal.png', 86, 69 ),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
        this.addAnim( 'heal1', 1, [0] );
        this.addAnim( 'heal2', 1, [0] );
        this.addAnim( 'heal3', 1, [0] );
        this.addAnim( 'heal4', 1, [0] ); 
    },
    forceupdate: function(condition)
    {
        if (condition == 1)
        {
            this.currentAnim = this.anims.heal1;
        }else if (condition == 2)
        {
            this.currentAnim = this.anims.heal2;
        }else if (condition == 2)
        {
            this.currentAnim = this.anims.heal3;
        }else if (condition == 4)
        {
            this.currentAnim = this.anims.heal4;
        }
    },
});
});