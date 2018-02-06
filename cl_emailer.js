const LISTING_CLASS = 'result-info';
const ANCHOR_CLASS = 'result-title';
// const urlRegionMap is defined in cl_codes.js

const getEmailLink = (listing) => {
  const listUrlArr = listing.getElementsByClassName(ANCHOR_CLASS)[0]
    .getAttribute('href')
    .replace(/^https?:\/\//i, '')
    .split('/');
  const host = listUrlArr[0];
  const regionCode = urlRegionMap[host];
  const listingCode = listUrlArr[listUrlArr.length - 1].replace('.html', '');
  const category = listUrlArr[2];
  return `http://${host}/reply/${regionCode}/${category}/${listingCode}`;
};

const addEmailLinks = () => {
  let listings = document.getElementsByClassName(LISTING_CLASS);
  for (let i = 0; i < listings.length; i++) {
    console.log(getEmailLink(listings[i]));
    const emailButton = document.createTextNode("Email");
    listings[i].append(emailButton);
  }
};

addEmailLinks();
