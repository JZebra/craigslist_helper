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

const getReplyEmail = (resp) => {
  // eg mailto:q7v4b-6463758095@sale.craigslist.org?subject=new+and+used+exercise+bikes&body=%0A%0Ahttps%3A%2F%2Fsfbay.craigslist.org%2Feby%2Fsgd%2Fd%2Fnew-and-used-exercise-bikes%2F6463758095.html%0A
  const [email, queryStr] = resp.getElementsByClassName('mailapp')[0].href
    .replace('mailto:', '')
    .split('?');
  const [subject, body] = decodeURIComponent(queryStr)
    .split('&')
    .map(el => el.split('=')[1]);

  console.log(email, subject, body);
};

const addEmailLinks = () => {
  const listings = document.getElementsByClassName(LISTING_CLASS);
  for (let i = 0; i < listings.length; i++) {
    const emailButton = document.createElement('span');
    emailButton.appendChild(document.createTextNode('Email'));
    const xhr = new XMLHttpRequest();
    xhr.open('GET', getEmailUrl(listings[i]), true);
    // necessary for html parsing
    xhr.responseType = 'document';

    xhr.onload = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          getReplyEmail(xhr.responseXML);
        } else {
          console.error(xhr.statusText);
        }
      }
    };

    xhr.onerror = () => {
      console.error(xhr.statusText);
    };

    emailButton.addEventListener('click', () => {
      xhr.send();
    });
    listings[i].append(emailButton);
  }
};

addEmailLinks();
