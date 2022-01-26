export default function loadFooter() {
  const container = document.getElementById('footer');
  const footerTextLeft = document.createElement('p');
  const footerTextMiddle = document.createElement('p');
  const footerTextRight = document.createElement('p');

  footerTextLeft.textContent = 'Copyright';

  footerTextMiddle.textContent = '©';

  footerTextRight.textContent = 'The Odin Project 2021';

  container.appendChild(footerTextLeft);
  container.appendChild(footerTextMiddle);
  container.appendChild(footerTextRight);
}
