export default function loadBanner() {
  const container = document.getElementById('sign');
  const banner = document.createElement('div');
  const bannerLeft = document.createElement('div');
  const bannerTitle = document.createElement('h2');
  const bannerText = document.createElement('p');
  const bannerRight = document.createElement('div');
  const bannerButtonLink = document.createElement('a');
  const bannerButton = document.createElement('button');

  banner.className = 'banner';

  bannerLeft.className = 'bannerLeft';

  bannerTitle.className = 'bannerTitle';
  bannerTitle.textContent = "Call to action! It's time!";

  bannerText.className = 'bannerText';
  bannerText.textContent = 'Sign up for our product by clicking that button right over there!';

  bannerButton.className = 'bannerButton';
  bannerButton.textContent = 'Sign up';

  bannerLeft.appendChild(bannerTitle);
  bannerLeft.appendChild(bannerText);

  bannerButtonLink.appendChild(bannerButton);

  bannerRight.appendChild(bannerButtonLink);

  banner.appendChild(bannerLeft);
  banner.appendChild(bannerRight);

  container.appendChild(banner);
}
