"use strict";

const fs = require("fs");
const path = require('path');
const common = require("./lib/2016-2017-common.js");

(async () => {
  const infile = process.argv[2];
  const outfile = "out/" + path.basename(infile).replace(/\.db$/, "") + ".json";
  const messages = await common.get_messages(
    infile,
    `
    select from_dispname as name,timestamp as time,body_xml as text,  convo_id as chat from Messages order by timestamp;
    `
  );
  fs.writeFileSync(outfile, JSON.stringify(messages, null, 4));
})();
