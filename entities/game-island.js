ig.module(
	'game.entities.game-island'
)
.requires(
	'impact.entity'
)
.defines(function(){

//Update value to test and play.
var stronghel = 5;

EntityGameIsland = ig.Entity.extend({
	
	size: {x:20, y:20},
	health: 200*stronghel,
	collides: ig.Entity.COLLIDES.FIXED,
	gameover: false,
	animSheet: new ig.AnimationSheet( 'media/img/island.png', 640, 580 ),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		this.addAnim ('idle', 1, [0]);
		this.addAnim ('wond1', 1, [1]);
		this.addAnim ('wond2', 1, [2]);
		this.addAnim ('wond3', 1, [3]);
		this.addAnim ('wond4', 1, [4]);
		
	},
	update: function ()
	{
		if (this.health <= 150*stronghel && this.health > 100*stronghel)
		{
			this.currentAnim = this.anims.wond1;
		}else if (this.health <= 100*stronghel && this.health > 70*stronghel)
		{
			this.currentAnim = this.anims.wond2;
		}else if (this.health < 70 && this.health > 20)
		{
			this.currentAnim = this.anims.wond3;
			this.gameover = true;
		}else if (this.health < 20 && this.health > 10)
		{
			this.currentAnim = this.anims.wond4;
		}
	},
	fgameover: function ()
	{
		return this.gameover;
	},
	iisWond4: function ()
	{
		return isWond4;
	}
});
});