"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var MailServiceType,CalendarServiceType,TaskServiceType,TeamServiceType,mail_1=require("./mail/mail");exports.MailService=mail_1.MailService,function(e){e.Google="Google",e.Microsoft="Microsoft"}(MailServiceType=exports.MailServiceType||(exports.MailServiceType={})),function(e){e.Microsoft="Microsoft",e.Google="Google"}(CalendarServiceType=exports.CalendarServiceType||(exports.CalendarServiceType={})),function(e){e.Microsoft="Microsoft",e.Todoist="Todoist",e.Google="Google"}(TaskServiceType=exports.TaskServiceType||(exports.TaskServiceType={})),function(e){e.ADO="ADO",e.Jira="Jira",e.Asana="Asana",e.Github="Github"}(TeamServiceType=exports.TeamServiceType||(exports.TeamServiceType={}));class BaseService{constructor(e){this.opts=e}validateServiceType(e){if(!this.opts.authorizers[e])throw new Error(`An Authorizer for that Service:${e} does not exist!!`)}}exports.BaseService=BaseService;