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

			  	// Save the initialization options
			  	this.options = options;

			    this.menuData = {
				  	menuItems : [
					    { url: "http://www.ryansukale.com", title: "Ryan Sukale", isActive:true },
					    { url: "http://www.google.com", title: "Google" },
					    { url: "#about", title: "About" }
				  ]};

			  },
			  show: function(){
			    // get the layout and show it
			    var menu = this._getMenu();
			    this.options.region.show(menu);
			  },
			  _getMenu: function(){

		  		var menu = new this.options.MenuView({model:new Backbone.Model(this.menuData)});

			    return menu;
			  },
			  showAbout:function () {
			  	console.log('showing about');
			  }

			});

		  /* 	
		  		Load module specific dependencies such as models & view definitions
		   		before initializing the router and controller
		  */
		  var dependencies = ['app/views/menuview'];

		  require(dependencies,function(menuview){
		  	
			  var controller = new MenuModuleController({
			  	region:App.mainMenuRegion, /* The region that this module controls */
			  	MenuView:menuview
			 	});
				controller.show();

				var Router = new Marionette.AppRouter({
				  controller: controller,
				  appRoutes: {
				    "about": "showAbout"  /* These functions are defined on the controller */
				  }
				});

		  });

		});
	}

});