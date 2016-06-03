var folder = function(folderName){

var fs = require('fs');
var filesInFolder = fs.readdirSync(folderName);

var myFiles = [];

filesInFolder.forEach(function(file){
  var contents = fs.readFileSync("./files/week1/" + file,'utf-8');

  var lines = contents.split("\n");
  lines.forEach(function(line){
  myFiles.push(line);
  });

  console.log(contents);
});
console.log(myFiles);
return myFiles;
};
// console.log(folderName);
exports.linesInFiles = function(folderName){
var linesInFiles = folder(folderName);
console.log(linesInFiles);
return linesInFiles;

};

exports.linesInFilesAsync = function(folderName,callback){
  var linesInFilesAsync = folder(folderName, function(err, files){ });
callback(null,linesInFilesAsync);
return linesInFilesAsync;
};
