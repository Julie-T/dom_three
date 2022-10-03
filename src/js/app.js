// TODO: write code here

// const { is } = require("core-js/core/object");

const mainEl = document.getElementById('main');
const root = document.getElementById('root');
mainEl.innerHTML = `
<div class="card">
  <div class="hole-game">
    <li class = 'hole' id = hole1></li>
    <li class = 'hole' id = hole2></li>
    <li class = 'hole' id = hole3></li>
    <li class = 'hole' id = hole4></li>
    <li class = 'hole' id = hole5></li>
    <li class = 'hole' id = hole6></li>
    <li class = 'hole' id = hole7></li>
    <li class = 'hole' id = hole8></li>
    <li class = 'hole' id = hole9></li>
    <li class = 'hole' id = hole10></li>
    <li class = 'hole' id = hole11></li>
    <li class = 'hole' id = hole12></li>
    <li class = 'hole' id = hole13></li>
    <li class = 'hole' id = hole14></li>
    <li class = 'hole' id = hole15></li>
    <li class = 'hole' id = hole16></li>
  </div>
</div>
`;


let counterDaemon = 0;
let counterClick = 0;
const counterElement = document.createElement('div');
root.insertBefore(counterElement, mainEl);
const paragraph = document.createElement('span');
// console.log(counterElement)
// // counterElement.appendChild('span');/
// const tmpCnt = document.getElementById('cnt');

// // const holes = array.from(document.querySelectorAll('hole'));

(() => {
  let activeHole = 1;
  let newActiveHole = 1;

  function getHole(index) {
    return document.getElementById(`hole${index}`);
  }
  function deactivateHole(index) {
    getHole(index).classList.remove('hole_has-obj');
  }
  function activateHole(index) {
    getHole(index).classList.add('hole_has-obj', 'pass');
   
    counterDaemon += 1;
    // console.log({counterElement});
    
    paragraph.textContent = counterDaemon;
    root.insertBefore(paragraph, mainEl);
    // console.log({counterDaemon});



    const element  = document.getElementsByClassName('hole_has-obj');
    let isClicked = false;
    element[0].addEventListener("click", () => {
      
      if (!isClicked) {
        isClicked = true;
        counterClick += 1;
        // console.log({counterClick});
      }

    });
  }
  function next() {
    let isStartGame = true;

    const buttonStart = document.getElementById('start_game');
    console.log(buttonStart)
    buttonStart.addEventListener('click', () => {
      location.reload()
    })

    setTimeout(() => {
  
      deactivateHole(activeHole);
      newActiveHole = Math.floor(1 + Math.random() * 16);
      if (newActiveHole !== activeHole) {
        activeHole = newActiveHole;
      }
      if(isStartGame) {
        activateHole(activeHole);
        next();
      }

    }, 1000);
    if ((counterDaemon - counterClick) === 2) {
      console.log('looooser');
      counterClick = 0;
      counterDaemon = 0;
      isStartGame = false;
    }
  }
  next();
})();
