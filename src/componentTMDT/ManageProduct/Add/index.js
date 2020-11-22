import React, { Component } from 'react';
import "./style.scss"
import firebase from '../../../ConfigFirabase/index'
import { toastSuccess } from '../../../common/toastify'


class AddPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idUseupdate: null,
            progress: 0,
            imageProduct: null,
            URLimage: "",
            txtNameProduct: "",
            txtPrices: "",
            selecDiscount: 0,
            selecCategory: "Fruits",
        }
    }
    //setState
    stateDefault = () => {
        this.setState({
            progress: 0,
            imageProduct: null,
            URLimage: "",
            txtNameProduct: "",
            txtPrices: "",
            selecDiscount: 0,
            selecCategory: "Fruits",
        })
    }
    //hide and show addProduct
    hideAddPopUp = (value) => {
        this.props.hideAddPopUp(value)
        this.stateDefault()
    }
    //take value input
    handleChange = (event) => {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : (target.type === 'file' ? target.files[0] : target.value);
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleChangeImge = (event) => {
        this.setState({
            imageProduct: event.target.files[0]
        })
    }
    //generateID Random
    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    generateID() {
        return this.s4() + this.s4()
    }
    //setState after take value input
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.idUseupdate !== null) {
            let id = this.state.idUseupdate
            let productUpdate = {
                URLimage: this.state.URLimage,
                nameProduct: this.state.txtNameProduct,
                pricesProduct: this.state.txtPrices,
                selecCategory: this.state.selecCategory,
                selecDiscount: this.state.selecDiscount
            }
            firebase.firestore().collection("product").doc(id).update(productUpdate)
                .then(() => {
                    toastSuccess("Updated")
                    this.hideAddPopUp(false)
                    this.stateDefault()
                });
        } else {
            let product = this.state
            this.imageUpload(product)
        }
    }
    //upload Image to firebase
    imageUpload = (product) => {
        let image = product.imageProduct;
        //tao duong dan
        const uploadTask = firebase.storage().ref(`image/${image.name}`).put(image)
        uploadTask.on(
            "state_changed",
            snapshot => {
                let progress = Math.round(
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
                    .child(image.name)
                    .getDownloadURL()
                    .then(URL => {
                        this.setState({
                            URLimage: URL//xem truoc
                        })
                        let newProduct = {
                            URLimage: URL,
                            id: this.generateID(),
                            nameProduct: product.txtNameProduct,
                            pricesProduct: product.txtPrices,
                            selecDiscount: product.selecDiscount,
                            selecCategory: product.selecCategory
                        }
                        this.addProduct(newProduct)
                        this.stateDefault()
                        //import tu ben ngoai vao
                        toastSuccess("You have successfully added")
                    })//success
            }
        )
    }


    addProduct = (newProduct) => {
        firebase.firestore().collection('product').add(newProduct);
    };
    // editUpdate = (idUpdate) => {
    //     let productUpdate = {
    //         URLimage: this.state.URLimage,
    //         nameProduct: this.state.txtNameProduct,
    //         pricesProduct: this.state.txtPrices,
    //         selecCategory: this.state.selecCategory,
    //         selecDiscount: this.state.selecDiscount
    //     }
    //     firebase.firestore().collection("product").doc(idUpdate).update(productUpdate)
    //         .then(function () {
    //             console.log("Document successfully updated!");
    //         });
    //     console.log(productUpdate)
    // }

    //lay du lu lieu xuong
    // componentDidMount() {
    // const danhsach = []
    // firebase.firestore().collection('product').onSnapshot((snap) => {
    //     snap.docs.map((doc, index) => {
    //         let data = doc.data();
    //         console.log('du lieu', data.nameProduct)
    //         console.log('id', doc.id)
    //         console.log('doc', doc)
    //     })
    // });

    // firebase.firestore().collection("product").get().then((snapShot) => {
    //     console.log('tren', snapShot.docs)
    //     snapShot.docs.forEach(doc => {
    //         let data = doc.data();
    //         console.log('du lieu', data.nameProduct)
    //         console.log('id', doc.id)
    //         console.log('doc', doc)
    //     })
    // })

    // console.log('ok', danhsach)
    // }

    componentDidUpdate(prevProps) {
        if (this.props.objEdit !== prevProps.objEdit) {
            let data = this.props.objEdit.data()
            let id = this.props.objEdit.id;
            this.setState({
                idUseupdate: id,
                URLimage: data.URLimage,
                txtNameProduct: data.nameProduct,
                txtPrices: data.pricesProduct,
                selecDiscount: data.selecDiscount,
                selecCategory: data.selecDiscount,
            })
        }
    }
    render() {
        return (
            <>
                <div className="add_popup">
                    {/* className={this.props.showPopUp ? "container-contact100" : "wrap-contact100"} */}
                    <div className={this.props.showPopUp ? "container-contact100" : "container-contact100-hide"} >
                        {/* wrap-contact100  show-wrap-contact100*/}
                        <div className="show-wrap-contact100">
                            <button className="contact100-btn-hide" onClick={() => this.hideAddPopUp(false)}>
                                <i className="fa fa-close" aria-hidden="true" />
                            </button>
                            <form className="contact100-form validate-form" onSubmit={this.handleSubmit}>
                                <div style={{ display: "grid" }}>
                                    <img src={this.state.URLimage || "https://via.placeholder.com/150"} alt="/" style={{ width: '150px', height: '150px' }}></img>
                                    <div class="progress" >
                                        <div class="progress-bar progress-bar-striped bg-success" role="progressbar"
                                            aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100" style={{ width: `${this.state.progress}%`, color: "#fc8a35" }}>
                                            {this.state.progress}%
                                        </div>
                                    </div>
                                    <input
                                        required
                                        type="file"
                                        namee="imageProduct"
                                        onChange={this.handleChangeImge}></input>
                                </div>
                                <span className="contact100-form-title">
                                </span>
                                <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Name is required">
                                    <span className="label-input100">Name Product</span>
                                    <input
                                        className="input100"
                                        type="text"
                                        placeholder="Enter name product"
                                        required
                                        name="txtNameProduct"
                                        value={this.state.txtNameProduct}
                                        onChange={this.handleChange}
                                    />
                                    <span className="focus-input100" />
                                </div>
                                <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <span className="label-input100">Prices</span>
                                    <input
                                        className="input100"
                                        type="text"
                                        placeholder="Enter prices"
                                        required
                                        name="txtPrices"
                                        value={this.state.txtPrices}
                                        onChange={this.handleChange}
                                    />
                                    <span className="focus-input100" />
                                </div>
                                <div className=" rs1-wrap-input100 validate-input" >
                                    <span className="label-input100">Discount</span>
                                    <select
                                        name="selecDiscount"
                                        className="input100 custom"
                                        value={this.state.selecDiscount}
                                        onChange={this.handleChange}
                                    >
                                        <option value="0">0%</option>
                                        <option value="12">12%</option>
                                        <option value="25">25%</option>
                                        <option value="50">50%</option>
                                        <option value="75">75%</option>
                                        <option value="95">95%</option>
                                        <option value="100">100%</option>
                                    </select>
                                </div>
                                <div className=" rs1-wrap-input100 validate-input" >
                                    <span className="label-input100">Categories</span>
                                    <select
                                        name="selecCategory"
                                        className="input100 custom"
                                        value={this.state.selecCategory}
                                        onChange={this.handleChange}
                                    >
                                        <option value="Fruist">Fruist</option>
                                        <option value="Vegetable">Vegetable</option>
                                    </select>
                                </div>
                                {/* <div className="wrap-input100 validate-input" data-validate="Message is required">
                                    <span className="label-input100">Message</span>
                                    <textarea className="input100" name="message" placeholder="Your message here..." defaultValue={""} />
                                    <span className="focus-input100" />
                                </div> */}
                                <div className="container-contact100-form-btn" style={{ zIndex: 99 }}>
                                    <button className="contact100-form-btn">
                                        <span>
                                            Submit
                                              <i className="fas fa-long-arrow-alt-right m-l-7" aria-hidden="true" />
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div id="dropDownSelect1" />
                </div>

            </>
        );
    }
}

export default AddPopUp;