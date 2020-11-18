import React, { Component } from 'react'
import firebase from '../../ConfigFirabase/index'



class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    dangky = () => {
        var x = firebase.auth().createUserWithEmailAndPassword("kiet@gmail.com", "123456", "0377871681")
        console.log('dang ky', x)
    }
    dangnhap = () => {
        var y = firebase.auth().signInWithEmailAndPassword("kiet@gmail.com", "123456")
        console.log('dang nhap', y)
    }
    componentDidMount() {
        // firebase.auth().onAuthStateChanged(user => {
        //     console.log('userk', user)
        // })
        firebase.auth().onAuthStateChanged((user) => {
            var user1 = firebase.auth().currentUser;
            if (user1) {
                // User is signed in.
                var displayName = user1.displayName;
                console.log('ngui dung hien tai dang nhap vao', displayName)
            } else {
                // No user is signed in.
            }
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                console.log('ngui dung da dang nhap vao', displayName)
                console.log(email)
                console.log(emailVerified)
                console.log(photoURL)
                console.log(isAnonymous)
                console.log(uid)
                console.log('provide', providerData)
                // ...
            } else {
                // User is signed out.
                // ...
            }
        });
    }
    hientai = () => {
        var user = firebase.auth().currentUser;
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            console.log('ngui dung hien tai dang nhap vao', displayName)
        } else {
            // No user is signed in.
        }
    }
    render() {
        return (
            <>
                <button onClick={() => this.dangky()}>dang ky</button>
                <button onClick={() => this.dangnhap()}>dang nhap</button>
                <button onClick={() => this.hientai()}>nguoi dung hien tai</button>
            </>
        );
    }
}

export default Authentication;