$(function () {


	$.ajax({
		type: "GET",

		dataType: "json",

		url: "../events.json",

		success: function (json) {
			for (let i = 0; i < json.eventos.length; i++) {
				let event = json.eventos[i]
				console.log(event.dia)

				if (event.tipo == "instagram") {
					var bg = "bg-instagram"
					var icon = "bi bi-instagram"
				}

				if (event.tipo == "television") {
					var bg = "bg-lightviolet"
					var icon = "bi bi-tv"
				}

				$("#d" + event.dia).addClass(bg)

				$("#d" + event.dia).append('<a class="btn event' + bg + '" href="javascript:loadData(' + event.id + ')" data-bs-toggle="modal" data-bs-target="#modal""><i class="' + icon + '"></i>' + " " + event.nombre + '<a/>')
			};
		}

	});

	function loadData(pId) {

		// jeje
	}

});
