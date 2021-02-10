# `clasp` CLI
`claps` helps you write Apps Scripts on your PC, without leaving your IDE, while using source control for collaboration.

## OVERVIEW
You can pull, push, run, and deploy your functions from the command line.

`clasp push`

`clasp run print -p '["test"]'`

Apps Script files are locally stored, and easy to add to source control, obviously ;)

## WORKFLOW
* Git pull
* Save changes
* Clasp push
* Clasp run
* Clasp deploy
* Git Push

## REQUIREMENT
These tools work when the Apps Script project is associated with a new GCP project. The GCP project must enable APIs which `clasp` requires. The GCP project also provides credentials to authenticate the `clasp` requests coming from the CLI.

The Apps Script project cannot use the GCP project to which it is associated by default. Administrator access to the Google Cloud Console is needed for a GCP project to be created and associated with the Apps Script.

 ## THE PROCESS
 Here are the setup steps from the `claps` GitHub repo.
 https://github.com/google/clasp/blob/master/docs/run.md#setup-instructions

 ## KEEPING SECRETS
 Setting up the Apps Script API requires a *global* login step. The credential `.json` file downloaded from GCP is used, `clasp login --cred cred.json`. **Do not check this file into source control**. Instead, delete the file which can be downloaded again when needed.

 Use Apps Script's `PropertiesService` to store confidential information. Primarily for example, the ID for the Spreadsheet used in this script is stored as `scriptProperties` and not in the code. Use the setter functions in Properties.js to add and update secrets, e.g.,  credentials and tokens for accessing external APIs.

 ## HELPFUL INFORMATION
 Included in this link is helpful information about adding scopes to the manifest.
 https://github.com/google/clasp/issues/506

Here is the example manifest from the link above.
```
 {
  "timeZone": "America/New_York",
  "executionApi": {
    "access": "ANYONE"
  },
  "oauthScopes": [
    "https://www.googleapis.com/auth/script.deployments",
    "https://www.googleapis.com/auth/script.projects",
    "https://www.googleapis.com/auth/script.webapp.deploy",
    "https://www.googleapis.com/auth/drive.metadata.readonly",
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/service.management",
    "https://www.googleapis.com/auth/logging.read",
    "https://www.googleapis.com/auth/cloud-platform"
  ],
  "exceptionLogging": "STACKDRIVER"
}
```