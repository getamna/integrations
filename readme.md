### Integrations

Abstracts way multiple APIs to give you a shared library to call against different services such as Mail, Calendar, Work Tracking.

We designed shared interfaces for them . [Example interface]("sdsd")

- [x] All communication handled directly from library
- [x] Typescript Bindings
- [x] Support for Mail, Calendar, Task and Work Tracking
- [x] Used in [Amna](getamna.com)

### 💸 Monetized with Libmon 💸

Similar to services such as Nylas or Kloudless.

You may demo the library for free, and purchase a **one-time** access token for complete library usage. Read limits and [pricing](https://libmon.com)

#### Demo Limits

Token limits for SDDS

- Max 10 function calls in Calendar, Mail API
- Only 1 Task Service (Google, Todoist, Microsoft)

### Usage

```javascript
const { Integrations } = require("Integrations")

// after successful oauth, pass in a set of access tokens.
const opts = {
  authorizers: {
    Microsoft: "<user access token>",
    Google: "<user access token>",
  },
}

const integrations = new Integrations(opts, "DEMO_TOKEN")
const outlook = integrations.getMailService(MailServiceType.Microsoft)
const gmail = integrations.getMailService(MailServiceType.Google)

const draftMessage = {
  to: ["hi@libmon.com"],
  cc: [],
  bcc: [],
  subject: "Hello!",
  body: "Hey from our awesome library!!",
}

// send an email
const gmailResp = gmail.send(draftMessage)
const outlookResp = outlook.send(draftMessage)
```

### Services

Supported Services:
| Service | Providers |
| ----------- | ----------- |
| Mail | Outlook, Google |
| Calendar | Outlook, Google |
| Tasks | Microsoft, Todoist, Google |
| Work | Azure DevOps, Jira, Asana, Github |

### Authentication

This library does not provide UI for authentication to an OAuth Provider. If you purchased a token, you can purchase our OAuth Helper for Javascript that works with most 3rd party providers. [See here](#)

You can obtainin tokens from Google and Microsoft for [testing](#)

## Interface and API Definitions

All interface definitions can be found in our [Public Github Repo](https://github.com)

Not all methods have been implemented. There are also slight variations between two APIs.

[Open an Issue](https://github.com/getamna/integrations)

### Support

Library supporters have the ability to open support tickets. Because we are strapped on resources, we will prioritize token purchasers first.

[Open an Issue](https://github.com/getamna/integrations)

To test various OAuth flows, you can get personal tokens from various providers. Here are a few ways.

#### Microsoft

1. Login to [Microsoft Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer)

2. Make a request and click on the Access Token Tab

3. To edit and create scopes for your token, look at the **Modify Permissions** tab

#### Google

1. Visit the [Google OAuth Playground](https://developers.google.com/oauthplayground/)

2. Make sure to exchange your authorize token and get an access token.

You can pass these tokens into the authorizer options of the [Integrations Library[].
