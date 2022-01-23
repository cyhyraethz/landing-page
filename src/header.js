export default function loadHeader() {
  const container = document.getElementById('header');
  const headerNav = document.createElement('div');
  const headerLogo = document.createElement('h2');
  const headerLinkList = document.createElement('ul');
  const headerLinkOne = document.createElement('a');
  const headerLinkTwo = document.createElement('a');
  const headerLinkThree = document.createElement('a');
  const headerContent = document.createElement('div');
  const headerContentLeft = document.createElement('div');
  const headerMessageTitle = document.createElement('h1');
  const headerMessageText = document.createElement('p');
  const headerContentRight = document.createElement('div');
  const headerButton = document.createElement('button');
  const headerImage = document.createElement('img');

  headerNav.className = 'headerNav';

  headerLogo.className = 'headerLogo';
  headerLogo.textContent = 'Header Logo';

  headerLinkList.className = 'headerLinkList';

  headerLinkOne.textContent = 'header link one';
  headerLinkTwo.textContent = 'header link two';
  headerLinkThree.textContent = 'header link three';

  headerContent.className = 'headerContent';

  headerMessageText.className = 'headerMessageText';
  headerMessageText.textContent =
    "This website has some subtext that goes here under the main title. \
    It's a smaller font and the color is lower contrast.";

  headerMessageTitle.className = 'headerMessageTitle';
  headerMessageTitle.textContent = 'This website is awesome';

  headerButton.className = 'headerButton';
  headerButton.textContent = 'Sign up';

  headerImage.className = 'headerImage';

  const headerLinks = [headerLinkOne, headerLinkTwo, headerLinkThree];

  for (let link of headerLinks) {
    const listItem = document.createElement('li');
    listItem.appendChild(link);
    // link.className = 'headerLink';
    headerLinkList.appendChild(listItem);
  }

  headerNav.appendChild(headerLogo);
  headerNav.appendChild(headerLinkList);

  headerContentLeft.appendChild(headerMessageTitle);
  headerContentLeft.appendChild(headerMessageText);
  headerContentLeft.appendChild(headerButton);

  headerContentRight.appendChild(headerImage);

  headerContent.appendChild(headerContentLeft);
  headerContent.appendChild(headerContentRight);

  container.appendChild(headerNav);
  container.appendChild(headerContent);
}
