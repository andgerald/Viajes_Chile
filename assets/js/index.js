//nos permite la utilizacion de los tooltip (bootstrap)
var tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
var tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

//
$(document).ready(function () {
  //utilizacion de smooth scroll
  $("a").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000
      );
    }
  });
  //muestra alert al comento de presionar boton enviar
  $("#sendInfo").click(function (e) {
    e.preventDefault();
    alert("Información enviada correctamente");
  });
});
