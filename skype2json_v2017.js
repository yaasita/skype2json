"use strict";

const fs = require("fs");
const path = require("path");
const common = require("./lib/2016-2017-common.js");

(async () => {
  const infile = process.argv[2];
  const outfile = "out/" + path.basename(infile).replace(/\.db$/, "") + ".json";
  const messages = await common.get_messages(
    infile,
    `
    select (m.id/1000) as time,(coalesce(c.display_name,m.author)) as name,m.content as text, convdbid as chat
    from messages as m left join contacts as c on m.author = c.mri order by id;
    `
  );
  fs.writeFileSync(outfile, JSON.stringify(messages, null, 4));
})();
