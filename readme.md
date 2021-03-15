### Integrations

Abstracts multiple APIs to give you a shared library to call against different services such as Mail, Calendar, Work Tracking.

You can [purchase](https://gumco.com/integrations-library) a full-token to use the library with no limits.

We designed shared interfaces for them. [Example](https://github.com/getamna/integrations/blob/main/services/mail/index.d.ts)

- [x] All communication handled directly from library
- [x] Typescript Bindings
- [x] Support for Mail, Calendar, Task and Work Tracking
- [x] Used in [Amna](https://getamna.com)

### Usage

```typescript
import { Integrations, IntegrationOptions, MailServiceType } from "integrations"

// after successful oauth, pass in a set of access tokens.
const opts: IntegrationOptions = {
  authorizers: {
    Microsoft: "<user access token>",
    Google: "<user access token>",
  },
}

const integrations = new Integrations(opts, "DEMO_TOKEN")

const outlook = integrations.getMailService(MailServiceType.Microsoft)
const gmail = integrations.getMailService(MailServiceType.Google)

const draftMessage = {
  to: ["integrations@getamna.com"],
  cc: [],
  bcc: [],
  subject: "Whoa, this library works!",
  body: "Hey, we just sent you and email from our awesome library!",
}

// send an email
const gmailResp = gmail.send(draftMessage)
const outlookResp = outlook.send(draftMessage)
```

### 💸 Tokenized with Libmon 💸

You may demo the library for free, and purchase a **one-time** access token for complete library usage. Read [pricing](https://gumco.com/integrations-library)

Alternate to services such as Nylas or Kloudless.

#### Free Limits

- Max 10 function calls in Calendar and Mail APIs
- Only 1 Task Service (Google, Todoist, Microsoft) at a time

### Authentication

This library does not provide UI for authentication to an OAuth Provider. If you purchased a token, you can purchase our OAuth Helper for Javascript that works with most 3rd party providers. [See here](https://github.com/getamna/integrations)

You can obtainin tokens from Google and Microsoft for [testing](https://github.com/getamna/integrations/wiki/Personal-Auth-Tokens)

## Interface and API Definitions

All interface definitions can be found in our [Public Github Repo](https://github.com/getamna/integrations)

Not all methods have been implemented. There may also be slight variations between two APIs. Please read the [wiki](https://github.com/getamna/integrations/wiki).

[Open an Issue](https://github.com/getamna/integrations)

### Support

Library supporters have the ability to open support tickets. Because we are strapped on resources, we will prioritize token purchasers first.

[Open an Issue](https://github.com/getamna/integrations)
