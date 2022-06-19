if(require("express")().get("env") != 'production') {
  require("dotenv/config");
}

const environments = {},
 e = environments;

e.development = {
  "app_name": 'Contact Me',
  "smtp_secret": process.env.MAIL_SECRET,
  "smtp_user": process.env.SMTP_USER,
  "smtp_from": process.env.FROM_EMAIL,
  "smtp_host": process.env.SMTP_HOST,
  "port": process.env.PORT || 3002,
  "smtp_reply_to": process.env.SMTP_REPLY_TO
 },
 e.production = {
  "smtp_secret": process.env.MAIL_SECRET,
  "smtp_user": process.env.SMTP_USER,
  "smtp_from": process.env.FROM_EMAIL,
  "smtp_host": process.env.SMTP_HOST,
  "port": process.env.PORT || 3002,
  "smtp_reply_to": process.env.SMTP_REPLY_TO
 }

module.exports = e[process.env.NODE_ENV];