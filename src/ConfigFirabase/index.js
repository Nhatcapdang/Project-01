import firebase from "firebase"
const Config = {
    apiKey: "AIzaSyBnhx2FYJtbkuhYgJ_WVo8_5SCoOjPQmwo",
    authDomain: "thuong-mai-dien-tu-e122a.firebaseapp.com",
    databaseURL: "https://thuong-mai-dien-tu-e122a.firebaseio.com",
    projectId: "thuong-mai-dien-tu-e122a",
    storageBucket: "thuong-mai-dien-tu-e122a.appspot.com",
    messagingSenderId: "260912119791",
    appId: "1:260912119791:web:4a3244f5fa5ac8eb7d401a",
    measurementId: "G-T0EKNBBS7Y"
};
const fire = firebase.initializeApp(Config);
export default fire;