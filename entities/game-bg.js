ig.module(
	'game.entities.game-bg'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityGameBg = ig.Entity.extend({
	
	size: {x:0, y:0},
	collides: ig.Entity.COLLIDES.FIXED,
	gamescore: 0,
	hp: 2000,
	animSheet: new ig.AnimationSheet( 'media/img/game_bg.png', 1024, 768 ),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		 this.addAnim( 'idle', 0.1, [0] );
	},
	draw: function()
	{
		this.parent();
		var ctx = document.getElementById('canvas').getContext('2d');
        ctx.font = '30px serif';
        ctx.fillStyle = 'black';
		ctx.fillText('Your score: ' + this.gamescore, 840, 45); 
		ctx.fillText('Your hp: ' + this.hp, 840, 85);
	},
	updateScore: function ()
	{
		this.gamescore += 1;
	},
	updateHp: function ()
	{
		this.hp -= 10;
	}
});

});