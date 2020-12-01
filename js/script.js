//
// JS2 Project template.
//

//variables del modal y el form
const form = document.getElementById('form-contact');
const modal = document.getElementById('lista');
const ul = document.getElementById('lista-msj');
const wrapper = document.getElementById('container');

//funcion que crea los li dentro del modal
function addform(values) {
  const item = document.createElement('li');
  item.innerHTML = `Nombre: ${values.name}`;
  ul.appendChild(item);

  const item2 = document.createElement('li');
  item2.innerHTML = `Email: ${values.email}`;
  ul.appendChild(item2);

  const item3 = document.createElement('li');
  item3.innerHTML = `Telefono: ${values.phone}`;
  ul.appendChild(item3);

  const item4 = document.createElement('li');
  item4.innerHTML = `Asunto: ${values.subject}`;
  ul.appendChild(item4);

  const item5 = document.createElement('li');
  item5.innerHTML = `Mensaje: ${values.message}`;
  ul.appendChild(item5);

  // funcion que darle al boton aceptar borra el contenido de los input y regresa al formulario
  const boton = document.getElementById('aceptar');
  boton.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = 'none';
    wrapper.style.display = 'block';
    ul.innerHTML = '';
    form.elements[0].value = '';
    form.elements[1].value = '';
    form.elements[2].value = '';
    form.elements[3].value = '';
    form.elements[4].value = '';
  });
}

// funcion que hace un metodo post en el api
function ajax(msj) {
  const fetchOptions = {
    method: 'POST',
    body: JSON.stringify(msj),
  };
  // Ejecuta el fetch.
  fetch('https://js2-contact-form-api.netlify.app/api/contact', fetchOptions)
    .then((response) => response.json())
    .then((data) => {
      addform(data);
    });
}
//funcion que obtiene los valores de los input que el usuario digito y si el telefono
// no fue proporcionado sale un mensaje default y oculta el formulario y muestra el modal
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements[0].value;
  const email = form.elements[1].value;
  const phone = form.elements[2].value;
  const subject = form.elements[3].value;
  const message = form.elements[4].value;

  if (!phone) {
    const msj = {
      name: `${name}`,
      email: `${email}`,
      phone: 'No fue proporcionado',
      subject: `${subject}`,
      message: `${message}`,
    };
    ajax(msj);
  } else {
    const msj = {
      name: `${name}`,
      email: `${email}`,
      phone: `${phone}`,
      subject: `${subject}`,
      message: `${message}`,
    };
    ajax(msj);
  }
  modal.style.display = 'block';
  wrapper.style.display = 'none';
});
