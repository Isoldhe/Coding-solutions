// social login
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angular-6-social-login";


// Configs for social login
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("487556380216-vsv5i8od9ubeecdsb4tqun2t5g5i8tl1.apps.googleusercontent.com")
        }
      ]);
  return config;
}