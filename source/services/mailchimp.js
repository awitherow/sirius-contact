import request from "superagent";
import Buffer from "buffer";
import { mailchimp } from "../config.js";
const { instance, list, key } = mailchimp;

export function subscribe(email) {
  return new Promise(function(resolve, reject) {
    request
      .post(
        "https://" +
          instance +
          ".api.mailchimp.com/3.0/lists/" +
          list +
          "/members/"
      )
      .set("Content-Type", "application/json;charset=utf-8")
      .set(
        "Authorization",
        "Basic " + new Buffer("any:" + keymailchimpApiKey).toString("base64")
      )
      .send({
        email_address: email,
        status: "subscribed"
      })
      .end(function(err, response) {
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
