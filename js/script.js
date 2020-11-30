//
// JS2 Project template.
//

function ajax (msj){
  const fetchOptions = {
    method: 'POST',
    body: JSON.stringify(msj),
  };
  // Ejecuta el fetch.
  fetch(`https://js2-contact-form-api.netlify.app/api/contact`, fetchOptions)
    .then((response) => response.json())
    .then((data) => {
        addform(data);
        console.log(data);
  });
}

const form = document.getElementById("form-contact");
const modal = document.getElementById("info");


form.addEventListener('submit', (event) =>  {
  event.preventDefault();
  console.log(form)
  const name = form.elements[0].value;
  const email = form.elements[1].value;
  const phone = form.elements[2].value;
  const subject = form.elements[3].value;
  const message = form.elements[4].value;


  if(!phone){
    const msj = {
      name: `${name}`,
      email: `${email}`,
      phone: `No fue proporcionado`,
      subject: `${subject}`,
      message: `${message}`,
    };
    ajax(msj);

  }else{
    const msj = {
      name: `${name}`,
      email: `${email}`,
      phone: `${phone}`,
      subject: `${subject}`,
      message: `${message}`,
    };
    ajax(msj);
  }

});


//ul
const lista = document.getElementById('lista-msj');

function addform(values){
  const item = document.createElement('li');
  item.innerHTML = `Nombre: ${values.name}`;
  lista.appendChild(item);

  const item2 = document.createElement('li');
  item2.innerHTML = `Email: ${values.email}`;
  lista.appendChild(item2)

  const item3 = document.createElement('li');
  item3.innerHTML = `Telefono: ${values.phone}`;
  lista.appendChild(item3);

  const item4 = document.createElement('li');
  item4.innerHTML = `Asunto: ${values.subject}`;
  lista.appendChild(item4);

  const item5 = document.createElement('li');
  item5.innerHTML = `Mensaje: ${values.message}`;
  lista.appendChild(item5)

  const boton = document.getElementById('ok');
  boton.addEventListener('click', (event) =>{
    event.preventDefault();
    modal.style.display = 'none'
    form.style.display = 'none'
    form.elements[0].value = "";
    form.elements[1].value = "";
    form.elements[2].value = "";
    form.elements[3].value = "";
    form.elements[4].value = "";
  });

}











