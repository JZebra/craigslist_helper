const addEmailLinks = () => {
  let listings = document.getElementsByClassName('result-info');
  for (let i = 0; i < listings.length; i++) {
    console.log('appending')
    const emailButton = document.createTextNode("Email");
    listings[i].append(emailButton);
  }
};

addEmailLinks();
