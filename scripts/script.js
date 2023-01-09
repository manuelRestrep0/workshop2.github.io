import { tabla } from "../data/data.js";

const printTabla = (listTabla, container) => {
  
  let table = document.querySelector(".table");
  table.innerHTML = "";
  table.innerHTML = `<thead>
  <tr>
    <th>Nombre</th><th>Precio</th><th>Cantidad</th><th>Categoria</th>
  </tr>
</thead>`;
  listTabla.forEach(element => {
  
    let tblDatos = document.getElementById('tabla').insertRow(-1);
    let nombre = tblDatos.insertCell(-1);
    let precio = tblDatos.insertCell(-1);
    let cantidad = tblDatos.insertCell(-1);
    let categoria = tblDatos.insertCell(-1);

    nombre.innerHTML = element.name;
    precio.innerHTML = element.precio;
    cantidad.innerHTML = element.cantidad;
    categoria.innerHTML = element.categoria;
  });

};

const main = document.querySelector('.main');

const contenedorTabla = document.getElementById('containerTabla');

document.addEventListener('DOMContentLoaded', () => {
  let datosTabla = sessionStorage.getItem("datosTabla")? JSON.parse(sessionStorage.getItem("datosTabla")) : [];

  console.log(datosTabla);

  if(datosTabla.length === 0){
    sessionStorage.setItem('datosTabla', JSON.stringify(tabla));
    datosTabla = JSON.parse(sessionStorage.getItem("datosTabla"));
  }

  console.log(datosTabla);


  printTabla(datosTabla, contenedorTabla);
});

const btnEliminar = document.getElementById('eliminar');

btnEliminar.addEventListener('click',(event)=>{
  let datosTabla = sessionStorage.getItem("datosTabla")? JSON.parse(sessionStorage.getItem("datosTabla")) : [];
  datosTabla.pop();
  sessionStorage.setItem("datosTabla", JSON.stringify(datosTabla));
  printTabla(datosTabla, contenedorTabla);
  console.log(datosTabla);
});

const btnActualizar = document.getElementById("actualizar");

btnActualizar.addEventListener('click', (event) =>{
  // pensar como poner la pagina para que el value
  // tenga los datos del ultimo elemento de la tabla.
  // luego actualizar la tabla.


});
