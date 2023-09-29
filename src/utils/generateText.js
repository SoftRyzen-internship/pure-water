export const generateText = data => {
  const string = Object.entries(data)
    .sort((a, b) => a[0].length - b[0].length)
    .reduce((str, [key, val]) => (str += `${key}: ${val} \n \n`), '');
  return string;
};
