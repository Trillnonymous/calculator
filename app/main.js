(function(window, $){
	var Calculator = {
		version: '0.0.1',
		value: '',
		loaded: false,
		fns: {}
	};
		
	Calculator.operators = {
		'+': function(a, b){
			return a + b;
		},
		'-': function(a, b){ 
			return a - b; 
		},
		'*': function(a, b){
			return a * b;
		},
		'/': function(a, b){
			return a / b;
		},
		'^': function(a, b){
			return Math.pow(a, b);
		},
		'%': function(a){
			return a / 100;
		},
		'!': function(a){
			return Calculator.factorial(a);
		},
		'√': function(a){
			return Math.sqrt(a);
		}
	};
	
	Calculator.fns = {
		// Trigonometric functions
		cos: function(n){
			return Math.cos(n);
		},
		sin: function(n){
			return Math.sin(n);
		},
		tan: function(n){
			return Math.tan(n);
		},
		csc: function(n){
			return 1 / Math.sin(n);
		},
		sec: function(n){
			return 1 / Math.cos(n);
		},
		cot: function(n){
			return 1 / Math.tan(n);
		},
		// Logarithmic functions
		log: function(n){
			return Math.log(n) / Math.log(10);
		},
		ln: function(n){
			return Math.log(n);
		},
		log_: function(base, n){
			return Math.log(n) / Math.log(base);
		}
	};
	
	Calculator.constants = {
		'π': Math.PI,
		'e': Math.E,
		'φ': (1 + Math.sqrt(5))/ 2,
		'γ': 0.57721
	};
	
	Calculator.parse = function(string){
		var calc = 
	};
	
	Calculator.load = function(callback){
		this.loaded = true;
		if (callback !== undefined && typeof callback == 'function')
			callback.apply(this, []);
	};
	
	window.Calculator = Calculator;
}(this === window ? this : window, jQuery));
