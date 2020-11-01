ig.module(
	'game.component.flag'
)
.requires(
    'impact.entity',
)
.defines(function(){

EntityFlag = ig.Entity.extend({
	
    size: {x:146, y:100},
    
    // Need implement isSelected to select by mouse
    // isSelected: false,
});

});