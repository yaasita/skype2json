"use strict";

const fs = require("fs");
const common = require("./common.js");

(async () => {
  const messages = await common.get_messages(
    "in/main.db",
    `
    select from_dispname as name,timestamp as time,body_xml as text,  convo_id as chat from Messages order by timestamp;
    `
  );
  fs.writeFileSync("out/main.json", JSON.stringify(messages, null, 4));
})();
