module.exports = new Inferenecias();
function Inferenecias() {}

Inferenecias.prototype.getPuntajeCuestionario = function(sintomas) {
    var puntaje = 0 ;

    // Inicio de problemas respiratorios anterior a los 20
    if (sintomas[0]) {
      puntaje += 3 ;
      // Frecuencia diaria
      if (sintomas[1]) {
        puntaje += 2 ;

      } // Frecuencia esporadica sintomas[2]
      else {
        puntaje += 2 ;
      }

      // Intensificación diurna o nocturna
      if (sintomas[3] || sintomas[4]) {
        puntaje += 3 ;
        // Tiempo de instauracion cronica
        if (sintomas[5]) {
            puntaje +=4 ;
        } // Aguda
        else {
          puntaje -=1 ;
        }
      }else {
        puntaje -= 2 ;
      }

      // Expectoracion abundante
      if (sintomas[6]) {
          puntaje -= 5 ;
          console.log("sugiere otro diagnostico" + sintomas[6]);
      }else {

        // Expectoracion irritativa
        if (sintomas[7]) {
            puntaje += 5 ;
          // Esputo perlado
          if (sintomas[8]) {
              puntaje += 5 ;
          }

          // Dolor toracico u opresion en el pecho
          if (sintomas[9]=='L' || sintomas[9]=='M' || sintomas[10]) {
              puntaje += 2 ;
          } // dolor toracico ausente



        }else {
            puntaje -= 3 ;
            console.log("sugiere otro diagnostico");
        }
      }

      // Disnea o fatiga
      if (sintomas[11]) {
          puntaje += 2 ;

          // Limitacion de actividades
          if (sintomas[12]=='L' || sintomas[12] =='M') {
              puntaje += 2.5 ;

          } // sintomas[12] == 'G'
          else {
              puntaje +=5 ;
              console.log("Realice con urgencia examenes fisicos");

              // LLAMAR O NO AFUNCION DE EXAMENES FISICOS
          }
      }

      // Alteracion de  conciencia
      if (sintomas[13]) {
          puntaje += 5 ;
          console.log("Realice con urgencia examenes fisicos");
      }

      // Presencia de factores agravantes
      if (sintomas[14]) {
          puntaje += 4 ;
      }

      // Silbilancia
      if (sintomas[15]) {
          puntaje += 3 ;
      }

      // Sudores frios
      if (sintomas[16]) {
          puntaje -=3 ;
          console.log("sugiere otro diagnostico");
      }

      // Antecedentes
      // Fumador
      if (sintomas[24]) {
          puntaje += 5 ;
      }
      // Familiares de primer grado con asma bronquial o problemas respiratorios
      if (sintomas[25]) {
          puntaje += 3 ;
      }

    }else {
      console.log("Sugiere otro diagnostico");
    }

    return console.log(""+ puntaje);
};

// 48 en total
// 14 en contra


Inferenecias.prototype.getPuntajeExamenes = function(sintomas) {
  var puntaje = 0;

  // Temperatura corporal normal
  if (sintomas[16]) {
      puntaje += 1 ;
  } // alta
  else if (sintomas[16]) {
      puntaje += 1 ;
  } // baja
  else {
      puntaje -= 2 ;
  }

  // Sautracion de oxigeno en la sangre
  if(sintomas[20]){
    puntaje -= 3 ;
    console.log("sugiere otro diagnostico");
  }else {
    if (sintomas[21]) {
      puntaje += 5 ;
      console.log("asma");
    }
  }
  // Espirometria
  if (sintomas[22]) {
    puntaje -= 5 ;
    console.log("sugiere otro diagnostico");
  }else {
    if (sintomas[23]) {
      puntaje += 5 ;
      console.log("asma");
    }else {
      puntaje -= 4 ;
      console.log("sugiere otro diagnostico");
    }
  }
}
