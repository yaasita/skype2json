"use strict";

const sqlite3 = require("sqlite3");

exports.get_messages = (filename, sql) => {
  const db = new sqlite3.Database(filename);
  let messages = [];
  return new Promise((resolv, reject) => {
    db.each(
      sql,
      (err, row) => {
        if (err) {
          reject(err);
        }
        let m = {};
        const nsp_data = to_json(row.nsp_data);
        m.name = extract_name(nsp_data.from);
        m.time = Math.round(nsp_data.id / 1000);
        m.text = nsp_data.content;
        m.chat = nsp_data.conversationid;
        m.date = date_to_string(Math.round(nsp_data.id / 1000));
        messages.push(m);
      },
      (err, n) => {
        if (err) {
          reject(err);
        }
        messages = messages.sort((a, b) => {
          return a.time - b.time;
        });
        resolv(messages);
      }
    );
  });
};
function extract_name(url) {
  const result = url.match(/\d+\:(\w+)/);
  if (result) {
    return result[1];
  } else {
    throw "Error";
  }
}
function to_json(nsp_data) {
  const j = JSON.parse(nsp_data);
  return j._serverMessages[0];
}
function date_to_string(unixtime) {
  const date = new Date(unixtime * 1000);
  const year = date.getFullYear();
  const mon = paddding_zero(date.getMonth() + 1);
  const day = paddding_zero(date.getDate());
  const hour = paddding_zero(date.getHours());
  const min = paddding_zero(date.getMinutes());
  const sec = paddding_zero(date.getSeconds());
  return `${year}/${mon}/${day} ${hour}:${min}:${sec}`;
}
function paddding_zero(str) {
  return ("0" + str).slice(-2);
}
