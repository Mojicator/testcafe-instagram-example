import { Selector, t } from "testcafe";

export default class Login {
    constructor() {
        this.inputUsername = Selector('input').withAttribute('name', 'username');
        this.inputPassword = Selector('input').withAttribute('name', 'password');
        this.submitButton = Selector('button').withText('Iniciar sesión');
        this.usernameLabel = Selector('a').withText('dummyaccount411');
    }
}