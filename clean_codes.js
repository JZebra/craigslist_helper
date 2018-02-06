const fs = require('fs');

const FILEPATH = './cl_codes.txt';
const NEWFILE = './cl_codes.json';

const readTextFile = (path) => {
  return new Promise((resolve, reject) => {
    const regionMap = {};
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        data.split('\n').forEach((line) => {
          const lineArr = line.replace(/\s+/g, ' ').split(' ');
          const regionCode = lineArr[0];
          // remove scheme from url
          const url = lineArr[2].split('//')[1];
          regionMap[url] = regionCode;
        });
        console.log(JSON.stringify(regionMap));
        resolve(JSON.stringify(regionMap));
      }
    });
  });
};

const writeJsonToFile = (json) => {
  fs.writeFile(NEWFILE, json, 'utf8', (err) => {
    if (err) { return err; }
  });
};

readTextFile(FILEPATH).then(json => writeJsonToFile(json));
