function mapaGoogle() {

  var marcadores = [];
  var localidades = [
    ['<h5>Portonovo</h5> En la explanada del campo de Baltar (Lunes y Jueves)', 42.398968, -8.824580],
    ['<h5>Dena</h5> Plaza de Abastos (Martes)', 42.449228, -8.814859],
    ['<h5>Cambados</h5> Al lado de la plaza de Abastos (Miércoles y Sábado)', 42.513160, -8.816315],
    ['<h5>O Grove</h5> Plaza de Abastos (Viernes)', 42.497416, -8.864399]
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