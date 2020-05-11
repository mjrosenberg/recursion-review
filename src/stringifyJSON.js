// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
// your code goes here
  if (typeof obj === "string"){
    return '"' + obj + '"';
  } else if (typeof obj === "number"){
    return String(obj);
  } else if (typeof obj === "boolean"){
    return String(obj);
  } else if(Array.isArray(obj) === true){
    var ans = "[";
    if (obj[0] === undefined){
      return "[]";
    }
    for (var i = 0; i< obj.length; i++){
      ans = ans + stringifyJSON(obj[i]) + ",";
      //first recursive call
    }
    ans = ans.substring(0, ans.length -1);
    ans += "]";
    return ans;
  } else if (obj === null){
    return "null";
  } else if (obj instanceof Object) {
    var arrayOfKeyValues = [];

    objKeys = Object.keys(obj);

    objKeys.forEach(function(key) {
      var keyOut = '"' + key + '":';
      var keyValOut = obj[key];
      if (keyValOut instanceof Function || typeof keyValOut === undefined){
        arrayOfKeyValues.push('');
      } else if (typeof keyValOut === 'string'){
        arrayOfKeyValues.push(keyOut + '"' + keyValOut + '"');
      } else if (typeof keyValOut === 'boolean' || typeof keValOut === 'number' || keyValOut === null){
        arrayOfKeyValues.push(keyOut + keyValOut);
      } else if (keyValOut instanceof Object) {
        arrayOfKeyValues.push(keyOut + stringifyJSON(keyValOut));
      }
    });
    return '{' + arrayOfKeyValues + '}';
  }
};
