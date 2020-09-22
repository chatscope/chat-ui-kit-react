// Warning this script is not used for now
const Terser = require("terser");
const fs = require("fs");
const path = require("path");

function getAllFiles(dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles.filter((path) => path.match(/\.js$/));
}

function minifyFiles(filePaths) {
  filePaths.forEach((filePath) => {
    fs.writeFileSync(
      filePath,
      Terser.minify(fs.readFileSync(filePath, "utf8")).code
    );
  });
}

const files = getAllFiles("./es/");
minifyFiles(files);
