_mazo = new mazo();

$(document).ready(function(){

	//testing classes to be shown in the screen
		var _mazo_element = _mazo.element("mazo", _mazo); //delete
		_mazo_element.html("este va a ser el mazo por ejemplo"); //delete
		$("body").prepend($(_mazo_element)); //delete

		var _carta = new carta();
		var _carta_element = _carta.element("carta", _carta); //delete
		_carta_element.html("este va a ser una carta por ejemplo"); //delete
		$("body").prepend($(_carta_element).clone()); //delete
		$("body").prepend($(_carta_element).clone().css("left", 400)); //delete
		$("body").prepend($(_carta_element).clone().css("left", 600)); //delete
	//testing classes to be shown in the screen

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