mazo =  function()
{
	this.cartas = new Array();

	this.prepare_cartas = function()// unhardcode here to allow other type of card, pocker, chinchon etc
	{
		var cartas_array = new Array();
		for (var j=1;j<=4;j++)
		{
			for(var i=1;i<=7;i++)
			{
				cartas_array.push([i,j]);
			}

			for(i=10;i<=12;i++)
			{
				cartas_array.push([i,j]);
			}
		}

		this.cartas = cartas_array;
	}

	this.mesclar = function(){this.cartas = this.cartas.shuffle()};
	
}

//how mazo looks in the screen==>

mazo.prototype = new UI_prepared_class();

mazo.prototype.width = 100;
mazo.prototype.height = 100;
mazo.prototype.margin =10;
mazo.prototype.position ="absolute";
mazo.prototype.background_size ="100%";
mazo.prototype.background_repeat ="no-repeat";
mazo.prototype.background_position ="center";
mazo.prototype.background_color = get_random_color();
mazo.prototype.draggable =true;


