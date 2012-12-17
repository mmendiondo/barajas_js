game_instance =  function()
{
	this.set_players = function()
	{
		var _players = new Array();

		for(var j=0;j<this.nbr_of_participants;j++)
		{
			_players.push(new player());
		}

		this.players =_players;
	}
	
	this.players =null;	
}

game_instance.prototype = new UI_prepared_class();

//unharcode		
game_instance.prototype.nbr_of_participants = 2;
//unharcode

