"use strict";var __awaiter=this&&this.__awaiter||function(e,i,s,t){return new(s||(s=Promise))((function(a,o){function u(e){try{n(t.next(e))}catch(e){o(e)}}function r(e){try{n(t.throw(e))}catch(e){o(e)}}function n(e){var i;e.done?a(e.value):(i=e.value,i instanceof s?i:new s((function(e){e(i)}))).then(u,r)}n((t=t.apply(e,i||[])).next())}))};Object.defineProperty(exports,"__esModule",{value:!0});const chai_1=require("chai"),common_1=require("./common");require("mocha");const services_1=require("../services");let GithubTeamIssue=common_1.Integrations.getTeamService(services_1.TeamServiceType.Github),AsanaTeamIssue=common_1.Integrations.getTeamService(services_1.TeamServiceType.Asana),JiraTeamIssue=common_1.Integrations.getTeamService(services_1.TeamServiceType.Jira),ADOTeamIssue=common_1.Integrations.getTeamService(services_1.TeamServiceType.ADO),githubIssueId="",asanaIssueId="",jiraIssueId="",adoIssueId="",githubQeury="",asanaQuery="",jiraQuery="",azureQuery="",githubTitle="";describe("TeamIssue Service",()=>{it("create github issue in the repo",()=>__awaiter(void 0,void 0,void 0,(function*(){const e={title:"testing now in VS",body:"is working?",assignees:["hiromski"]};githubTitle=e.title,githubIssueId=yield GithubTeamIssue.createIssue(e,"hiromski","testing")}))),it("get github issue by id, owner, and repo",()=>__awaiter(void 0,void 0,void 0,(function*(){let e=yield GithubTeamIssue.getWorkById(githubIssueId,"hiromski","testing");chai_1.expect(e.title).to.equals(githubTitle)}))),it("search all github issue",()=>__awaiter(void 0,void 0,void 0,(function*(){githubQeury=githubTitle;let e=yield GithubTeamIssue.searchAllIssues("hiromski",githubQeury);console.log(e)}))),it("create asana issue ",()=>__awaiter(void 0,void 0,void 0,(function*(){const e={title:"testing now in VS",body:"is wowrking?",assignees:["hiromi3310@gmail.com"]};asanaQuery=e.title,asanaIssueId=yield AsanaTeamIssue.createIssue(e,"1199228665559645"),console.log(asanaIssueId)}))).timeout(5e3),it("get asana issue by id",()=>__awaiter(void 0,void 0,void 0,(function*(){let e=yield AsanaTeamIssue.getWorkById(asanaIssueId);console.log(e)}))),it("search asana issue by query",()=>__awaiter(void 0,void 0,void 0,(function*(){let e=yield AsanaTeamIssue.searchAllIssues("1199228665559645",asanaQuery);console.log(e)}))),it("delete asana issue by id ",()=>__awaiter(void 0,void 0,void 0,(function*(){(yield AsanaTeamIssue.deleteIssue(asanaIssueId))?console.log("deleted"):console.log("failed")}))),it("create jira issue",()=>__awaiter(void 0,void 0,void 0,(function*(){const e={title:"testing from vs",body:"testing from vs",assignees:[]};jiraQuery=e.title,jiraIssueId=yield JiraTeamIssue.createIssue(e,"getamna","10000")}))).timeout(5e3),it("get jira issue by id",()=>__awaiter(void 0,void 0,void 0,(function*(){let e=yield JiraTeamIssue.getWorkById("10001","getamna");console.log(e)}))).timeout(5e3),it("delete jira issue by id",()=>__awaiter(void 0,void 0,void 0,(function*(){const e=jiraIssueId;let i=yield JiraTeamIssue.deleteIssue(e,"getamna");console.log(i)}))),it("create azure issue",()=>__awaiter(void 0,void 0,void 0,(function*(){const e={title:"testing from VS",body:"",assignees:[]};azureQuery=e.title,adoIssueId=yield ADOTeamIssue.createIssue(e,"hypergo","demo-proj")}))).timeout(5e3),it("get azure issue by id",()=>__awaiter(void 0,void 0,void 0,(function*(){const e=adoIssueId;let i=yield ADOTeamIssue.getWorkById(e,"hypergo","demo-proj");console.log(i)}))),it("search azure issue by query",()=>__awaiter(void 0,void 0,void 0,(function*(){const e=azureQuery;yield ADOTeamIssue.searchAllIssues("hypergo",e,"demo-proj")}))),it("delete azure issue by id",()=>__awaiter(void 0,void 0,void 0,(function*(){const e=adoIssueId;let i=yield ADOTeamIssue.deleteIssue(e,"hypergo","demo-proj");console.log(i)})))});