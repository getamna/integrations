"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const axios_1=__importDefault(require("axios"));class TeamInterface{constructor(e,t){this.opts=t,this.validateServiceType(e),this.authDetails=t.authorizers[e],this.httpClient=axios_1.default.create({timeout:1e3,headers:{Authorization:"Bearer "+this.authDetails.apiToken}})}validateServiceType(e){if(!this.opts.authorizers[e])throw new Error(`An Authorizer for that Service:${e} does not exist!!`)}}exports.TeamInterface=TeamInterface;