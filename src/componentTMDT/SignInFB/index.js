import React, { useEffect, useState } from 'react'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


export default function SignInFB() {
    const [isSignedIn, setisSignIn] = useState({ isSignedIn: false })
    const uiConfig = {
        signInFlow: "popup",
        signInSuccessUrl: '/specialoffers',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
            // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            // firebase.auth.GithubAuthProvider.PROVIDER_ID,
            // firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
        // callbacks: {
        //     signInSuccessWithAuthResult: () => false
        // }vo hieu hoa tu dong chuyen huong khi dang nhap thanh cong
    }
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setisSignIn({ isSignedIn: !!user })
        })

        return unsubscribe
    }, [])
    // componentDidMount = () => {
    //     firebase.auth().onAuthStateChanged(user => {
    //         this.setState({ isSignedIn: !!user })//2 exclamation mark don gian la thanh true, object 1 exclamation mark la false
    //         // console.log('isSignedIn', this.state.isSignedIn)
    //         // console.log("user", !!user)
    //     })
    // }

    return (
        <div >
            {isSignedIn ? (
                <StyledFirebaseAuth
                    // uiCallback={ui => ui.disableAutoSignIn()}
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            ) : (
                    <StyledFirebaseAuth
                        // uiCallback={ui => ui.disableAutoSignIn()}
                        uiConfig={uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                )}
        </div>
    )
}


// // class function
// import React from 'react'
// import firebase from "firebase"
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


// export default class SignInFB extends React.Component {
//     state = { isSignedIn: false }
//     uiConfig = {
//         signInFlow: "popup",
//         signInSuccessUrl: '/specialoffers',
//         signInOptions: [
//             firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//             firebase.auth.FacebookAuthProvider.PROVIDER_ID
//             // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//             // firebase.auth.GithubAuthProvider.PROVIDER_ID,
//             // firebase.auth.EmailAuthProvider.PROVIDER_ID
//         ]
//         // callbacks: {
//         //     signInSuccessWithAuthResult: () => false
//         // }vo hieu hoa tu dong chuyen huong khi dang nhap thanh cong
//     }

//     componentDidMount = () => {
//         firebase.auth().onAuthStateChanged(user => {
//             this.setState({ isSignedIn: !!user })//2 exclamation mark don gian la thanh true, object 1 exclamation mark la false
//             // console.log('isSignedIn', this.state.isSignedIn)
//             // console.log("user", !!user)
//         })
//     }

//     render() {
//         return (
//             <div className="App">
//                 {this.state.isSignedIn ? (
//                     <StyledFirebaseAuth
//                         // uiCallback={ui => ui.disableAutoSignIn()}
//                         uiConfig={this.uiConfig}
//                         firebaseAuth={firebase.auth()}
//                     />
//                 ) : (
//                         <StyledFirebaseAuth
//                             // uiCallback={ui => ui.disableAutoSignIn()}
//                             uiConfig={this.uiConfig}
//                             firebaseAuth={firebase.auth()}
//                         />
//                     )}
//             </div>
//         )
//     }
// }