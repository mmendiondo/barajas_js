player =  function()
{
	/*this.element = function(elementProps){
		return create_le_me("player", elementProps);
	};*/

	this.cartas = new Array();
}

//how player looks in the screen==>

/*mazo.prototype.width = 0;
mazo.prototype.height = 0;
mazo.prototype.margin =10;
mazo.prototype.position ="absolute";
mazo.prototype.background_size ="100%";
mazo.prototype.background_repeat ="no-repeat";
mazo.prototype.background_position ="center";*/

//asign player number to each payer
player.prototype = new UI_prepared_class();
player.prototype.player_number = 0;