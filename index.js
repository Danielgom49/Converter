    let dolar={pesoColombiano:3914,pesoMexicano:20.84, libraEsterlina:0.74,euro:0.89};
    let pesoColombiano={pesoMexicano:0.0053, libraEsterlina:0.00019,euro:0.0023, dolar:0.00025};
    let pesoMexicano={pesoColombiano:187.80, libraEsterlina:0.036, euro:0.043, dolar:0.048};
    let euro={pesoColombiano:4418.65,libraEsterlina:0.84,dolar:1.13, pesoMexicano:23.53};
    let libraEsterlina={pesoColombiano:5264.43,euro:1.19,dolar:1.35, pesoMexicano:28.03};
function convertir(){
  let resultadoConversion;
  let selectMoney1= document.getElementById('selectMoney1').value
  let selectMoney2= document.getElementById('selectMoney2').value
  let valorMoneda= document.getElementById('precio').value
  if (valorMoneda!=='') {
    if (selectMoney1==='dolar') {
      if (selectMoney2==='pesoColombiano') {
        resultadoConversion=valorMoneda*dolar.pesoColombiano;
      }
      if (selectMoney2==='pesoMexicano') {
        resultadoConversion=valorMoneda*dolar.pesoMexicano;
      }
      if (selectMoney2==='euro') {
        resultadoConversion=valorMoneda*dolar.euro;
      }
      if (selectMoney2==='libraEsterlina') {
        resultadoConversion=valorMoneda*dolar.libraEsterlina;
      }
    }
    if (selectMoney1==='pesoColombiano') {
      if (selectMoney2==='dolar') {
        resultadoConversion=valorMoneda*pesoColombiano.dolar;
      }
      if (selectMoney2==='pesoMexicano') {
        resultadoConversion=valorMoneda*pesoColombiano.pesoMexicano;
      }
      if (selectMoney2==='euro') {
        resultadoConversion=valorMoneda*pesoColombiano.euro;
      }
      if (selectMoney2==='libraEsterlina') {
        resultadoConversion=valorMoneda*pesoColombiano.libraEsterlina;
      }
    }
    if (selectMoney1==='pesoMexicano') {
      if (selectMoney2==='dolar') {
        resultadoConversion=valorMoneda*pesoMexicano.dolar;
      }
      if (selectMoney2==='pesoColombiano') {
        resultadoConversion=valorMoneda*pesoMexicano.pesoColombiano;
      }
      if (selectMoney2==='euro') {
        resultadoConversion=valorMoneda*pesoMexicano.euro;
      }
      if (selectMoney2==='libraEsterlina') {
        resultadoConversion=valorMoneda*pesoMexicano.libraEsterlina;
      }
    }
    if (selectMoney1==='euro') {
      if (selectMoney2==='dolar') {
        resultadoConversion=valorMoneda*euro.dolar;
      }
      if (selectMoney2==='pesoColombiano') {
        resultadoConversion=valorMoneda*euro.pesoColombiano;
      }
      if (selectMoney2==='pesoMexicano') {
        resultadoConversion=valorMoneda*euro.pesoMexicano;
      }
      if (selectMoney2==='libraEsterlina') {
        resultadoConversion=valorMoneda*euro.libraEsterlina;
      }
    }
    if (selectMoney1==='libraEsterlina') {
      if (selectMoney2==='dolar') {
        resultadoConversion=valorMoneda*libraEsterlina.dolar;
      }
      if (selectMoney2==='pesoColombiano') {
        resultadoConversion=valorMoneda*libraEsterlina.pesoColombiano;
      }
      if (selectMoney2==='pesoMexicano') {
        resultadoConversion=valorMoneda*libraEsterlina.pesoMexicano;
      }
      if (selectMoney2==='euro') {
        resultadoConversion=valorMoneda*libraEsterlina.euro;
      }
    }
    let respuesta = document.createElement('p');
    respuesta.textContent=resultadoConversion;
    respuesta.style.color='red';
    respuesta.style.fontSize='25px'
    resultado.appendChild(respuesta)

    let fragment= document.createDocumentFragment();
    let verifica = document.createElement('p')
    verifica.classList.add('verifExitosa');
    verifica.textContent='Conversión Exitosa';
    fragment.appendChild(verifica);
    verificacion.appendChild(fragment);
  }
  if (valorMoneda==='') {
    let fragment= document.createDocumentFragment();
    let verifica = document.createElement('p')
    verifica.classList.add('verifError');
    verifica.textContent='Falló la Conversión';
    fragment.appendChild(verifica);
    verificacion.appendChild(fragment);
  }
}