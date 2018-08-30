  /*
// 'bottom', 'left', 'top', 'right'
origin: 'bottom',

// Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
distance: '20px',

// Time in milliseconds.
duration: 500,
delay: 0,

// Starting angles in degrees, will transition from these values to 0 in all axes.
rotate: { x: 0, y: 0, z: 0 },

// Starting opacity value, before transitioning to the computed opacity.
opacity: 0,

// Starting scale value, will transition from this value to 1
scale: 0.9,

// Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  */

// Changing the defaults
window.sr = ScrollReveal({ reset: false });

// Customizing a reveal set
sr.reveal('.flipInX', { 
				origin: 'top',
                    opacity: 0,
                    rotate: { x: 360, y: 0, z: 0 },
                    duration: 700});

sr.reveal('.flipInY', { 
                    origin: 'top',
                    opacity: 0,
                    rotate: { x: 0, y: 360, z: 0 },
                    duration: 700,
                    delay: 500});

sr.reveal('.fadeInLeft', { origin: 'left',
                    opacity: 0,
                    distance: '25px',
                    duration: 700});

sr.reveal('.fadeInRight', { origin: 'right',
                    opacity: 0,
                    distance: '25px',
                    duration: 700});

sr.reveal('.fadeInDown1', { origin: 'left',
                    opacity: 0,
                    distance: '25px',
                    duration: 700});

sr.reveal('.rotate1', { 
                    opacity: 0,
                    rotate: { x: 0, y: 0, z: 360 },
                    distance: '25px',
                    duration: 800,
                    delay: 100,});

sr.reveal('.fadeInDown2', { origin: 'bottom',
                    opacity: 0,
                    distance: '25px',
                    duration: 700,
                    delay: 0});

sr.reveal('.rotate2', { 
                    opacity: 0,
                    rotate: { x: 0, y: 0, z: -360 },
                    distance: '25px',
                    duration: 800,
                    delay: 550,});

sr.reveal('.fadeInDown3', { origin: 'right',
                    opacity: 0,
                    distance: '25px',
                    duration: 700,
                    delay: 1000});

sr.reveal('.rotate3', { 
                    opacity: 0,
                    rotate: { x: 0, y: 0, z: 360 },
                    distance: '25px',
                    duration: 800,
                    delay: 1050,});


// function para galeria de imagenes

(function() { 
    Galleria.loadTheme('./js/galleria/themes/classic/galleria.classic.js');
    Galleria.run('.galleria',{
      transition: 'fade',
      imageCrop: false,
      lightbox: true,

      // extend theme
      extend: function() {
          var gallery = this; 

          //fullscreen button
          this.addElement('fscr');
          this.appendChild('stage','fscr');
          var fscr = this.$('fscr').click(function() {
              gallery.toggleFullscreen();
          });

      }
    });
}());    


// esconder automaticamente menu

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

// configuracion de traductor

