const mainEl = document.getElementById('main');
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
const paragraph = document.createElement('span');
const counterElement = document.createElement('div');
const root = document.getElementById('root');
root.insertBefore(counterElement, mainEl);

