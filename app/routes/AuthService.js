import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function checkLoginData(responseJSON) {
    if (
        typeof responseJSON.id === 'string' &&
        typeof responseJSON.first_name === 'string' &&
        typeof responseJSON.last_name === 'string' &&
        typeof responseJSON.email === 'string' &&
        typeof responseJSON.accessToken === 'string'
    ) 
    {
        console.log("Correct data");
        return true;
    }
    else {
        console.log("Incorrect data");
        return false;
    }
};

async function SignIn(UserEmail, UserPassword) {
    try {
        const response = await fetch('http://172.16.162.176:4050/api/users/login', 
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
        const responseJSON = await response.json();
        console.log(responseJSON);
        const validData = await checkLoginData(responseJSON);

        if(validData)
        {
            console.log(validData);
            const finalData = responseJSON;
            return finalData;
        }
        else {
            console.log(validData);
            return null;
        }
    } catch (error) {
        console.log(error);
    }
};

async function SignUp(FirstName, LastName, UserEmail, UserPassword) {
    try {
        const response = await fetch('http://172.16.162.176:4050/api/users/register', 
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fname: FirstName,
                lname: LastName,
                email: UserEmail,
                password: UserPassword
            })
        })
        const responseData = response;
        console.log(responseJSON);

        if(responseData)
        {
            console.log(responseData);
            return responseData;
        }
        else {
            console.log(responseData);
            return null;
        }
    } catch (error) {
        console.log(error);
    }
};

export { SignIn, SignUp};