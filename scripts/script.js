const container = document.getElementById('container-browsers');
const template = document.getElementById('template-card').content;
let form = document.getElementById('formFooter');
const btn = document.getElementById('btnContact');

let fragment = document.createDocumentFragment();

form.addEventListener('submit', e => {
    e.preventDefault();
})


document.addEventListener('DOMContentLoaded', () => {
    fetchBrowser();
})

btn.addEventListener('click', e => {
    formulario();
});


const fetchBrowser = async () => {
    try{
        const res = await fetch('./scripts/browsers.json');
        const data = await res.json();
            
        showBrowser(data);
    } catch (error) {
        console.log('error');
    }
};
    


const showBrowser = (browser) =>{
    browser.forEach(navegador => {
        const {image, name, info} = navegador;
        template.querySelector('img').setAttribute('src', navegador.image);
        template.querySelector('h4').textContent = navegador.name;
        template.querySelector('p').textContent = navegador.info;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });
    container.appendChild(fragment);
}

const formulario = () =>{
    let email = document.getElementById('emailInput').value;
    let datos = [data = {
        "email": `${email}`,
    }]; 
    localStorage.setItem('datos', JSON.stringify(data));
    let timerInterval
    Swal.fire({
      title: '¡¡Bien hecho!!',
      html: `hola amigo, Te has registrado correctamente<b></b> users.`,
      timer: 5000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    });
        console.log(datosArray);
};





