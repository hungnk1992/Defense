ig.module(
	'game.component.flag-hongkong'
)
.requires(
    'game.component.flag',
)
.defines(function(){

EntityFlagHongkong = EntityFlag.extend({

    stage: new ig.Image('media/img/flag_hong_kong.png'),
    draw: function(x, y)
    {
        this.parent();
        this.stage.draw(x, y);
    }
});
});