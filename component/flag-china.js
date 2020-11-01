ig.module(
	'game.component.flag-china'
)
.requires(
    'game.component.flag',
)
.defines(function(){

EntityFlagChina = EntityFlag.extend({

    stage1: new ig.Image('media/img/flag_china.png'),
    draw: function(x, y)
    {
        this.parent();
        this.stage1.draw(x, y);
    }
});
});