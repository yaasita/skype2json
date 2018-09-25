"use strict";

const fs = require("fs");
const common = require("./common.js");

(async () => {
  const messages = await common.get_messages(
    "in/skype.db",
    `
    select (m.id/1000) as time,(coalesce(c.display_name,m.author)) as name,m.content as text, convdbid as chat
    from messages as m left join contacts as c on m.author = c.mri order by id;
    `
  );
  fs.writeFileSync("out/skype.json", JSON.stringify(messages, null, 4));
})();
