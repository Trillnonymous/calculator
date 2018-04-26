(function(window, $){
	var Calculator = {
		version: '0.0.1',
		value: '',
		loaded: false,
		operators: [],
		fns: {}
	};
	
	Calculator.load = function(callback){
		this.loaded = true;
		if (callback !== undefined && typeof callback == 'function')
			callback.apply(this, []);
	};
	
	window.Calculator = Calculator;
}(this === window ? this : window, jQuery));
