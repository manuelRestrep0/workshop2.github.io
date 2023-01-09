const form = document.querySelector('.form');

let datosTabla = sessionStorage.getItem('datosTabla')? JSON.parse(sessionStorage.getItem('datosTabla')):[];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const valuesForm = Object.values(form);

  const nuevoProducto = {};
  valuesForm.forEach((valueInput) => {
    if(valueInput.id) {
      nuevoProducto[valueInput.id] = valueInput.value;
    }
  })

  datosTabla.push(nuevoProducto);

  sessionStorage.setItem('datosTabla', JSON.stringify(datosTabla));

  datosTabla = JSON.parse(sessionStorage.getItem('datosTabla'));

  valuesForm.forEach(input => {
    if(input.id){
      input.value = "";
    }
  });
}); 



