// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
import { GoogleLoginProvider } from 'angular4-social-login';
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
};

export const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('580834220925-ceofkqhqhep1lckuanoagkpg8ngjfkhn.apps.googleusercontent.com')
  }
]);


