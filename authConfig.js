// Config object to be passed to Msal on creation.
// For a full list of msal.js configuration parameters, 
// visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
const msalConfig = {
    auth: {
        clientId: "e18c04b1-4868-4e93-93d1-8d71f17ab99b",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "https://www.mtapp.kylemar.dev/",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
const loginRequest = {
    scopes: ["openid", "profile", "User.Read"]
};

// Add here scopes for access token to be used at MS Graph API endpoints.
const tokenRequest = {
    scopes: ["User.Read", "Mail.Read"],
    forceRefresh: false // set this to "true" if you would like to skip a cached token and go to the server
};
