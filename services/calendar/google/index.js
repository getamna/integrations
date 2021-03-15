"use strict";var __awaiter=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(r,a){function o(e){try{d(n.next(e))}catch(e){a(e)}}function s(e){try{d(n.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,s)}d((n=n.apply(e,t||[])).next())}))},__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(exports,"__esModule",{value:!0});const __1=require(".."),GoogleHelper=__importStar(require("../../../helpers/google"));class Google extends __1.CalendarInterface{constructor(e,t){super(e,t),this.opts=t,this.httpClient.defaults.baseURL="https://www.googleapis.com/calendar/v3/calendars/primary/"}getEventById(e){return __awaiter(this,void 0,void 0,(function*(){const t=(yield this.httpClient.get("events/"+e)).data,i=GoogleHelper.convertToEvent(t);if(i)return i;throw new Error(t.id+" failed to fetch single event")}))}getEventFromRange(e,t,i){return __awaiter(this,void 0,void 0,(function*(){let n=`events?timeMin=${e.toISOString()}&timeMax=${t.toISOString()}`;i&&(n+="&singleEvents=true");const r=(yield this.httpClient.get(n)).data.items;return GoogleHelper.convertToEventsArray(r)}))}createEvent(e){return __awaiter(this,void 0,void 0,(function*(){const{subject:t,body:i,startTime:n,timeZone:r,endTime:a,attendees:o,location:s}=e,d={summary:t,description:i,start:{dateTime:n,timeZone:r||""},end:{dateTime:a,timeZone:r||""},attendees:o.map(e=>({email:e.email,displayName:e.name})),location:s||""},l=yield this.httpClient.post("events",d);if(200==l.status){return l.data.id}return"failed"}))}updateEvent(e,t){return __awaiter(this,void 0,void 0,(function*(){const{subject:i,body:n,startTime:r,timeZone:a,endTime:o,attendees:s,location:d}=t,l={summary:i,description:n,start:{dateTime:r,timeZone:a},end:{dateTime:o,timeZone:a},attendees:s?s.map(e=>({email:e.email,displayName:e.name})):[],location:d},u=yield this.httpClient.patch("events/"+e,l);if(200==u.status){return u.data.id}return"failed"}))}deleteEventById(e){return __awaiter(this,void 0,void 0,(function*(){return 204==(yield this.httpClient.delete("events/"+e)).status}))}}exports.Google=Google;