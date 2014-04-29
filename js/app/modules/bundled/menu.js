define(['marionette.main'],function(){

	return function(App){
		/* Module definition code starts here */
		App.module("menu", function(MyModule, App, Backbone, Marionette, $, _){

		  console.log('Inside menu!');
		  
		  var tpl = {},
		  menuData = {
		  	menuItems : [
			    { url: "http://www.ryansukale.com", title: "Ryan Sukale", isActive:true },
			    { url: "http://www.quodocs.com/block", title: "QuoDocs" }
		  ]};

		  // If you require any module specific dependencies during code execution
		  // such as loading any plugins and templates you can execute them inside a require block as follows
		  var dependencies = ['handlebars','text!tpl/vMenu.tpl'];

		  require(dependencies,function(Handlebars,menuTpl){
		  	
		  	if(!tpl.menu){
		  		tpl.menu = Handlebars.compile(menuTpl);
		  	}

			  console.log(tpl.menu(menuData));

		  });

		});
	}

});