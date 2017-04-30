/*
acá tiene que ir código para que al clickear la lupa se reemplace por un formulario donde ingresar un texto que va a estar conectado con la api de wikipedia
*/

/*

cuando se cliquee la lupa,
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



$('#lupa').on('click', function buscar(){
	var aBuscar = $('#buscadorInput').val();
	console.log("Quiere buscar: " + aBuscar);
//	$.getJSON("//es.wikipedia.org/w/api.php?action=query&format=json&titles=" + aBuscar, function(data){
		//mostrar los resultados
		//$('#resultados').html("Resultados obtenidos ...");
//		console.log(data);
//	});

	$('#resultados').append("<p>Resultados obtenidos: " + aBuscar + "</p>");
	$('#resultados').css("background-color", "#2E2D88");
	$('#resultados').css("color", "white");
});