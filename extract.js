"use strict";

const path = require("path");
const fs = require("fs");

(async () => {
  const infile = process.argv[2];
  const json = require("./out/s4l-yaasita.json");
  const target = 2019;
  let newjson = [];
  if (infile === undefined) {
    usage();
    throw new Error("定義されてないよ");
  }
  for (let i = 0; i < json.length; i++) {
    const date = new Date(json[i].time * 1000);
    if (date.getFullYear() === target) {
      newjson.push(json[i]);
    }
  }
  fs.writeFileSync(`out/${target}.json`, JSON.stringify(newjson, null, 2));
})();

function usage() {
  const nodecmd = path.basename(process.argv[0]);
  console.log(`usage: ${nodecmd} in/s4l-yaasita.db`);
}
