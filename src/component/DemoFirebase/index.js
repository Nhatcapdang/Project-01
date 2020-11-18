import React, { Component } from 'react';
import firebase from '../../ConfigFirabase/index'


class DemoFirebase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            URlimage: null,
            progress: 0,
            speed: 10
        }
    }
    // componentDidMount() {
    //     const rootRef = firebase.firestore().collection('product').onSnapshot((snap) => {
    //         snap.docs.map((item, index) => {
    //             var x = item.data()
    //             console.log(item.data())
    //             this.setState({
    //                 speed: x.ten
    //             })
    //         })
    //     });
    // }
    //onsnapshot la lay du lieu
    //add la them
    //console.log(item.id)
    //console.log(item.data())
    // them = () => {
    //     const rootRef = firebase.firestore().collection('product').add({ ten: "thach" })
    // };

    xoa = () => {
        firebase.firestore().collection("product").doc("Cv1oe5ppTARs9t2m977y").delete().then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });

    };
    them = () => {
        firebase.firestore().collection('product').add({ ten: "kiet1", color: "red" });
    };
    cap = () => {
        firebase.firestore().collection("product").doc("G0oZijSfmrpIMHMBuZnY").update({
            ten: "nhat"
        })
            .then(function () {
                console.log("Document successfully updated!");
            });
    }

    handleChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
        console.log(this.state.image)
    }
    handleUpload = () => {
        console.log('ok')
        //tao duong dan
        const uploadTask = firebase.storage().ref(`image/${this.state.image.name}`).put(this.state.image)
        uploadTask.on(
            "state)changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                this.setState({
                    progress: progress
                })
            },//tien trinh tai len
            error => {
                console.log(error)
            },
            () => {
                firebase.storage()
                    .ref("image")
                    .child(this.state.image.name)
                    .getDownloadURL()
                    .then(URL => {
                        this.setState({
                            URlimage: URL//xem truoc
                        })
                    })//success
            }
        )
    }
    componentWillMount() {
        var docRef = firebase.firestore().collection("product").doc("n8PXgEJ1ItfQU6Qb8Vnx");
        docRef.get().then(function (doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

    }
    render() {
        return (
            <div>
                <h1>{this.state.speed}</h1>
                <button onClick={() => this.xoa()}>xoa</button>
                <button onClick={() => this.them()}>them</button>
                <button onClick={() => this.cap()}>cap</button>
                <input type="file" onChange={this.handleChange}></input>
                <button onClick={() => this.handleUpload()}>Upload</button>
                <progress value={this.state.progress} max="100"></progress>
                <img src={this.state.URlimage || "https://via.placeholder.com/150"} alt="/"></img>
            </div>
        );
    }
}

export default DemoFirebase;