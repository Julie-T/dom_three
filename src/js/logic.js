

class Hole {
    constructor() {
        this.index = index;
    }
    static getHole() {
        return document.getElementById(`hole${index}`);
    }
}

const hole = new Hole()


(() => {
    let activeHole = 1;
    let newActiveHole = 1;
  

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