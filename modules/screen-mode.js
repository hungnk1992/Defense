/**
 * The ModeSelector is the screen where a player selects the mode.
 * It has its own controls, screen etc. and thus it makes sense to have
 * this in its own module.
 */
ig.module( 
	'game.modules.screen-mode'
)
.requires(
    'impact.font',
    'game.component.flag-china',
    'game.component.flag-taiwan',
    'game.component.flag-hongkong'
)
.defines(function() {

    ScreenMode = ig.Class.extend({
        
        font: new ig.Font( 'media/bitdust2_16.font.png' ),
        bg: new ig.Image('media/img/title_screen_bg.png'),
        gametitle: new ig.Image('media/img/title.png'),

        stagechina: new EntityFlagChina (),//ig.Image('media/img/flag_china.png'),
        stagehongkong: new EntityFlagHongkong(), // ig.Image('media/img/flag_hong_kong.png'),
        stagetaiwan: new EntityFlagTaiwan(),// ig.Image('media/img/flag_taiwan.png'),
      
        /**
         * Handle controls.
         */
        update: function() {
            if (ig.input.state("key1") || ig.input.state("key2") || ig.input.state("key3"))
            {
                this.stagechina.isSelected = true;
            }
            if (this.stagechina.isSelected)
            {
                ig.game.gameState = MyGame.state.SCREEN_RUNNING
                this.stagechina.isSelected = false;
            }
        },
                
        draw: function() {
            this.bg.draw(0, 0);
            this.gametitle.draw(250, 550);

            this.stagechina.draw(30, 30);
            this.stagehongkong.draw(30, 140);
            this.stagetaiwan.draw(30, 250);
        },      
    });
});
