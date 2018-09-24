"use strict";

const fs = require("fs");

(async () => {
  console.log("start");
  const legacy  = loadjson("./out/main2.json");
  const current = loadjson("./out/skype.json");
  let messages = legacy.concat(current);
  const target_year = process.argv[2];
  if (!target_year){
    throw new Error("arg is nothing");
  }
  messages = extract(messages, target_year);
  fs.writeFileSync(`out/${target_year}.json`, JSON.stringify(messages, null, 4));
})();

function loadjson(filepath) {
  let m = [];
  if (fs.existsSync(filepath)){
    m = require(filepath);
  }
  return m;
}
function extract(messages, year){
  let newarray = [];
  messages.forEach((element) => {
    if (get_year(element.time) === Number(year)){
      newarray.push(element);
    }
  });
  newarray.sort((a,b) => {
    return a.time - b.time;
  });
  return newarray;
}
function get_year(unixtime){
  const date = new Date(unixtime * 1000);
  return date.getFullYear();
}
