carta =  function()
{
	/*this.element = function(elementProps){
		return create_le_me("carta", elementProps);
	};*/

}

//how carta should look in the screen==>

carta.prototype = new UI_prepared_class();

carta.prototype.width = 100;
carta.prototype.height = 100;
carta.prototype.margin =10;
carta.prototype.position ="absolute";
carta.prototype.left = 200;
carta.prototype.background_size ="100%";
carta.prototype.background_repeat ="no-repeat";
carta.prototype.background_position ="center";
carta.prototype.background_color = get_random_color();
carta.prototype.palo = 0;
carta.prototype.number = 0;

