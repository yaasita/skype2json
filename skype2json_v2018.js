"use strict";

const fs = require("fs");
const path = require('path');
const common = require("./lib/2018-common.js");

(async () => {
  const infile = process.argv[2];
  const outfile = "out/" + path.basename(infile).replace(/\.db$/, "") + ".json";
  const messages = await common.get_messages(
    infile,
    `
    select nsp_pk, nsp_data  from messagesv12 limit 100;
    `
  );
  fs.writeFileSync(outfile, JSON.stringify(messages, null, 4));
})();
