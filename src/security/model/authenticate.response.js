export default class AuthenticateResponse {
  constructor(id, firstName, lastName, username, password, token) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.token = token;
  }
}
