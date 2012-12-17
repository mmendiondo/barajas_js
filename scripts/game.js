_mazo = new mazo();

$(document).ready(function(){
	var _mazo_element = _mazo.element("mazo", _mazo);
	$("body").prepend($(_mazo_element));

	new_game();	
});

_game_instance = null;

function new_game()
{	
	_game_instance = new game_instance();
	_game_instance.set_players();

	_mazo.prepare_cartas();
	_mazo.mesclar();
	distribute(_mazo.cartas);
}

function distribute(cartas)
{
	//unhardcode... set player number cards in the game_instace.type_of_game
	//i =  player number cards
	for(var i=0;i<3;i++)
	{
		for(var j=0;j<_game_instance.nbr_of_participants;j++)
		{
			_game_instance.players[j].cartas.push(cartas.pop());
		}
	}
}