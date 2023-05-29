# Lab 8 - Starter
1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

- Within a Github action that runs whenever code is pushed 
- Manually run them locally before pushing code
- Run them all after all development is completed

The automated tests should be within a github action that runs whenever code is pushed because this is how the tests become "automated": it automatically runs when changes are made and pushed to github. Therefore, developers don't need to manually run the tests and can get test results throughout the process and fix unexpected behaviors during development.

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No. Unit test fits more here.

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No. Because the message feature seems like a function that needs to interact with other components, like the user needs to send the message, and the other user needs to receive the message at the same time, and also it might be related with other functions like history search, etc.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes. Because this max message length feature seems like an individual feature that only involves checking text inside the message box. It's not related with other features so unit test should be good.