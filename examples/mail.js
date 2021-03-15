const {
    Integrations,
    MailServiceType
} = require("..")

require("dotenv").config()

// after successful oauth, pass in a set of access tokens.

// see token instructions in Wiki
const opts = {
    authorizers: {
        Microsoft: {
            apiToken: process.env.MICROSOFT || "<user access token>",
        },
        Google: {
            apiToken: "<user access token>",
        },
        Todoist: {
            apiToken: "<user access token>",
        },
    },
}

// limbon tokens can be purchased
const integrations = new Integrations(opts, "LIBMON_TOKEN_HERE")

const outlook = integrations.getMailService(MailServiceType.Microsoft)
const gmail = integrations.getMailService(MailServiceType.Google)

const draftMessage = {
    to: ["integrations@getamna.com"],
    cc: [],
    bcc: [],
    subject: "Whoa, this library works!",
    body: "Hey, we just sent you an email from our awesome integrations library!",
}

sendMessage()

async function sendMessage() {
    try {
        // send an email
        const gmailResp = await gmail.send(draftMessage)
        const outlookResp = await outlook.send(draftMessage)
    } catch (ex) {
        console.log(ex.response.status)
    }
}