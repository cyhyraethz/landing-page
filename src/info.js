export default function loadInfo() {
  const container = document.getElementById('info');
  const infoTitle = document.createElement('h1');
  const infoBoxes = document.createElement('div');
  const infoBoxOne = document.createElement('div');
  const infoBoxTwo = document.createElement('div');
  const infoBoxThree = document.createElement('div');
  const infoBoxFour = document.createElement('div');

  infoTitle.className = 'infoTitle';
  infoTitle.textContent = 'Some random information.';

  infoBoxes.className = 'infoBoxes';

  const infoBox = [infoBoxOne, infoBoxTwo, infoBoxThree, infoBoxFour];

  for (let box of infoBox) {
    const image = document.createElement('div');
    const text = document.createElement('p');
    image.className = 'infoBoxImage';
    text.className = 'infoBoxText';
    box.className = 'infoBox';
    text.textContent = 'this is some subtext under an illustration or image';
    box.appendChild(image);
    box.appendChild(text);
    infoBoxes.appendChild(box);
  }

  container.appendChild(infoTitle);
  container.appendChild(infoBoxes);
}
