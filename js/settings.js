$(document).ready(function(){
    $.validate();
	
	// Add validator
    $.formUtils.addValidator({
	name:"server",
	validatorFunction:function(a){
		return a.length>0&&a.length<=253&&!/[^a-zA-Z0-9]/.test(a.slice(-2))&&!/[^a-zA-Z0-9]/.test(a.substr(0,1))&&!/[^a-zA-Z0-9\.\-]/.test(a)&&1===a.split("..").length&&a.split(".").length>1},
		errorMessage:"Некорректный сервер",
		errorMessageKey:"Некорректный сервер"
	}),
	
	$.formUtils.addValidator({
        name : 'port',
        validatorFunction : function(value, $el, config, language, $form) {
            return $.isNumeric(value);
        },
        errorMessage : 'Вводите правильный порт',
        errorMessageKey: 'Вводите правильный порт'
    });
	
	$.formUtils.addValidator({
		name:"strENnull",
		validatorFunction:function(b,c,d,e){
			if (b != "") {
				var f = "^([a-zA-Z0-9]+)$";
				
				this.errorMessage="Некорректный ввод";
				return new RegExp(f).test(b)
			} else {
				return true;
			}
		},
		errorMessage:"",
		errorMessageKey:""
	}),
	
	$.formUtils.addValidator({
		name:"strEN",
		validatorFunction:function(b,c,d,e){
			var f = "^([a-zA-Z0-9]+)$";
			
			this.errorMessage="Некорректный ввод";
			return new RegExp(f).test(b)
		},
		errorMessage:"",
		errorMessageKey:""
	}),
	
	$.formUtils.addValidator({
		name:"strRU",
		validatorFunction:function(b,c,d,e){
			var f = "^([А-Яа-яa-zA-Z0-9]+)$";
			
			this.errorMessage="Некорректный ввод";
			return new RegExp(f).test(b)
		},
		errorMessage:"",
		errorMessageKey:""
	}),
	
	$.formUtils.addValidator({
		name:"strRUnull",
		validatorFunction:function(b,c,d,e){
			if (b != "") {
				var f = "^([А-Яа-яa-zA-Z0-9]+)$";
				
				this.errorMessage="Некорректный ввод";
				return new RegExp(f).test(b)
			} else {
				return true;
			}
		},
		errorMessage:"",
		errorMessageKey:""
	}),
	 
	 
	 
	// Отправить форму MQTT
	$( "#formMqtt" ).submit(function( event ) {
		//alert( "Handler for .submit() called." );
		console.log("asdasdasdas")
		event.preventDefault();
	});
	
	// Отправить форму Конфигураций
	$( "#formConf" ).submit(function( event ) {
		//alert( "Handler for .submit() called." );
		console.log("asdasdasdas")
		event.preventDefault();
	});
	
	
    //Кнопка настройки MQTT
	$('body').on('click', '#setMqtt', function(){
		$.getJSON( "/settings.mqtt.json", function(data){
			$('#mqttIP').text(data["mqttServer"]);
			$('#mqttPort').text(data["mqttPort"]);
			$('#mqttUser').text(data["mqttUser"]);
			$('#mqttPas').text(data["mqttPassword"]);
		});
	});
	
	//Кнопка настройки Сети
	$('body').on('click', '#setLan', function(){
		$.getJSON( "/settings.wifi.json", function(data){
			
		});
		$.getJSON( "/settings.network.json", function(data){
			
		});
		$.getJSON( "/settings.ap.json", function(data){
			
		});
	});
	
	//Кнопка Обновлений
	$('body').on('click', '#setUpgrade', function(){
		$.getJSON( "", function(data){
			
		});
	});
	
	//Кнопка настройки Конфигураций
	$('body').on('click', '#setConf', function(){
		$.getJSON( "", function(data){
			
		});
	});
	
	
	var ipInput = $('#ipStatic').ipInput();
	var ipInput2 = $('#ipRouter').ipInput();
	var ipInput = $('#ipMask').ipInput();
	var ipInput2 = $('#ipDns1').ipInput();
	var ipInput = $('#ipDns2').ipInput();
	
	

	
});

	


window.setInterval(function(){
	
	
}, 15000);