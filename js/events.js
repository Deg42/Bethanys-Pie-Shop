$(function () {
	$.ajax({
		type: "GET",

		dataType: "json",

		url: "json/events.json",

		success: function (json) {
			for (let i = 0; i < json.eventos.length; i++) {
				let event = json.eventos[i]

				if (event.tipo == "instagram") {
					var bg = "bg-instagram"
					var icon = "bi bi-instagram"
				}

				if (event.tipo == "television") {
					var bg = "bg-lightviolet"
					var icon = "bi bi-tv"
				}

				$("#d" + event.dia).addClass(bg)

				$("#d" + event.dia).append('<a class="btn event' + bg + '" href="javascript:launchModal(' + event.id + ')"><i class="' + icon + '"></i>' + " " + event.nombre + '<a/>')
			};
		}

	});
});

	function launchModal(idEvento) 
	{
		var event = loadData(idEvento);
		$('#modal').modal('show');
	};

	function loadData(idEvent) {
    $.ajax({
      type: "GET",

      dataType: "json",

      url: "json/events.json",

      // Aqui lo correcto, en un entorno real, es enviar como parámetro el código del evento
      // y no tener que tratar todos los eventos, ya que solo nos devolvería el evento seleccionado
      // data: { id: idEvento },

      success: function (json) {
        json.eventos.forEach(function (event) {
          if (event.id == idEvent) {
            // Cargamos los datos en la ventana modal
            $("#tituloEvento").html(event.nombre);
            $("#descripcionEvento").html(event.descripcion);
            $("#imagenEvento").attr("src", event.imagen);
            $("#imagenEvento").attr("alt", event.nombre);
          }
        });
      },
      error: function (xhr, status) {
        console.log("Disculpe, existió un problema");
      },
      complete: function (xhr, status) {
        console.log("Petición realizada");
      },
    });
  }

