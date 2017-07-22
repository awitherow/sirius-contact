import request from "superagent";
import config from "../config.js";
const Buffer = require("buffer/").Buffer;
const { mailchimp } = config;
const { instance, list, key } = mailchimp;

export function subscribe(email) {
  return new Promise((resolve, reject) => {
    if (!email) {
      resolve(false, "no email entered");
    }

    request
      .post(`https://${instance}.api.mailchimp.com/3.0/lists/${list}/members/`)
      .set("Content-Type", "application/json;charset=utf-8")
      .set(
        "Authorization",
        `Basic ${new Buffer(`any:${key}`)}`.toString("base64")
      )
      .send({
        email_address: email,
        status: "subscribed"
      })
      .end((err, response) => {
        if (
          response.status < 300 ||
          (response.status === 400 && response.body.title === "Member Exists")
        ) {
          resolve(true, null);
        } else {
          reject(false, err);
        }
      });
  });
}
