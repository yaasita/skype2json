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
        row.date = date_to_string(row.time);
        row.chat = String(row.chat);
        messages.push(row);
      },
      (err) => {
        if (err) {
          reject(err);
        }
        resolv(messages);
      }
    );
  });
};
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
