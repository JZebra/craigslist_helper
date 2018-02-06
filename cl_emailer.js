const LISTING_CLASS = 'result-info';
const ANCHOR_CLASS = 'result-title';
// const urlRegionMap is defined in cl_codes.js

const getEmailUrl = (listing) => {
  const [scheme, listUrl] = listing.getElementsByClassName(ANCHOR_CLASS)[0]
    .getAttribute('href')
    .split('//');
  const listUrlArr = listUrl.split('/');
  const host = listUrlArr[0];
  const regionCode = urlRegionMap[host];
  const listingCode = listUrlArr[listUrlArr.length - 1].replace('.html', '');
  const category = listUrlArr[2];
  return `${scheme}//${host}/reply/${regionCode}/${category}/${listingCode}`;
};

const addEmailLinks = () => {
  const listings = document.getElementsByClassName(LISTING_CLASS);
  for (let i = 0; i < listings.length; i++) {
    const emailButton = document.createElement('span');
    emailButton.appendChild(document.createTextNode('Email'));
    const req = new XMLHttpRequest();
    req.open('GET', getEmailUrl(listings[i]));
    emailButton.addEventListener('click', () => {
      req.send();
    });
    listings[i].append(emailButton);
  }
};

addEmailLinks();
