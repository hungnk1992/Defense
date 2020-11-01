/**
 * The round manager handles everything related to one round in the game.
 * It keeps track of the score, lines cleared, the current stage, speed
 * of auto-dropping a block, plays sounds, handles controls etc.
 */

ig.module( 
	'game.modules.screen-gameover'
)
.requires(
    'impact.font',
)
.defines(function() {

    ScreenGameover = ig.Class.extend({
        /**
         * Fonts
         */
        font: new ig.Font( 'media/bitdust2_16.font.png' ),
        runstate: null,        
        gametitle: new ig.Image('media/img/title.png'),
        gameover: new ig.Image('media/img/gameover.png'),

        bg: new ig.Image('media/img/game_bg.png'),

        init: function() {
            
        },
        setState: function (receive)    
        {
            this.runstate = receive;
        },
        update: function() {
            switch(this.runstate) {
            }
        },

        draw: function() {
            this.gametitle.draw(250, 150);
            this.gameover.draw(350, 370);
        }
        
    });
    
    // ScreenGameover.state = {
    //     'INIT': 1,
    //     'GET_READY': 2,
    //     'RUNNING': 4,
    //     'PAUSE': 8,
    //     'GAME_OVER': 16,
    //     'VICTORY': 32,
    //     'ANIM_CLEAN_LINES': 64
    // };
});