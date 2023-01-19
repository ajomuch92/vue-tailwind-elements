// 'use strict'
const fs = require('fs');
const path = require('path');
const kebabCase = require('kebab-case');
const mainDir = path.resolve(__dirname, '../lib-components');

let tags = {};
let attributes = {};

fs.readdirSync(mainDir, { withFileTypes: true }).filter((file) => file.name === 'index.js').forEach((item) => {
  const componentJsPath = mainDir + '\\' + item.name;
  const file = fs.readFileSync(componentJsPath, 'utf-8');
  const fileString = file.toString();
  const filesPath = fileString.split('\n');
  filesPath.forEach((path) => {
    let singlePath = path.match(/'([^']+)'/)[0];
    if (singlePath) {
      singlePath = singlePath.replaceAll('\'', '').replace('.', '');
      let name = singlePath.substring(singlePath.lastIndexOf('/') + 1);
      name = kebabCase(name.replace('.vue', ''));
      const componentJsPath = mainDir + singlePath;
      const file = fs.readFileSync(componentJsPath, 'utf-8');

      const fileString = file.toString();

      let stringToken = 'export default {';

      const index = fileString.indexOf(stringToken);
      const indexEnd = fileString.indexOf('</script>');

      const jsonString = fileString.substring(index + stringToken.length - 1 , indexEnd).trim()
        .replaceAll('\n', '')
        .replaceAll('\r', '')
        .replaceAll(' ', '');
        
      stringToken = 'props:';
      const indexOfProp = jsonString.indexOf(stringToken);

      let substringProps = jsonString.substring(indexOfProp + stringToken.length);

      substringProps = analyzeText(substringProps);

      const splittedSubStringProps = substringProps.split('},');
      const attributesArr = [];
      for (let i = 0; i < splittedSubStringProps.length; i += 1) {
        const currentString = splittedSubStringProps[i];
        const substringKey = currentString.substring(0, currentString.indexOf(':'));
        if (substringKey) {
          attributesArr.push(substringKey);
          if (substringKey !== kebabCase(substringKey)) {
            attributesArr.push(kebabCase(substringKey));
          }
          stringToken = 'type:';
          const typeIndex = currentString.indexOf(stringToken);
          const commaIndex = currentString.indexOf(',', typeIndex);
          const attributeType = currentString.substring(typeIndex + stringToken.length, commaIndex);
          attributes[`${name}/${substringKey}`] = {
            description: '',
            type: attributeType.replace('{type:', '').replace('[', '')
          }
        }
      }
      
      let mainTag = {
        "attributes": attributesArr,
        "description": `${name} component`,
        "subtags": []
      }
      tags[name] = mainTag;
    }
  })
})


function analyzeText(text) {
  const stack = [];
  for (let i = 0; i < text.length; i += 1) {
    const char = text.charAt(i);
    if (char === '{') {
      stack.push(i);
    } else if (char === '}') {
      const last = stack.pop();
      if (stack.length === 0) {
        return text.substring(last + 1 , i);
      }
    }
  }
  return undefined;
}


fs.writeFile(path.resolve(__dirname, './tags.json'), JSON.stringify(tags, null, 2), function (err, data) {
    if (err) {
        return console.log(err);
    }
});
fs.writeFile(path.resolve(__dirname, './attributes.json'), JSON.stringify(attributes, null, 2), function (err, data) {
    if (err) {
        return console.log(err);
    }
});
