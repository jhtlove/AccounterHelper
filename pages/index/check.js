var checkedNum;
const convert = require('./convert.js')

function checkNumber(text) {
  //jquery对象?
  var parsedNumber = parseFloat(text); //00.300 => 0.3   1.3a3 => 1.3
  // isNaN("1.3a3") //true
  // isNaN("1.") //false
  //0 在if 中会转换为 false
  if (isNaN(text)) {
    //substring() 不接受负的参数
    if (text.length >= 1) {
      var subString = text.substring(0, text.length - 1);
      var parsedSub = parseFloat(subString);
      if (!isNaN(subString)) {
        element.val(text.substring(0, text.length - 1)); //return [start,end)
        console.log("checked number:" + parsedSub);
        checkedNum = parsedSub;
        return convert.getCounting(parsedNumber);
      } else {
        element.val("");
        console.log("checked number is empty str");
        checkedNum = "";
        return "";
      }
    } else {
      element.val("");
      console.log("checked number is empty str");
      checkedNum = "";
      return "";
    }
  } else {
    console.log("checked number:" + parsedNumber);
    checkedNum = parsedNumber;
    return convert.getCounting(parsedNumber);
  }
}

module.exports.checkNumber = checkNumber