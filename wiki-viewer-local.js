/*
acá tiene que ir código para que al clickear la lupa se reemplace por un formulario donde ingresar un texto que va a estar conectado con la api de wikipedia
*/

/*

cuando se cliquee la lupa (y también cuando se presione la tecla enter),
	se debe leer lo que el usuario escribió en la caja de texto (aBuscar)
	agregar eso a un acceso a la api de wikipedia: ".../api.php?action=query&format=json&titles=" + aBuscar
	eso te va a devolver datos en formato json,
	por ejemplo:
	{
		"batchcomplete": "",
		"query": {
			"normalized": ... ,
			"pages": {
				
			}
		}
	}

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

	$.getJSON("wikisearchperro.json", function(data){
		//mostrar los resultados
		console.log(data);
		$('#resultados').html("<p> Resultados obtenidos: " + aBuscar + "</p>");
		$('#resultados').append("<br/>");
		$('#resultados').append("<p>"+ data.query.search[0].title + "</p>");
		$('#resultados').append("<p>"+ data.query.search[0].snippet + "</p>");
		//	$('#resultados').append("<p></p>");
		$('#resultados').css("background-color", "#2E2D88");
		$('#resultados').css("color", "white");
	});
});




