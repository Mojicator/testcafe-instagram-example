import Login from "../page_model/login_model";

const page = new Login();

const username = 'fofawam582@smlmail.com';
const password = 'GenericPassword1';
const username_expected = 'dummyaccount411';

fixture `Instagram login test`
    .page `https://www.instagram.com/`;

test('user input', async t => {
    await t
        .typeText(page.inputUsername, username)
        .typeText(page.inputPassword, password)
        .click(page.submitButton)
        .wait(10000);
    
    await t.expect(page.usernameLabel.innerText).contains(username_expected);
});