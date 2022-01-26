export default function loadQuote() {
  const container = document.getElementById('quote');
  const quote = document.createElement('div');
  const quoteText = document.createElement('p');
  const quoteAuthor = document.createElement('p');

  quote.className = 'quote';

  quoteText.className = 'quoteText';
  quoteText.textContent =
    "This is an inspiring quote, or a testimonial from a customer. \
    Maybe it's just filling up space, or maybe people will actually \
    read it. Who knows? All I know is that it looks nice.";

  quoteAuthor.className = 'quoteAuthor';
  quoteAuthor.textContent = '-Thor, God of Thunder';

  quote.appendChild(quoteText);
  quote.appendChild(quoteAuthor);

  container.appendChild(quote);
}
