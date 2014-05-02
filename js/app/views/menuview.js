// Load view template and initialize a view
define(['text!tpl/vMenu.dust','marionette','dust','dustMarionette'],
	function(vMenu,Marionette,dust,Backbone){

	dust.loadSource(dust.compile(vMenu,'menuTpl'));
	var MenuView = Marionette.ItemView.extend({
		template:'menuTpl'
	});

	return MenuView;

});