$("#widget").localizationTool({
    languages: {
       'gl_ES' : {
                      'language': 'Galego',
                      'country': 'Galicia',
                      'languageTranslated': 'Galego',
                      'countryTranslated': 'Galicia',
                      'flag': {
                          'class': 'flag flag-gali',
                          //'url' : './img/gl_GL.jpg'
                      }
                   }       
   },

   defaultLanguage: "es_ES",
   //showFlag: false,
   //showLanguage: false,
   //showCountry: false,
   labelTemplate: "{{language}}",//{{country}} {{(language)}}

   strings: {

       //"id:title" : {
       "Frutas Salgueiro" : {
           gl_ES : "Froitas Salgueiro",  
           es_ES : "Frutas Salgueiro",
           en_GB : "Salgueiro Fruits",
           de_DE : "Früchte Salgueiro",
           pt_PT : "Frutas Salgueiro"
       },
       "Llevando la mejor fruta a tu casa desde hace más de 25 años." : {
           gl_ES : "Levando a mellor froita a túa casa desde hai máis de 25 anos.",  
           es_ES : "Llevando la mejor fruta a tu casa desde hace más de 25 años.",
           en_GB : "Taking the best fruit to your home from more 25 years ago.",
           de_DE : "Die besten Früchte seit über 25 Jahren zu Ihnen nach Hause bringen.",
           pt_PT : "Levando as melhores frutas para sua casa por mais de 25 anos."
       },
       "Cestas" : {
           gl_ES : "Cestas",  
           es_ES : "Cestas",
           en_GB : "Baskets",
           de_DE : "Körbe",
           pt_PT : "Cestas"
       },
       "Eventos" : {
           gl_ES : "Eventos",  
           es_ES : "Eventos",
           en_GB : "Events",
           de_DE : "Ereignisse",
           pt_PT : "Eventos"
       },
       "Dónde estamos" : {
           gl_ES : "Onde estamos",  
           es_ES : "Dónde estamos",
           en_GB : "Where is",
           de_DE : "Wo sind wir",
           pt_PT : "Onde estamos"
       },
       "Recetas y consejos" : {
           gl_ES : "Recetas e consellos",  
           es_ES : "Recetas y consejos",
           en_GB : "Recipes and tips",
           de_DE : "Rezepte und Tipps",
           pt_PT : "Receitas e dicas"
       },
       "Regala fruta! " : {
           gl_ES : "Regala froita! ",  
           es_ES : "Regala fruta! ",
           en_GB : "Give away fruit! ",
           de_DE : "Verschenke Früchte! ",
           pt_PT : "Dê frutos!! "
       },
       "Mira nuestras cestas" : {
           gl_ES : "Mira as nosas cestas",  
           es_ES : "Mira nuestras cestas",
           en_GB : "Look up our baskets",
           de_DE : "Sieh dir unsere Körbe an",
           pt_PT : "Olhe nossas cestas"
       },
       "Nuestras cestas, aparte de llevar el mismo producto que vendemos de máxima calidad, te ofrecen  la posibilidad de regalar algo original, saludable y que seguro degustarán los destinatarios. Anímate a regalar alguna de nuestras cestas, podrás personalizala y adecuala a tu presupuesto." : {
           gl_ES : "As nosas cestas, aparte de levar o mesmo producto que vendemos de máxima calidade, ofrécenche a posibilidade de regalar algo orixinal, saudable e que seguro degustarán o destinatarios. Anímate a regalar algunha das nosas cestas, poderás personalizala e adecuala ao teu presuposto.",  
           es_ES : "Nuestras cestas, aparte de llevar el mismo producto que vendemos de máxima calidad, te ofrecen  la posibilidad de regalar algo original, saludable y que seguro degustarán los destinatarios. Anímate a regalar alguna de nuestras cestas, podrás personalizala y adecuala a tu presupuesto.",
           en_GB : "Our baskets, apart from carrying the same product that we sell with the highest quality, offer you the possibility of giving something original, healthy and that the recipients will surely taste. Go ahead and give away one of our baskets, you can personalize it and adapt it to your budget.",
           de_DE : "Unsere Körbe, abgesehen davon, dass sie das gleiche Produkt tragen, das wir mit der höchsten Qualität verkaufen, bieten Ihnen die Möglichkeit, etwas Originelles, Gesundes zu geben und dass die Empfänger sicher schmecken werden. Los geht's und verschenken Sie einen unserer Körbe, Sie können ihn personalisieren und an Ihr Budget anpassen.",
           pt_PT : "Os nossos cestos, para além de transportarem o mesmo produto que vendemos com a mais alta qualidade, oferecem-lhe a possibilidade de dar algo original, saudável e que os destinatários certamente irão provar. Vá em frente e ofereça um dos nossos cestos, você pode personalizá-lo e adaptá-lo ao seu orçamento."
       },
       "También en eventos: " : {
           gl_ES : "Tamén en eventos: ",  
           es_ES : "También en eventos: ",
           en_GB : "Also in events: ",
           de_DE : "Auch in Veranstaltungen: ",
           pt_PT : "Também em eventos: "
       },
       "Bodas, bautizos, cumpleaños..." : {
           gl_ES : "Vodas, bautizos, cumpleanos...",  
           es_ES : "Bodas, bautizos, cumpleaños...",
           en_GB : "Weddings, baptisms, birthdays...",
           de_DE : "Hochzeiten, Taufen, Geburtstage...",
           pt_PT : "Casamentos, baptizados, aniversários..."
       },
       "Después de un buen banquete o simplemente después de una pequeña cena, ¿a quién non le apetece tomar fruta fresca? Además de decorar y darl color al evento, los invitados siempre quedan encantados con nuestras brochetas de fruta!" : {
           gl_ES : "Despois dun bo banquete ou simplemente despois dunha pequena cea, ¿a quén non lle apetece tomar froita fresca? Ademáis de decorar e darlle cor ao evento, os invitados sempre quedan encantados coas nosas brochetas de froita!",  
           es_ES : "Después de un buen banquete o simplemente después de una pequeña cena, ¿a quién non le apetece tomar fruta fresca? Además de decorar y darl color al evento, los invitados siempre quedan encantados con nuestras brochetas de fruta!",
           en_GB : "After a good banquet or just after a small dinner, who does not want to have fresh fruit? In addition to decorating and giving color to the event, the guests are always delighted with our fruit skewers!",
           de_DE : "Nach einem guten Bankett oder nach einem kleinen Abendessen, wer will nicht frisches Obst? Neben der Dekoration und Farbgebung der Veranstaltung erfreuen sich die Gäste immer wieder an unseren Obstspießen!",
           pt_PT : "Depois de um bom banquete ou logo após um pequeno jantar, quem não quer ter frutas frescas? Além de decorar e dar cor ao evento, os convidados sempre se deliciam com os espetos de frutas!"
       },
       "¿Dónde estamos? " : {
           gl_ES : "¿Onde estamos? ",  
           es_ES : "¿Dónde estamos? ",
           en_GB : "Where we are?",
           de_DE : "Wo sind wir?",
           pt_PT : "Onde estamos? "
       },
       "Nos movemos de lunes a sábado por la comarca del Salnés, desde Cambados hasta O Grove, pasando por Portonovo y Dena. Además nos puedes encontrar en nuestro almacén local, en Viliquín." : {
           gl_ES : "Movémonos de luns a sábado pola comarca do Salnés, desde Cambados ata O Grove, pasando por Portonovo e Dena. Ademáis nos podes atopar no noso almacén local, en Viliquín.",  
           es_ES : "Nos movemos de lunes a sábado por la comarca del Salnés, desde Cambados hasta O Grove, pasando por Portonovo y Dena. Además nos puedes encontrar en nuestro almacén local, en Viliquín.",
           en_GB : "We move from Monday to Saturday through the Salnés region, from Cambados to O Grove, passing through Portonovo and Dena. You can also find us at our local store, in Viliquín.",
           de_DE : "Wir ziehen von Montag bis Samstag durch die Region Salnés, von Cambados nach O Grove, durch Portonovo und Dena. Sie können uns auch in unserem Geschäft in Viliquín finden.",
           pt_PT : "Passamos de segunda a sábado pela região de Salnés, de Cambados a O Grove, passando por Portonovo e Dena. Você também pode nos encontrar em nossa loja local, em Viliquín."
       },
       "Más Smoothies" : {
           gl_ES : "Máis Smoothies",  
           es_ES : "Más Smoothies",
           en_GB : "More Smoothies",
           de_DE : "Mehr Smoothies",
           pt_PT : "Mais Smoothies"
       },
       "Consejos" : {
           gl_ES : "Consellos",  
           es_ES : "Consejos",
           en_GB : "Tips",
           de_DE : "Tipps",
           pt_PT : "Conselhos"
       },
       "Más Consejos" : {
           gl_ES : "Máis Consellos",  
           es_ES : "Más Consejos",
           en_GB : "More Tips",
           de_DE : "Mehr Tipps",
           pt_PT : "Mais conselhos"
       },
       "Sandía" : {
           gl_ES : "Sandía",  
           es_ES : "Sandía",
           en_GB : "Watermelon",
           de_DE : "Wassermelone",
           pt_PT : "Melancia"
       },
       "Frutos rojos" : {
           gl_ES : "Froitos vermellos",  
           es_ES : "Frutos rojos",
           en_GB : "Berries",
           de_DE : "Rote Früchte",
           pt_PT : "Frutas vermelhas"
       },
       "Piña y mango" : {
           gl_ES : "Piña e mango",  
           es_ES : "Piña y mango",
           en_GB : "Ananas und Mango",
           de_DE : "Pineapple and Mango",
           pt_PT : "Abacaxi e manga"
       },
       "El smoothie de desayuno definitivo" : {
           gl_ES : "O smoothie de almorzo definitivo",  
           es_ES : "El smoothie de desayuno definitivo",
           en_GB : "The definitive breakfast smoothie",
           de_DE : "Der definitive Frühstückssmoothie",
           pt_PT : "O batido da manhã definitivo"
       },
       "Ayudante a adelgazar" : {
           gl_ES : "Axudante a adelgazar",  
           es_ES : "Ayudante a adelgazar",
           en_GB : "Assistant to lose weight",
           de_DE : "Assistent, um Gewicht zu verlieren",
           pt_PT : "Assistente a perder peso"
       },
       "El smoothie de desayuno definitivo" : {
           gl_ES : "O smoothie de almorzo definitivo",  
           es_ES : "El smoothie de desayuno definitivo",
           en_GB : "The definitive breakfast smoothie",
           de_DE : "Der definitive Frühstückssmoothie",
           pt_PT : "O batido da manhã definitivo"
       },
       "Detox" : {
           gl_ES : "Desintoxicante",  
           es_ES : "Detox",
           en_GB : "Detox",
           de_DE : "Entgiftung",
           pt_PT : "Desintoxicação"
       },
       "Mejor solas" : {
           gl_ES : "Mellor solas",  
           es_ES : "Mejor solas",
           en_GB : "Better alone",
           de_DE : "Besser alleine",
           pt_PT : "Melhor sozinho"
       },
       "Detox" : {
           gl_ES : "Desintoxicante",  
           es_ES : "Detox",
           en_GB : "Detox",
           de_DE : "Entgiftung",
           pt_PT : "Desintoxicação"
       }
       ,
       "Consumir las frutas ácidas o semi-ácidas siempre por la mañana" : {
           gl_ES : "Consumir as froitas ácidas ou semi-ácidas sempre pola mañá",  
           es_ES : "Consumir las frutas ácidas o semi-ácidas siempre por la mañana",
           en_GB : "Consuming acidic or semi-acidic fruits always in the morning",
           de_DE : "Saure oder halb-saure Früchte immer am Morgen verbrauchen",
           pt_PT : "Consumir frutas ácidas ou semi-ácidas sempre pela manhã"
       }
       ,
       "Consumir las frutas dulces por la mañana o por la tarde" : {
           gl_ES : "Consumir as froitas dulces pola mañá ou pola tarde",  
           es_ES : "Consumir las frutas dulces por la mañana o por la tarde",
           en_GB : "Eat sweet fruits in the morning or afternoon",
           de_DE : "Iss süße Früchte am Morgen oder Nachmittag",
           pt_PT : "Coma frutas doces de manhã ou à tarde"
       }
       ,
       "Combinar siempre las proteínas (carnes-huevos-pescados-aves) con verduras crudas o cocidas; los carbohidratos (pan-pastas-arroz-patatas) y legumbres (lentejas-garbanzos-guisantes) con verduras cocidas (calabaza, zanahoria, alcachofa, coliflor, guisantes, habas, maíz, remolacha)" : {
           gl_ES : "Combinar sempre as proteínas (carnes-ovos-pescados-aves) con verduras crudas ou cocidas; os carbohidratos (pan-pastas-arroz-patatas) ye legumes (lentellas-garbanzos-guisantes) con verduras cocidas (calabaza, cenoria, alcachofa, coliflor, guisantes, fabas, millo, remolacha)",  
           es_ES : "Combinar siempre las proteínas (carnes-huevos-pescados-aves) con verduras crudas o cocidas; los carbohidratos (pan-pastas-arroz-patatas) y legumbres (lentejas-garbanzos-guisantes) con verduras cocidas (calabaza, zanahoria, alcachofa, coliflor, guisantes, habas, maíz, remolacha)",
           en_GB : "Always combine proteins (meats-eggs-fish-poultry) with raw or cooked vegetables; carbohydrates (bread-pasta-rice-potatoes) and legumes (lentils-chickpeas-peas) with cooked vegetables (pumpkin, carrot, artichoke, cauliflower, peas, beans, corn, beet)",
           de_DE : "Kombiniere immer Proteine (Fleisch-Eier-Fisch-Geflügel) mit rohem oder gekochtem Gemüse; Kohlenhydrate (Brot-Nudeln-Reis-Kartoffeln) und Hülsenfrüchte (Linsen-Kichererbsen-Erbsen) mit gekochtem Gemüse (Kürbis, Karotte, Artischocke, Blumenkohl, Erbsen, Bohnen, Mais, Rüben)",
           pt_PT : "Sempre combine proteínas (carnes com ovos, peixes e aves) com vegetais crus ou cozidos; carboidratos (pão-macarrão-batata-arroz) e legumes (lentilhas-grão-de-bico) com legumes cozidos (abóbora, cenoura, alcachofra, couve-flor, ervilha, feijão, milho, beterraba)"
       }
       ,
       "Utilice la piña, kiwi, fresa o naranja en tus ensaladas, aportarán no sólo color si no también un toque fresco y tropical que no te defraudará" : {
           gl_ES : "Utilice a piña, kiwi, amorodos ou laranxa nas túas ensaladas, aportarán no sólo color se non tamén un toque fresco e tropical que non te defraudará",  
           es_ES : "Utilice la piña, kiwi, fresa o naranja en tus ensaladas, aportarán no sólo color si no también un toque fresco y tropical que no te defraudará",
           en_GB : "Use the pineapple, kiwi, strawberry or orange in your salads, they will provide not only color but also a fresh and tropical touch that will not disappoint you",
           de_DE : "Verwenden Sie die Ananas, Kiwi, Erdbeere oder Orange in Ihren Salaten, sie bieten nicht nur Farbe, sondern auch einen frischen und tropischen Touch, der Sie nicht enttäuschen wird",
           pt_PT : "Use o abacaxi, kiwi, morango ou laranja em suas saladas, eles vão fornecer não só a cor, mas também um toque fresco e tropical que não irá decepcioná-lo"
       }
       ,
       "Una buena conservación garantiza un buen consumo. El frigorífico, sólo cuando es necesario. Sacar de la nevera las frutas y verduras un tiempo antes de comerlas mejora el sabor y la textura. Colocar las frutas y hortalizas frescas en la parte más templada de refrigeración (la sección más baja)" : {
           gl_ES : "Unha boa conservación garantiza un bo consumo. O refrixerador, sólo cuando es necesario. Sacar da neveira as froitas e verduras un tempo antes de comelas mellora o sabor e a textura. Colocar as froitas e hortalizas frescas na parte máis templada de refrixeración (a sección máis baixa)",  
           es_ES : "Una buena conservación garantiza un buen consumo. El frigorífico, sólo cuando es necesario. Sacar de la nevera las frutas y verduras un tiempo antes de comerlas mejora el sabor y la textura. Colocar las frutas y hortalizas frescas en la parte más templada de refrigeración (la sección más baja)",
           en_GB : "Good conservation guarantees good consumption. The fridge, only when necessary. Taking fruits and vegetables out of the fridge for a while before eating them improves taste and texture. Place fresh fruits and vegetables in the warmer part of refrigeration (the lower section)",
           de_DE : "Gute Konservierung garantiert einen guten Verbrauch. Der Kühlschrank, nur wenn nötig. Wenn Sie Obst und Gemüse für eine Weile aus dem Kühlschrank nehmen, verbessert sich Geschmack und Textur. Legen Sie frisches Obst und Gemüse in den wärmeren Teil der Kühlung (der untere Teil)",
           pt_PT : "Boa conservação garante bom consumo. A geladeira, somente quando necessário. Tirar frutas e legumes da geladeira por um tempo antes de comê-los melhora o sabor e a textura. Coloque frutas e legumes frescos na parte mais quente da refrigeração (a parte inferior)"
       }
       ,
       "Conservación" : {
           gl_ES : "Conservación",  
           es_ES : "Conservación",
           en_GB : "Conservation",
           de_DE : "Konservierung",
           pt_PT : "Conservação"
       }
       ,
       "Complemento" : {
           gl_ES : "Complemento",  
           es_ES : "Complemento",
           en_GB : "Complement",
           de_DE : "Ergänzung",
           pt_PT : "Complemento"
       }
       ,
       "Acompañante" : {
           gl_ES : "Acompañante",  
           es_ES : "Acompañante",
           en_GB : "Companion",
           de_DE : "Begleiten",
           pt_PT : "Acompanhando"
       }
       ,
       "Melón, plátano, sandía, manzana golden, ciruelas, uvas, albaricoque, chirimoya, caqui, grosella, granada, ciruela claudia, pera conferencia, etc." : {
           gl_ES : "Melón, plátano, sandía, manzán golden, ciruelas, uvas, albaricoque, chirimoia, caqui, grosella, granada, ciruela claudia, pera conferencia, etc.",  
           es_ES : "Melón, plátano, sandía, manzana golden, ciruelas, uvas, albaricoque, chirimoya, caqui, grosella, granada, ciruela claudia, pera conferencia, etc.",
           en_GB : "Melon, banana, watermelon, golden apple, plums, grapes, apricot, custard apple, persimmon, currant, pomegranate, plum claudia, pear conference, etc.",
           de_DE : "Melone, Banane, Wassermelone, goldener Apfel, Pflaumen, Trauben, Aprikose, Puddingapfel, Persimone, Johannisbeere, Granatapfel, Pflaumenclaudia, Birnenkonferenzen usw.",
           pt_PT : "Melão, banana, melancia, maçã dourada, ameixas, uvas, damasco, pinha, caqui, groselha, romã, ameixa claudia, conferência de pêra, etc."
       }
       ,
       "Piña, ciruela, mora, frambuesa, grosella, naranja, lima, limón, membrillo, fresas, níspero, mandarina, tomate, uva, manzana verde, guayaba, pera, uva pasa, etc." : {
           gl_ES : "Ananás (Piña), ciruela, mora, frambuesa, grosella, naranja, lima, limón, membrillo, fresas, níspero, mandarina, tomate, uva, manzana verde, guayaba, pera, uva pasa, etc.",  
           es_ES : "Piña, ciruela, mora, frambuesa, grosella, naranja, lima, limón, membrillo, fresas, níspero, mandarina, tomate, uva, manzana verde, guayaba, pera, uva pasa, etc.",
           en_GB : "Pineapple, plum, blackberry, raspberry, currant, orange, lime, lemon, quince, strawberries, medlar, mandarin, tomato, grape, green apple, guava, pear, raisin, etc.",
           de_DE : "Ananas, Pflaume, Brombeere, Himbeere, Johannisbeere, Orange, Limette, Zitrone, Quitte, Erdbeeren, Mispel, Mandarine, Tomate, Traube, grüner Apfel, Guave, Birne, Rosine, etc.",
           pt_PT : "Abacaxi, ameixa, amora, framboesa, groselha, laranja, limão, limão, marmelo, morangos, nêspera, tangerina, tomate, uva, maçã verde, goiaba, pêra, uva passa, etc."
       }
       ,
       "Consumir las frutas fuera de las comidas, a media mañana o a media tarde es lo ideal, o solas como desayuno (prestar atención en no mezclar dulces y ácidas)" : {
           gl_ES : "Consumir as frutas fora das comidas, a media mañá ou a media tarde é o ideal, ou solas como almorzo (prestar atención en non mesturar dulces e ácidas)",  
           es_ES : "Consumir las frutas fuera de las comidas, a media mañana o a media tarde es lo ideal, o solas como desayuno (prestar atención en no mezclar dulces y ácidas)",
           en_GB : "Consuming fruits outside meals, mid-morning or mid-afternoon is ideal, or only as breakfast (pay attention not to mix sweet and sour)",
           de_DE : "Verzehr von Früchten außerhalb der Mahlzeiten, am Vormittag oder am Nachmittag ist ideal, oder nur als Frühstück (achten Sie darauf, nicht süß und sauer zu mischen)",
           pt_PT : "Consumir frutas fora das refeições, no meio da manhã ou no meio da tarde é ideal, ou apenas como café da manhã (preste atenção para não misturar doce e azedo)"
       }
       ,
       "6 rodajas de pimiento verde, 1/2 manzana verde, 3 trocitos de brócoli, 2 hojas de lechuga rizada, 1 taza de espinacas, el zumo de 4 limas, 3 rodajas de calabacín, 1/2 pepino." : {
           gl_ES : "6 rodaxas de pemento verde, 1/2 manzán verde, 3 pedazos de brecol, 2 follas de leituga riza, 1 taza de espinacas, o zumo de 4 limas, 3 rodajas de calabacín, 1/2 pepino.",  
           es_ES : "6 rodajas de pimiento verde, 1/2 manzana verde, 3 trocitos de brócoli, 2 hojas de lechuga rizada, 1 taza de espinacas, el zumo de 4 limas, 3 rodaxas de calabacín, 1/2 pepino.",
           en_GB : "6 slices of green pepper, 1/2 green apple, 3 pieces of broccoli, 2 sheets of curly lettuce, 1 cup of spinach, the juice of 4 limes, 3 slices of zucchini, 1/2 cucumber.",
           de_DE : "6 Scheiben grüner Pfeffer, 1/2 grüner Apfel, 3 Stück Brokkoli, 2 Blätter lockiger Salat, 1 Tasse Spinat, der Saft von 4 Limetten, 3 Scheiben Zucchini, 1/2 Gurke.",
           pt_PT : "6 fatias de pimentão verde, 1/2 maçã verde, 3 pedaços de brócolis, 2 folhas de alface crespa, 1 xícara de espinafre, o suco de 4 limão, 3 fatias de abobrinha, 1/2 pepino."
       }
       ,
       "2 kiwis, 1/2 plátano, 1/2 manzana, 1 taza de espinacas, 1/2 taza de yogur de vainilla o natural, 2 cucharadas de semillas de lino molidas (opcional)." : {
           gl_ES : "2 kiwis, 1/2 plátano, 1/2 manzán, 1 taza de espinacas, 1/2 taza de iogur de vainilla ou natural, 2 cucharadas de semillas de lino moídas (opcional).",  
           es_ES : "2 kiwis, 1/2 plátano, 1/2 manzana, 1 taza de espinacas, 1/2 taza de yogur de vainilla o natural, 2 cucharadas de semillas de lino molidas (opcional).",
           en_GB : "2 kiwis, 1/2 banana, 1/2 apple, 1 cup of spinach, 1/2 cup of vanilla or natural yogurt, 2 tablespoons of ground flax seeds (optional).",
           de_DE : "2 Kiwis, 1/2 Banane, 1/2 Apfel, 1 Tasse Spinat, 1/2 Tasse Vanille oder Naturjoghurt, 2 Esslöffel gemahlene Leinsamen (optional).",
           pt_PT : "2 kiwis, 1/2 banana, 1/2 maçã, 1 xícara de espinafre, 1/2 xícara de baunilha ou iogurte natural, 2 colheres de sopa de sementes de linho moídas (opcional)."
       }
       ,
       "1 plátano maduro, 2 cucharadas grandes de copos de avena, 1 cucharada de semillas de lino, 150ml de leche de almendra o avena, 4 cucharadas de yogur natural probiótico o tu elección de yogur, 1/2 cucharadita de extracto de vainilla o de cacao en polvo. (Para una persona)" : {
           gl_ES : "1 plátano maduro, 2 cucharadas grandes de copos de avena, 1 cucharada de semillas de lino, 150ml de leite de almendra ou avena, 4 cucharadas de iogur natural probiótico ou a túa elección de iogur, 1/2 cucharada de extracto de vainilla ou de cacao en polvo. (Para unha persoa)",  
           es_ES : "1 plátano maduro, 2 cucharadas grandes de copos de avena, 1 cucharada de semillas de lino, 150ml de leche de almendra o avena, 4 cucharadas de yogur natural probiótico o tu elección de yogur, 1/2 cucharadita de extracto de vainilla o de cacao en polvo. (Para una persona)",
           en_GB : "1 ripe banana, 2 large spoons of oat flakes, 1 tablespoon of flax seeds, 150ml of almond milk or oats, 4 tablespoons of probiotic yogurt or your choice of yogurt, 1/2 teaspoon of vanilla or cocoa extract powdered. (For one person)",
           de_DE : "1 reife Banane, 2 große Löffel Haferflocken, 1 Esslöffel Leinsamen, 150 ml Mandelmilch oder Hafer, 4 Esslöffel probiotischer Joghurt oder Joghurt nach Wahl, 1/2 Teelöffel Vanille oder Kakaoextrakt in Staub. (Für eine Person)",
           pt_PT : "1 banana madura, 2 colheres grandes de flocos de aveia, 1 colher de sopa de sementes de linho, 150ml de leite de amêndoa ou aveia, 4 colheres de sopa de iogurte probiótico ou sua escolha de iogurte, 1/2 colher de chá de baunilha ou extrato de cacau pulverizado. (Para uma pessoa)"
       }
       ,
       "1/2 plátano, 1/2 mango, 3/4 taza de piña, 1/2 taza de yogur natural, 1/2 taza de leche de almendra." : {
           gl_ES : "1/2 plátano, 1/2 mango, 3/4 taza de ananas (piña), 1/2 taza de iogur natural, 1/2 taza de leite de almendra.",  
           es_ES : "1/2 plátano, 1/2 mango, 3/4 taza de piña, 1/2 taza de yogur natural, 1/2 taza de leche de almendra.",
           en_GB : "1/2 banana, 1/2 mango, 3/4 cup of pineapple, 1/2 cup of plain yogurt, 1/2 cup of almond milk.",
           de_DE : "1/2 Banane, 1/2 Mango, 3/4 Tasse Ananas, 1/2 Tasse Naturjoghurt, 1/2 Tasse Mandelmilch.",
           pt_PT : "1/2 banana, 1/2 manga, 3/4 xícara de abacaxi, 1/2 xícara de iogurte natural, 1/2 xícara de leite de amêndoa."
       }
       ,
       "150g de fresas, 1/2 taza de frambuesas frescas o congeladas, 2/3 de taza de yogur natural, 1/3 taza de leche almendra o avena (Para 2 personas)." : {
           gl_ES : "150g de fresas, 1/2 taza de frambuesas frescas ou conxeladas, 2/3 de taza de iogur natural, 1/3 taza de leite almendra o avena (Para 2 persoas).",  
           es_ES : "150g de fresas, 1/2 taza de frambuesas frescas o congeladas, 2/3 de taza de yogur natural, 1/3 taza de leche almendra o avena (Para 2 personas).",
           en_GB : "150g of strawberries, 1/2 cup of fresh or frozen raspberries, 2/3 cup of plain yogurt, 1/3 cup of almond milk or oatmeal (For 2 people).",
           de_DE : "150 g Erdbeeren, 1/2 Tasse frische oder gefrorene Himbeeren, 2/3 Tasse Naturjoghurt, 1/3 Tasse Mandelmilch oder Haferflocken (Für 2 Personen).",
           pt_PT : "150g de morangos, 1/2 xícara de framboesas frescas ou congeladas, 2/3 xícara de iogurte natural, 1/3 xícara de leite de amêndoa ou aveia (para 2 pessoas)."
       }
       ,
       "2 tazas de sandía, 1 manzana, 1 pera, 1 puñado de espinaca fresca. Hojas de menta al gusto. Leche vegetal de avellana opcinal." : {
           gl_ES : "2 tazas de sandía, 1 manzán, 1 pera, 1 puñado de espinaca fresca. Follas de menta ao gusto. Leite vexetal de avellana opcinal.",  
           es_ES : "2 tazas de sandía, 1 manzana, 1 pera, 1 puñado de espinaca fresca. Hojas de menta al gusto. Leche vegetal de avellana opcinal.",
           en_GB : "2 cups of watermelon, 1 apple, 1 pear, 1 handful of fresh spinach. Mint leaves to taste. Vegetable hazelnut milk opcinal.",
           de_DE : "2 Tassen Wassermelone, 1 Apfel, 1 Birne, 1 Handvoll frischer Spinat. Minzeblätter nach Geschmack. Gemüse Haselnuss Milch Opcinal.",
           pt_PT : "2 xícaras de melancia, 1 maçã, 1 pêra, 1 punhado de espinafre fresco. Folhas de hortelã a gosto. Leite de avelã vegetal opcinal."
       }


   }
});