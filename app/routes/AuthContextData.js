import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SignIn, SignUp } from './AuthService.js';

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
    const [userData, setUserData] = React.useState();
    const [loading, setLoading] = React.useState(true);

    async function loadStorageData() {
        try {
          //Try get the data from Async Storage
          const authDataSerialized = await AsyncStorage.getItem('user');
          console.log(authDataSerialized);
          if (authDataSerialized) {
            //If there is data, it's converted to an Object and the state is updated.
            const _authData = JSON.parse(authDataSerialized);
            setUserData(_authData);
          }
        } catch (error) {
        } finally {
          //loading finished
          setLoading(false);
        }
    };

    React.useEffect(() => {
        //Every time the App is opened, this provider is rendered
        //and calls the loadStorage function.

        loadStorageData();
    }, []);

    const signIn = async (email, password) => {
        try {
            const responseJSON = await SignIn(email, password);
            console.log("Initial response: " + JSON.stringify(responseJSON));

            if (responseJSON != null) {
                setUserData(responseJSON
                    // {
                    //     id: responseJSON.id,
                    //     first_name: responseJSON.first_name,
                    //     last_name: responseJSON.last_name,
                    //     email: responseJSON.email,
                    //     token: responseJSON.accessToken
                    // }
                );
                await AsyncStorage.setItem('user', JSON.stringify(responseJSON));
                console.log("UserData: " + JSON.stringify(userData));
            }
            else {
                console.log("Login Failed");
            }
        } catch (error) {
            Promise.reject(error);
        }
    };

    const signOut = async () => {
        try {
            //await AsyncStorage.clear();
            setUserData(undefined);
            await AsyncStorage.removeItem('user');
        } catch (error) {
            Promise.reject(error);
        }
    };

    const signUp = async (first_name, last_name, email, password) => {
        try {
            const responseRegister = await SignUp(first_name, last_name, email, password);
            console.log("Initial response: " + JSON.stringify(responseRegister));

            if (responseRegister != null) {
                console.log("Succesful Sign Up");
            }
            else {
                console.log("Sign Up Failed");
            }
        } catch (error) {
            Promise.reject(error);
        }
    };

    return (
        <AuthContext.Provider value={{ signIn, signOut, signUp, userData }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = React.useContext(AuthContext);

    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};

export {AuthContext, AuthProvider, useAuth}


// const AuthProvider = ({children}) => {
//     const [userToken, setUserToken] = React.useState(null);

//     async function signIn(email, password) {
//         try {
//             const responseJSON = await SignIn(email, password);

//             if (responseJSON != null) {
//                 await AsyncStorage.setItem('user', JSON.stringify({
//                     UserID: responseJSON.id,
//                     FirstName: responseJSON.first_name,
//                     LastName: responseJSON.last_name,
//                     Email: responseJSON.email,
//                     UserToken: responseJSON.accessToken
//                 }));

//                 console.log("Userdata: " + responseJSON.accessToken);
//                 const myUserToken = responseJSON.accessToken;
//                 setUserToken(myUserToken);
//                 console.log("myUserToken: " + myUserToken);
//                 console.log("UserToken: " + userToken);
//             }
//             else {
//                 await AsyncStorage.setItem('user', JSON.stringify({
//                     UserID: 'empty',
//                     FirstName: 'empty',
//                     LastName: 'empty',
//                     Email: 'empty',
//                     UserToken: 'empty'
//                 }));
//             }
//         } catch (error) {
//             Promise.reject(error);
//         }
//     };

//     async function signOut() {
//         try {
//             //await AsyncStorage.clear();
//             await AsyncStorage.removeItem('user');
//             setUserToken(null);
//         } catch (error) {
//             Promise.reject(error);
//         }
//     };

//     // React.useEffect(() => {
//     //     signIn();
//     //     signOut();
//     // }, []);

//     return (
//         <AuthContext.Provider value={{userToken, setUserToken, signIn, signOut}}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export { AuthContext, AuthProvider};


























    // const [userToken, setUserToken] = React.useState(null);

    // async function signIn(email, password) {
    //     try {
    //         const responseJSON = await SignIn(email, password);

    //         if (responseJSON != null) {
    //             await AsyncStorage.setItem('user', JSON.stringify({
    //                 UserID: responseJSON.id,
    //                 FirstName: responseJSON.first_name,
    //                 LastName: responseJSON.last_name,
    //                 Email: responseJSON.email,
    //                 UserToken: responseJSON.accessToken
    //             }));
    
    //             console.log("Userdata: " + responseJSON.accessToken);
    //             const myUserToken = responseJSON.accessToken;
    //             setUserToken(myUserToken);
    //             console.log("myUserToken: " + myUserToken);
    //             console.log("UserToken: " + userToken);
    //         }
    //         else {
    //             await AsyncStorage.setItem('user', JSON.stringify({
    //                 UserID: 'empty',
    //                 FirstName: 'empty',
    //                 LastName: 'empty',
    //                 Email: 'empty',
    //                 UserToken: 'empty'
    //             }));
    //         }
    //     } catch (error) {
    //         Promise.reject(error);
    //     }
    // };

    // async function signOut() {
    //     try {
    //         //await AsyncStorage.clear();
    //         await AsyncStorage.removeItem('user');
    //         setUserToken(null);
    //     } catch (error) {
    //         Promise.reject(error);
    //     }
    // };









    // // Get current auth state from AsyncStorage
    // async function getAuthState() {
    //     try {
    //         const authDataString = await AsyncStorage.getItem('user');
    //         const authData = JSON.parse(authDataString || {});
    //         setAuthState(authData);
    //     } catch (err) {
    //         setAuthState({});
    //     }
    // };

    // // Update AsyncStorage & context state
    // async function setAuth(auth) {
    //     try {
    //         await AsyncStorage.setItem('user', JSON.stringify({
    //             UserID: responseJSON.id,
    //             FirstName: responseJSON.first_name,
    //             LastName: responseJSON.last_name,
    //             Email: responseJSON.email,
    //             UserToken: responseJSON.accessToken
    //         }));
    //         setAuthState(auth);
    //     } catch (error) {
    //         Promise.reject(error);
    //     }
    // };



    // const getToken = async () => {
    //     const userDataRaw = await AsyncStorage.getItem('user');
    //     const userData = JSON.parse(userDataRaw);

    //     const userToken = userData.UserToken;
    //     setUserToken(userToken);
    //     // const UserID = userData.UserID;
    //     // const FirstName = userData.FirstName;
    //     // const LastName = userData.LastName;
    //     // const Email = userData.Email;
    //     // const UserToken = userData.UserToken;
    // };