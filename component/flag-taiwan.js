ig.module(
	'game.component.flag-taiwan'
)
.requires(
    'game.component.flag',
)
.defines(function(){

EntityFlagTaiwan = EntityFlag.extend({

    stage: new ig.Image('media/img/flag_taiwan.png'),
    draw: function(x, y)
    {
        this.parent();
        this.stage.draw(x, y);
    }
});
});