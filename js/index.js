jQuery(document).ready(function($) {
	$(document).ready(function(){
		
		StstusBar();
		
		
		
		$.getJSON( "/settings.network.json", function(data){
			var i = data["apIP"]
			$('#wifi').text( i[0] + "." + i[1] + "." + i[2] + "." + i[3] );
		});
		
		$.getJSON( "/settings.mqtt.json", function(data){
			$('#mqtt').text(data["mqttServer"]);
		});
		
		$('#home').text("0.0.0.0");
		
		$.getJSON( "/info.weather.json", function(data){
			$('#temperature').text(data["Temperature"]);
			$('#pressure').text(data["Pressure"]);
			$('#humidity').text(data["Humidity"]);
			$('#altitude').text(data["Altitude"]);
		});
		
	});
});

function StstusBar(){
	$.getJSON( "/info.status.json", function(data){
		console.log(data);
		
		if(data["home"] == "on") {
			$("#homeoff").hide();
			$("#homeconnection").hide();
			$("#homeon").show();
		} else if(data["home"] == "search"){
			$("#homeoff").hide();
			$("#homeconnection").show();
			$("#homeon").hide();
		} else if(data["home"] == "off"){
			$("#homeoff").show();
			$("#homeconnection").hide();
			$("#homeon").hide();
		}
		
		
		if(data["wifi"] == "on") {
			$("#wifioff").hide();
			$("#wificonnection").hide();
			$("#wifion").show();
		} else if(data["wifi"] == "search"){
			$("#wifioff").hide();
			$("#wificonnection").show();
			$("#wifion").hide();
		} else if(data["wifi"] == "off"){
			$("#wifioff").show();
			$("#wificonnection").hide();
			$("#wifion").hide();
		}
		
		
		if(data["mqtt"] == "on") {
			$("#mqttoff").hide();
			$("#mqttconnection").hide();
			$("#mqtton").show();
		} else if(data["mqtt"] == "search"){
			$("#mqttoff").hide();
			$("#mqttconnection").show();
			$("#mqtton").hide();
		} else if(data["mqtt"] == "off"){
			$("#mqttoff").show();
			$("#mqttconnection").hide();
			$("#mqtton").hide();
		}
			
	});
}


window.setInterval(function(){
	$.getJSON( "/info.weather.json", function(data){
			$('#temperature').text(data["Temperature"]);
			$('#pressure').text(data["Pressure"]);
			$('#humidity').text(data["Humidity"]);
			$('#altitude').text(data["Altitude"]);
	});
	
	StstusBar();
}, 15000);