jQuery.extend({
    Controller: function(model, view){
	/**
	 * Escucha a la vista
	 */
	var vlistener = $.ViewListener({
	    viewLoadData : function(){
		var all = model.getAll();		
	    }
	});
	view.addListener(vlistener);

	/**
	 * listen to the model
	 */
	var mlist = $.ModelListener({
	    onLoadBegin : function(){
		view.show("Cargar datos del modelo...");
	    },
	    onLoadEnd : function(data){
		//Aca el coigo que extraiga los datos
		result = "";
		for(day in data){
		    result += data[day] + "<br/>";
		}
		view.show(result);
	    }
	});
	model.addListener(mlist);
    }    
});