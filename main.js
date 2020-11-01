ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	
	// 'game.entities.puck',
	// 'game.entities.paddle-cpu',
	// 'game.entities.paddle-player',
	
	// 'game.levels.islanddefense',

	'game.modules.screen-running',
	'game.modules.screen-mode',
	'game.modules.screen-gameover',

	'game.component.soundmgr',
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	gameState: null,
	screenmode: null,
	screenrunning: null,
	soundmgr: null,
	screengameover:null,

	init: function() {
		this.gameState = MyGame.state.INIT;

		ig.input.bind( ig.KEY._1, 'key1' );
		ig.input.bind( ig.KEY._2, 'key2' );
		ig.input.bind( ig.KEY._3, 'key3' );
		
		ig.input.bind( ig.KEY.Q, 'startsound' );
		ig.input.bind( ig.KEY.W, 'stopsound' );

		ig.input.bind( ig.KEY.UP_RIGHT, 'right' );
		ig.input.bind( ig.KEY.DOWN_LEFT, 'left' );
		ig.input.bind( ig.KEY.SPACE, 'shoot' );

		//ig.input.isUsingMouse = true;
		ig.input.bind( ig.KEY.MOUSE1, 'mouseclick' );

		this.screenmode = new ScreenMode ();
		this.screenrunning = new ScreenRunning ();
		this.screengameover = new ScreenGameover ();
		//this.soundmgr =  //new EntitySoundmgr ();

		this.gameState = MyGame.state.SCREEN_MODE;
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		// Add your own, additional update code here
		switch( this.gameState ) {
            case MyGame.state.INIT:
                break;
            case MyGame.state.SCREEN_MODE:
                this.screenmode.update();
                break;
			case MyGame.state.SCREEN_RUNNING:
				this.screenrunning.setState (ScreenRunning.state.INIT);
				this.gameState = MyGame.state.RUN;
				break;
			case MyGame.state.RUN:
				this.screenrunning.update();
			case MyGame.state.SCREEN_GAMEOVER:
				// console.debug ("this is game over");
				// ig.input.isUsingMouse = false;
                this.screengameover.draw();
				break;
                 break;
            default:
                break;
        }
	},

	setState: function (receivestage)
	{
		this.gameState = receivestage;
	},

	draw: function() {
		this.parent();

		switch( this.gameState ) {
            case MyGame.state.INIT:
                break;
            case MyGame.state.SCREEN_MODE:
                this.screenmode.draw();
                break;
            case MyGame.state.SCREEN_RUNNING:
                this.screenrunning.draw();
				break;
			case MyGame.state.SCREEN_GAMEOVER:
                this.screengameover.draw();
				break;
            default:
                break;
        }
	},
});

MyGame.state = {
    'INIT': 1,
    'SCREEN_MODE': 2,
    'STAGE_SELECT': 4,
	'SCREEN_RUNNING': 16,
	'RUN': 32,
	'SCREEN_GAMEOVER': 96,
};

ig.main( '#canvas', MyGame, 60, 1024, 768, 1 );

});
