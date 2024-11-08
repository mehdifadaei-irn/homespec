export interface AuthenticateTypes {
  parameters: {
    data: {
      authentication_type: string;
      access_token: string;
      token_type: string;
      expires_in: string;
    };
  };
}
