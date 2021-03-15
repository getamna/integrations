"use strict";var __awaiter=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(a,r){function n(t){try{d(s.next(t))}catch(t){r(t)}}function o(t){try{d(s.throw(t))}catch(t){r(t)}}function d(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(n,o)}d((s=s.apply(t,e||[])).next())}))};Object.defineProperty(exports,"__esModule",{value:!0});const __1=require("../../"),__2=require("..");class ADO extends __2.TeamInterface{constructor(t,e){super(t,e),this.opts=e,this.httpClient.defaults.headers={Authorization:"Basic "+this.opts.authorizers[__1.TeamServiceType.ADO].apiToken},this.httpClient.defaults.baseURL="https://dev.azure.com/"}getWorkById(t,e,i){return __awaiter(this,void 0,void 0,(function*(){const s=(yield this.httpClient.get(`${e}/${i}/_apis/wit/workitems/${t}?api-version=6.0`)).data,{fields:a}=s;return{id:t,title:a.title,body:a.description,assignees:[{id:a.assignedTo.id,name:a.assignedTo.displayName}]}}))}searchAllIssues(t,e,i){return __awaiter(this,void 0,void 0,(function*(){const s={searchText:e,$top:25},a=(yield this.httpClient({method:"post",url:`${t}/${i}/_apis/search/workitemsearchresults?api-version=6.0-preview.1`,baseURL:"https://almsearch.dev.azure.com/",data:s})).data,r=[];return a.results.forEach(t=>{const{project:e,fields:i,hits:s}=t;r.push({id:e.id,title:i.title,body:s[0].highlights[0],assignees:[{name:i.assignedto}]})}),r}))}createIssue(t,e,i){return __awaiter(this,void 0,void 0,(function*(){const{title:s}=t,a=[{op:"add",path:"/fields/System.Title",from:null,value:s}],r=yield this.httpClient.post(`${e}/${i}/_apis/wit/workitems/$Task?api-version=6.0`,a,{headers:{"Content-Type":"application/json-patch+json"}});if(200==r.status){return r.data.id.toString()}return""}))}deleteIssue(t,e,i){return __awaiter(this,void 0,void 0,(function*(){return 200==(yield this.httpClient.delete(`${e}/${i}/_apis/wit/workitems/${t}?api-version=6.0`)).status}))}}exports.ADO=ADO;