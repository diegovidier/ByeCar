const MOTO_CARD = [
    {
        title: "Scooter Elétrica Voltz EV1",
        paragraph:"O câmbio de 5 marchas da Scooter Elétrica Voltz EV1 oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
        img: "./assets/images/scooter.png",
    },
    {
        title: "Honda CB 500X",
        paragraph: "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
        img: "./assets/images/hondacbx.png",
    },
];


const cardsElements = document.querySelectorAll(".carousel-cards li");
const modalElement = document.querySelector("#modal")
const INTERVAL = 2000;

let index = 0;

for (var i=0; i < cardsElements.length; i++) {
    cardsElements[i].style.display = 'none';
}

cardsElements[index].style.display = 'block';


function show(num) {
    index = index + num;

    if (index >= cardsElements.length){
        index = 0;
    }

    if (index < 0 ) {
        index = cardsElements.length - 1;
    }    

   
    for (var i=0; i < cardsElements.length; i++) {
        cardsElements[i].style.display = 'none';
    }
    cardsElements[index].scrollIntoView({behavior:"smooth"});
    cardsElements[index].style.display = 'block';
    
}

myInterval = setInterval(() => {
   show(+1); 
}, INTERVAL);

function showModal() {
    modalElement.innerHTML = ""

    modalElement.innerHTML = `
        <div class = "modal-card">
            <button onclick="closeModal()">
                <img src="/assets/images/close-btn.png" alt="close-button" />
            </button>

            <h1>${MOTO_CARD[index].title}</h1>

            <p>
            ${MOTO_CARD[index].paragraph}    
            </p>

            <img src="${MOTO_CARD[index].img}">
            
            <button id="btn-sign">Quero Assinar!</button>
        </div>
        `;

        modalElement.style.visibility = "visible";
        clearInterval(myInterval);
}

function closeModal() {
    modalElement.style.visibility = "hidden";
    myInterval = setInterval(() => {
        show(+1); 
     }, INTERVAL);
  }