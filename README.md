# Auth0 Organizations Invitation Sample React Application

This sample demonstrates [new member invitations for Auth0 Organizations](https://auth0.com/docs/manage-users/organizations/configure-organizations/invite-members). After the user accepts the invitation, the application will redirect the user to an external page.

This sample is based on the [Auth0 React sample](https://github.com/auth0-samples/auth0-react-samples/tree/master/Sample-01).

## Project setup

Use `npm` to install the project dependencies:

```bash
npm install
```

## Configuration

### Register an application in Auth0

* Register a new Single Page Application in Auth0 and set it to use Organizations (Organizations tab in app settings).

* Set the Application Login URI, Allowed Callback URL, Allowed Logout URL and Allowed Web Origin to the root URL of the application. You’ll need to host the application somewhere other than http://localhost because the Application Login URI will reject a non-HTTPS url.

### Configure credentials

The project needs to be configured with your Auth0 domain and client ID in order for the authentication flow to work. 

To do this, first copy `src/auth_config.json.example` into a new file in the same folder called `src/auth_config.json`, and replace the values with your own Auth0 application credentials, and optionally the base URLs of your application and API:

```json
{
  "domain": "{YOUR AUTH0 DOMAIN}",
  "clientId": "{YOUR AUTH0 CLIENT ID}",
  "audience": "{YOUR AUTH0 API_IDENTIFIER}",
  "appOrigin": "{OPTIONAL: THE BASE URL OF YOUR APPLICATION (default: http://localhost:3000)}",
  "apiOrigin": "{OPTIONAL: THE BASE URL OF YOUR API (default: http://localhost:3001)}"
}
```

**Note**: Do not specify a value for `audience` here if you do not wish to use the API part of the sample. `audience` isn't necessary for the Organizations invitation to work.

### Configure redirect

Configure line 38 in src/App.js with the default login URL of an application which the app will redirect to after the user accepts the invitation. This will ensure the user is logged in when they are redirected to the second application. Currently, it is configured to redirect to https://jwt.io

## Deployment

This sample must be deployed to an HTTPS environment such as Heroku because Auth0 will not accept an HTTP URL as an Application Login URI. The Application Login URI is used to generate the invitation link which is emailed to the new member.

### Compiles and minifies for production

```bash
npm run build
```

### Docker build

To build and run the Docker image, run `exec.sh`, or `exec.ps1` on Windows.

### Run your tests

```bash
npm run test
```