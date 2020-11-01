ig.module(
	'game.component.soundmgr'
)
.requires(
    'impact.entity',
)
.defines(function(){

EntitySoundmgr = ig.Entity.extend({
	
    isEnableSound: false,
    
    sound: new ig.Sound( 'media/sounds/MaximeAbbey.ogg' ),

    size: {x:92, y:86},
    animSheet: new ig.AnimationSheet( 'media/img/music_btn.png', 64, 58 ),
    init: function() 
    {
        this.addAnim('play', 1, [0] );
        this.addAnim('stop', 1, [1]);
        this.sound.play();
        this.isEnableSound = true;
        this.sound.loop = true;
    },
    update: function ()
    {
        //console.debug("sound upd");
        if (ig.input.state("startsound"))
        {
            if (!this.isEnableSound)
            {
                this.sound.play();
                this.currentAnim = this.anims.play;
                this.isEnableSound = true;
            }
        }
        if (ig.input.state("stopsound"))
        {
            if (this.isEnableSound)
            {
                this.sound.stop();
                this.currentAnim = this.anims.stop;
                this.isEnableSound = false;
            }
        }
    }
});
});