const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio')
const stylelint = require('stylelint');

//load the HTML file, since we're gonna need it.
const html = fs.readFileSync('index.html', 'utf-8');
//absolute path for relative loading (if needed)
const baseDir = 'file://'+path.dirname(path.resolve('index.html'))+'/';

describe('Source code is valid', () => {
  test('CSS validates without errors', async () => {
    let cssValidityObj = await stylelint.lint({files:'**/*.css'});
    expect(cssValidityObj).cssLintResultsContainsNoErrors();
  })
});

//Custom code validation matchers (for error output)
expect.extend({
  //using htmllint
  htmlLintResultsContainsNoErrors(validityObj) {
    const pass = validityObj.length === 0;
    if(pass){
      return { pass:true, message:() => "expected html to contain validity errors" };  
    }
    else {
      return { pass: false, message:() => (
        //loop through and build the result string
        //these error messages could be more detailed; maybe do manually later
        validityObj.reduce((out, msg)=> {
          return out + `Error: '${msg.rule}' at line ${msg.line}, column ${msg.column}.\n`
        }, '')
      )};      
    }
  },

  //using stylelint errors
  cssLintResultsContainsNoErrors(validityObj) {
    const pass = validityObj.errored === false;
    if(pass){
      return { pass:true, message:() => "expected CSS to contain validity errors" };
    }
    else {
      return { pass: false, message:() => (
        //loop through and build the result string
        JSON.parse(validityObj.output)[0].warnings.reduce((out, msg) => {
          return out + `${msg.severity}: ${msg.text}\n       At line ${msg.line}, column ${msg.column}.\n`
        }, '')
      )};
    }
  }
});