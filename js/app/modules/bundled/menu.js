define(['marionette.main'],function(){

	return function(App){
		/* Module definition code starts here */
		App.module("menu", function(MenuModule, App, Backbone, Marionette, $, _){

			// Based upon Brian Mann's video https://www.youtube.com/watch?v=qWr7x9wk6_c#t=1302 ,
			// an application module should contain Routers, Controllers and any
			// Specialized views that only belong to this app module.
		  console.log('App Module: menu!');

		  var MenuModuleController = Marionette.Controller.extend({

			  initialize: function(options){

			  	this.region = options.region;
			  	this.menuTemplate = options.menuTemplate;

			    this.menuData = {
				  	menuItems : [
					    { url: "http://www.ryansukale.com", title: "Ryan Sukale", isActive:true },
					    { url: "http://www.quodocs.com", title: "QuoDocs" }
				  ]};

			  },
			  show: function(){
			    // get the layout and show it
			    var menu = this._getMenu();
			    this.region.show(menu);
			  },
			  _getMenu: function(){

			  	// Temporarily defining views over here
		  		var menu = new Marionette.ItemView({
		  			template:this.menuTemplate
		  		});

		  		var MenuView = Marionette.ItemView.extend({
		  			template:this.menuTemplate
		  		});

		  		var menu = new MenuView({model:new Backbone.Model(this.menuData)});

			    return menu;
			  }

			});

		  // If you require any module specific dependencies during code execution
		  // such as loading any plugins and templates you can execute them inside a require block as follows
		  var dependencies = ['handlebars','text!tpl/vMenu.tpl'];

		  require(dependencies,function(Handlebars,menuTpl){
		  	
			  var controller = new MenuModuleController({
			  	region:App.mainMenuRegion,
			  	menuTemplate:Handlebars.compile(menuTpl)
			 	});
				controller.show();

		  });

		});
	}

});