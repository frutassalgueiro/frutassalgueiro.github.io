function mapaGoogle() {

  var marcadores = [];
  var localidades = [
    ['<h6>Portonovo</h6> <p>En la explanada del campo de Baltar (Lunes y Jueves 8h - 15h)</p>' +
          '<a class="whoto" href="https://goo.gl/maps/RAhjwHUiBe72" target="_blank">Cómo llegar</a>', 42.398968, -8.824580],
    ['<h6>Dena</h6> <p>Plaza de Abastos (Martes 8h - 15h)</p>' +
          '<a class="whoto" href="https://goo.gl/maps/cq7unfNywap" target="_blank">Cómo llegar</a>', 42.449228, -8.814859],
    ['<h6>Cambados</h6> <p>Al lado de la plaza de Abastos (Miércoles y Sábado 8h - 15h)</p>' +
          '<a class="whoto" href="https://goo.gl/maps/adYSvaZ3Bn92" target="_blank">Cómo llegar</a>', 42.513160, -8.816315],
    ['<h6>O Grove</h6> <p>Plaza de Abastos (Viernes 8h - 15h)</p>'+
          '<a class="whoto" href="https://goo.gl/maps/u8hqfqNXiJC2" target="_blank">Cómo llegar</a>', 42.497416, -8.864399],
    ['<h6>Viliquín</h6> <p>Almacén local - (Todos los días por la tarde)</p>'+
          '<a class="whoto" href="https://goo.gl/maps/73BJ2RD2sE82" target="_blank">Cómo llegar</a>', 42.439606, -8.818628]
  ];
  
  var mapa = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  
  var limites = new google.maps.LatLngBounds();
  var infowindow = new google.maps.InfoWindow();
  var marcador, i;

  for (i = 0; i < localidades.length; i++) {
    
    marcador = new google.maps.Marker({
      position: new google.maps.LatLng(localidades[i][1], localidades[i][2]),
      map: mapa
    });
    
    marcadores.push(marcador);
    limites.extend(marcador.position);
    
    google.maps.event.addListener(marcador, 'click', (function(marcador, i) {
      return function() {
        infowindow.setContent(localidades[i][0]);
        infowindow.open(mapa, marcador);
      }
    })(marcador, i));
  }
  mapa.fitBounds(limites);
}

google.maps.event.addDomListener(window, 'load', mapaGoogle);