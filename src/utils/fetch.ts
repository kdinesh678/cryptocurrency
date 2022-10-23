import sampleData from '../../sample.json';

export function fetchJsonData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(sampleData);
    }, 1000);
  });
}
