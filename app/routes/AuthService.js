import React from 'react';

export default async function loginFunction(UserEmail, UserPassword) {
    const ValidUserToken = "asdf";
    const EmptyUserToken = null;

    try {
        const response = await fetch('http://172.16.137.126:8080/app_project/login.php', 
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: UserEmail,
                password: UserPassword
            })
        })
        const responseJson = await response.json();
        console.log(responseJson);

        if(responseJson === 'Data Matched')
        {
            //Then open Profile activity and send user email to profile activity.
            console.log("Logged in");
            console.log(ValidUserToken);
            return ValidUserToken;
        }
        else {
            console.log("Incorrect login");
            console.log(EmptyUserToken);
            return EmptyUserToken;
        }
    } catch (error) {
        console.log(error);
    } finally {

    }
};