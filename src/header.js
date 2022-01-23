export default function loadHeader() {
  loadNav();
  loadContent();
}

function loadNav() {
  const container = document.getElementById('header');
  const headerNav = document.createElement('div');
  const headerHome = document.createElement('a');
  const headerLogo = document.createElement('h2');
  const headerList = document.createElement('ul');
  const headerLinkOne = document.createElement('a');
  const headerLinkTwo = document.createElement('a');
  const headerLinkThree = document.createElement('a');

  headerNav.className = 'headerNav';

  headerHome.href = '#home';
  headerHome.className = 'headerHome';

  headerLogo.className = 'headerLogo';
  headerLogo.textContent = 'Header Logo';

  headerList.className = 'headerList';

  headerLinkOne.href = '#one';
  headerLinkOne.textContent = 'header link one';
  headerLinkTwo.href = '#two';
  headerLinkTwo.textContent = 'header link two';
  headerLinkThree.href = '#three';
  headerLinkThree.textContent = 'header link three';

  const headerLinks = [headerLinkOne, headerLinkTwo, headerLinkThree];

  for (let link of headerLinks) {
    const listItem = document.createElement('li');
    listItem.appendChild(link);
    link.className = 'headerLink';
    headerList.appendChild(listItem);
  }

  headerHome.appendChild(headerLogo);

  headerNav.appendChild(headerHome);
  headerNav.appendChild(headerList);

  container.appendChild(headerNav);
}

function loadContent() {
  const container = document.getElementById('header');
  const headerContent = document.createElement('div');
  const headerContentLeft = document.createElement('div');
  const headerMessageTitle = document.createElement('h1');
  const headerMessageText = document.createElement('p');
  const headerContentRight = document.createElement('div');
  const headerButtonLink = document.createElement('a');
  const headerButton = document.createElement('button');
  const headerImage = document.createElement('img');
  headerContent.className = 'headerContent';

  headerMessageText.className = 'headerMessageText';
  headerMessageText.textContent =
    "This website has some subtext that goes here under the main title. \
    It's a smaller font and the color is lower contrast.";

  headerMessageTitle.className = 'headerMessageTitle';
  headerMessageTitle.textContent = 'This website is awesome';

  headerButtonLink.href = '#sign-up';

  headerButton.className = 'headerButton';
  headerButton.textContent = 'Sign up';

  headerImage.className = 'headerImage';

  headerButtonLink.appendChild(headerButton);

  headerContentLeft.appendChild(headerMessageTitle);
  headerContentLeft.appendChild(headerMessageText);
  headerContentLeft.appendChild(headerButtonLink);

  headerContentRight.appendChild(headerImage);

  headerContent.appendChild(headerContentLeft);
  headerContent.appendChild(headerContentRight);

  container.appendChild(headerContent);
}
