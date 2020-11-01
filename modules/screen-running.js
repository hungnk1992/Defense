/**
 * The round manager handles everything related to one round in the game.
 * It keeps track of the score, lines cleared, the current stage, speed
 * of auto-dropping a block, plays sounds, handles controls etc.
 */

ig.module( 
	'game.modules.screen-running'
)
.requires(
    'impact.font',
    'game.entities.game-island',
    'game.levels.islanddefense',
)
.defines(function() {

    ScreenRunning = ig.Class.extend({
        /**
         * Fonts
         */
        font: new ig.Font( 'media/bitdust2_16.font.png' ),
        runstate: null,        

        /**
         * Sounds
         */
        soundForceHit: new ig.Sound( 'media/sounds/force-hit.mp3' ),
        soundSlowHit: new ig.Sound( 'media/sounds/slow-hit.mp3' ),
        soundLineDrop: new ig.Sound( 'media/sounds/slow-hit.mp3' ),
        soundLineRemoval: new ig.Sound( 'media/sounds/line-removal.mp3' ),
        soundLineRemoval4: new ig.Sound( 'media/sounds/line-removal4.mp3' ),
        soundGameOver: new ig.Sound( 'media/sounds/gameover.mp3' ),

        bg: new ig.Image('media/img/game_bg.png'),

        init: function() {
            
        },
        setState: function (receive)    
        {
            this.runstate = receive;
        },
        update: function() {
            // depending on the current state, handle controls differently
            // ScreenRunning.state = {
            //     'INIT': 1,
            //     'GET_READY': 2,
            //     'RUNNING': 4,
            //     'PAUSE': 8,
            //     'GAME_OVER': 16,
            //     'VICTORY': 32,
            //     'ANIM_CLEAN_LINES': 64
            // };
            var island = ig.game.getEntitiesByType(EntityGameIsland)[0];
            if (island && island.fgameover())
            {
                this.runstate = ScreenRunning.state.GAME_OVER;
            }
            
            switch(this.runstate) {
                case ScreenRunning.state.RUNNING:
                    ig.game.gameState = MyGame.state.RUN;
                //     this.handleCleanLines();
                    break;
                case ScreenRunning.state.INIT:
                    ig.game.loadLevel( LevelIslanddefense );
                    this.runstate = ScreenRunning.state.RUNNING;
                    break;
                case ScreenRunning.state.GAME_OVER:
                    ig.game.gameState = MyGame.state.SCREEN_GAMEOVER;
                    break;
            }
        },
          
        draw: function() {        
            // this.bg.draw(0, 0);
            // switch (this.roundState) {
            //     case GAME_OVER:
            //         this.handleGameOver();
            //         break;
            //     case VICTORY:
            //         this.handleVictory();
            //         break;
            //     case RUNNING:
            //         break;
            //     default:
            //         break;
            // }
                
        },
        
        // Need more implementation and optimize
        // handleGameOver: function() {
        //     this.font.draw('GAME OVER', 96, 64, ig.Font.ALIGN.CENTER);
        //    
        // },

        // handleVictory: function() {
        //     this.font.draw('YOU WIN', 96, 64, ig.Font.ALIGN.CENTER);
        //     }

        //     // winning a game is: B mode and 25 lines cleared.
        // },
                
        // /**
        //  * Check if we can remove the lines that were marked for clearing and if
        //  * they blinked enough already.
        //  */
        // handleCleanLines: function() {
        //     }
        // },
                
        // handleGameOverControls: function() {
        //     }
        // },
                
        // /**
        //  * This is probably the most important and crucial part of the game.
        //  * The input controls of Tetris. Please refer to the tutorial for more
        //  * information.
        //  */
        // handleControls: function() {
        //     ig.show('forceButtonDownRelease', this.forceButtonDownRelease);
        //     if (this.activeBlock === null || this.activeBlock.isInitialized() === false) {
        //         return;
        //     }
        //     if (this.roundState !== RoundManager.state.RUNNING) {
        //         return;
        //     }
            
        //     if (ig.input.pressed('toggleMusic')) {
        //         if (this.playBgMusic) {
        //             this.playBgMusic = false;
        //             //ig.music.fadeOut(0.5);
        //         } else {
        //             this.playBgMusic = true;
        //             //ig.music.play();
        //         }
        //     }
            
        //     // lock a piece if the lock-in-timer runs out
        //     if (this.lockTimerRunning && this.timerLock.delta() >= ig.global.LOCKIN_DELAY) {
        //         // last check: we would lock now, but don't do it, if for some reason the piece can still move
        //         // (happens if it was rotated or moved horizontally after lockin-sequence started
        //     }
        // },
        
        

        // checkAdvanceStageCondition: function() {
        //     var tmp = (this.lineCount + (this.startStage - 1) * 10) - this.stage * 10;
        //     if (tmp >= 0 && tmp < 10) {
        //         this.advanceStage();
        //     }
        // },

        // /**
        //  * Randomly generate a new block and place it in the preview window.
        //  * Note that different shapes require different offsets
        //  */

        // /**
        //  * Pass control to the block in the preview window and teleport that
        //  * block into the main game area.
        //  */
                
        // /**
        //  * If the active block is moved to the game area and overlaps
        //  * immediately without movement, end the game.
        //  */
        // handleSpawnEndGameCondition: function() {
        //  
        //     }
        // },
                
        // /**
        //  * Once all lines of mode B are cleared, end the game
        //  */
        // handleModeBLineEndGameCondition: function() {
        //     
        //     ig.log("YOU WIN");
        //     ig.game.gameOver( this.score, this.level );
        // },

        // /**
        //  * Generates the first block, sets it active and then generates another block
        //  * as "preview". Sets round state to RUNNING
        //  */

        // startRound: function( mode, startStage, startLevel ) {
        // 
        //     if (this.playBgMusic) {
        //         //ig.music.volume = 0.25;
        //         //ig.music.play();
        //     }
        // },
                
        // /**
        //  * Enter next stage, increase the speed.
        //  */
        // advanceStage: function( amountOfStages ) {
        // }
    });
    
    ScreenRunning.state = {
        'INIT': 1,
        'GET_READY': 2,
        'RUNNING': 4,
        'PAUSE': 8,
        'GAME_OVER': 16,
        'VICTORY': 32,
        'ANIM_CLEAN_LINES': 64
    };
});