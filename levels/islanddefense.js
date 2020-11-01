ig.module( 'game.levels.islanddefense' )
.requires( 'impact.image','game.entities.game-bg','game.entities.game-island','game.entities.game-player','game.entities.game-enemy','game.entities.game-ball','game.entities.game-scanon' )
.defines(function(){
LevelIslanddefense=/*JSON[*/{
	"entities": [
		{
			"type": "EntityGameBg",
			"x": 0,
			"y": 0
		},
		{
			"type": "EntityGameIsland",
			"x": 10,
			"y": 140
		},
		{
			"type": "EntityGamePlayer",
			"x": 216,
			"y": 332
		},
		{
			"type": "EntityGameEnemy",
			"x": 828,
			"y": 652
		},
		{
			"type": "EntityGameBall",
			"x": 308,
			"y": 360
		},
		{
			"type": "EntityGameScanon",
			"x": 868,
			"y": 668
		}
	],
	"layer": []
}/*]JSON*/;
});