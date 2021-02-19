# `clasp` CLI

`claps` helps you write Apps Scripts on your PC, without leaving your IDE, while using source control for collaboration.

## OVERVIEW

You can pull, push, run, and deploy your functions from the command line.

`clasp push`

`clasp run print -p '["test"]'`

Apps Script files are locally stored, and easy to add to source control, obviously ;)

## WORKFLOW

- Git pull
- File save
- Clasp push
- Clasp run
- Git commit/push

## REQUIREMENT

These tools work when the Apps Script project is associated with a unique GCP project. The GCP project helps enable APIs which `clasp` can use. The GCP project also provides credentials to authenticate the `clasp` requests coming from the CLI.

The Apps Script project cannot use the GCP project to which it is associated by default. Administrator access to the Google Cloud Console is needed for a GCP project to be created and associated with the Apps Script.

## THE PROCESS

Here are the setup steps from the `claps` GitHub repo.
https://github.com/google/clasp/blob/master/docs/run.md#setup-instructions

## LOGIN TWICE

If you `clasp logout`, you will need to login twice, both globally and locally.

### CLASP GLOBAL LOGIN

`clasp login` - Authenticate globally in the browser

### CLASP LOCAL LOGIN

`clasp login --creds creds.json` - Authenticate locally with the `.json` credentials file downloaded from GCP, and then login in the browser.

## KEEPING SECRETS

Setting up the Apps Script API requires a _global_ login step. The credential `.json` file downloaded from GCP is used, `clasp login --cred cred.json`. **Do not check this file into source control**. Instead, delete the file which can be downloaded again when needed.

Use Apps Script's `PropertiesService` to store confidential information. Primarily for example, the ID for the Spreadsheet used in this script is stored as `scriptProperties` and not in the code. Use the setter functions in Properties.js to add and update secrets, e.g., credentials and tokens for accessing external APIs.

```
clasp run setProperty -p '["key","value"]'
```

## CONFIG FILES

Use these configuration files to connect Apps Script to GCP.

### `.clasp.json`

Include the GCP Project Id

### `.clasprc.json`

Ignore this file that is created/deleted when you login/logout locally with `clasp login`

### `creds.json`

Delete or gitignore this credentials file downloaded from GCP which is used to login globally with `clasp login --creds creds.json`. Do Not commit this file.

### `appsscript.json`

Include access, scopes, and the runtimeVersion

## GOOGLE CLOUD PLATFORM

By default, Apps Script projects share a Google Cloud Platform Project to manage authorizations, advanced services, and other details. Humans do not have access to this project.

#### **USE THE GCP LOGGER**

Consider changing from the default GCP Project found in your Apps Script Settings. Instead, enter a different GCP `project-id` that you can administrate in cloud.console.google.com. You can now access the excellent [GCP Logger](console.cloud.google.com/logs).

### **SERVICES VS GCP SCOPES**

Turn on Services to authorize features of the Apps Script SDK. To use `AdminDirectory.Groups.get()` the Admin SDK API Service must be enabled for the Apps Script project.

Use GCP Scopes (e.g., GCP Project APIs) to authorize REST style API request.

### SERVICES

See the list of available services and enable or disable them.

```
clasp apis list
clasp apis enable <api>
clasp apis disable <api>
```

### SCOPES

Google's [Cloud Console](console.cloud.google.com) offers improved visibility and control of the APIs. The GCP Project you link to you Apps Script comes with the full feature set of [Google's API](https://cloud.google.com/apis).

If an API has been enabled in GCP, the manafest `appsscript.json` must include the needed `oauthScopes`.

```
  "oauthScopes": [
    "https://www.googleapis.com/auth/admin.directory.group",
    "https://www.googleapis.com/auth/cloud-platform"
  ]
```

## LOGIN TWICE AGAIN

Re-Authenticate twice, after `"oauthScopes":` has been changed in the manafest `appsscript.json`

```
clasp push
clasp login
clasp login --creds <creds.json>
```
