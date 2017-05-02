/*
acá tiene que ir código para que al clickear la lupa se reemplace por un formulario donde ingresar un texto que va a estar conectado con la api de wikipedia
*/
$('#buscadorInput').on('keyup', function buscar(event){
		var aBuscar = $('#buscadorInput').val();
		console.log("Quiere buscar: " + aBuscar);
		$(this).css("background-color", event.which === 13 ? "#2E2D88" : '#fff');
		$(this).css("color", event.which === 13 ? '#fff': "#2E2D88");
		if (event.which === 13){
			console.log("apretó enter");
			$('#resultados').html("<p> Resultados obtenidos: " + aBuscar + "</p>");
			//$('#resultados').css("background-color", "#2E2D88");
			//$('#resultados').css("color", "white");
			//alert("enter");
		} else {
			console.log("no apretó enter");
		}
});
$('#lupa').on('click', function buscar(){
	var aBuscar = $('#buscadorInput').val();
	console.log("Quiere buscar: " + aBuscar);
	var cantidadDeResultados = 10;
	$.getJSON("https://es.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + aBuscar + "&origin=*", function(data){
		//mostrar los resultados
		console.log(data);
		$('#resultados').html("<h2> Resultados obtenidos: </h2>");
		for (var i = 0; i < cantidadDeResultados; i++){
			var titulo = data.query.search[i].title; //tengo que partirlo por los espacios y unir el resultado con _
			$('#resultados').append("<h3><a href='https://es.wikipedia.org/wiki/" + titulo.split(" ").join("_") + "'>" + titulo + "</a></h3>");
			$('#resultados').append("<p class='lead'>"+ data.query.search[i].snippet + " ... </p>");	
		}
		$('#resultados').css("background-color", "#2E2D88");
		$('#resultados').css("color", "white");
	});
});




