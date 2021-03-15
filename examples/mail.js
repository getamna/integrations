const {
    Connector
} = require("..")

const dayjs = require("dayjs")
require("dotenv").config()

import {
    MailServiceType
} from "../services"
import {
    Integrations
} from "./common"

const opts = {
    authorizers: {
        Microsoft: process.env.MICROSOFT || "<user access token>",
        Google: "<user access token>",
        Todoist: "<user access token>",
        Github: "<user access token>",
    },
}
const Integrations = new Connector(opts, "LIBMON TOKEN HERE")

const outlookCal = Integrations.getCalendarService("Microsoft")
const gCal = Integrations.getCalendarService("Google")

const Gmail = Integrations.getCalendarService(MailServiceType.Google)

const MicrosoftTasks = Integrations.getTaskService(MailServiceType.Microsoft)

const outlook = outlookCal.getEventFromRange(new Date(), endDate(), true)

//get the em
const startDate

//perform cross-platform search