import React, { Component } from 'react';
import './Contact_TellUs.css'


class Contact_TellUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:"",
            txtName: "",
            txtEmail: "",
            txtPhone: "",
            NameError: "",
            emailError: "",
            phoneError: "",
            textarea:"",
            dataUser:[]
        }
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        const isVaild = this.validate();
        if (isVaild) {
            let dataUser=this.state.dataUser;
            const data={
                id:this.guidGenerator(),
                Name:this.state.txtName,
                email:this.state.txtEmail,
                phone:this.state.txtPhone
            }
            dataUser.push(data)
            this.setState({
                dataUser
            })
            localStorage.setItem("user",JSON.stringify(dataUser))
            //clear form
            this.setState({
                txtName: "",
                txtEmail: "",
                txtPhone: "",
                NameError: "",
                emailError: "",
                phoneError: "",
                textarea:""
            })
            alert("Success")
        }
    }
    guidGenerator() {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }
    validate = () => {
        // let emailError = "";
        // if (!this.state.emailError.includes("@")) {
        //     emailError = "invalid email"
        //     this.setState({
        //         emailError
        //     })
        //     return false
        // }
        // return true
        let checkingName = this.state.txtName;
        let checkingEmail = this.state.txtEmail;
        let checkingPhone = this.state.txtPhone;

        const regexpName = /[a-zA-Z][^#&<>\"~;$^%{}?]{2,20}$/g;
        const regexpEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const regexpPhone = /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

        const checkingResultName = regexpName.exec(checkingName);
        if (checkingResultName !== null) {
            this.setState({
                NameError: ""
            })
        }
        const checkingResultEmail = regexpEmail.exec(checkingEmail);
        if (checkingResultEmail != null) {
            this.setState({
                emailError: ""
            })
        }
        const checkingResultPhone = regexpPhone.exec(checkingPhone);
        if (checkingResultEmail != null) {
            this.setState({
                phoneError: ""
            })
        }
        if (checkingResultEmail !== null && checkingResultName !== null && checkingResultPhone !== null ) {
            return true    //ko hop le thi tra ve null
        } else {
            if (checkingResultName === null) {
                this.setState({
                    NameError: " Name at least 3-20 characters",
                })
            }
            if (checkingResultEmail === null) {
                this.setState({
                    emailError: "invaild email",
                })
            }
            if (checkingResultPhone === null) {
                this.setState({
                    phoneError: "Starting with 0 and up to 10 numbers",
                })
            }
            return false
        }
    }
    render() {
        return (
            <div className="container p-0 mt-5">
                <div className="row ml-2 mr-2">
                    <div className="col-lg-6  col-md-6 col-sm-6 col-12 ">
                        <h3>Contact Us</h3>
                        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human. qui sequitur mutationem consuetudium lectorum. Mirum est notare quam</p>
                        <hr/>
                        <p><span className="fas fa-map-marker-alt"></span> Address : No 40 Baria Sreet 133/2 NewYork City</p>
                        <hr/>
                        <p><span className="far fa-envelope"></span> Infor@roadthemes.com</p>
                        <hr/>
                        <p><span className="fas fa-mobile-alt"></span> 0(37) 7871 681</p>
                    </div>
                    <div className="col-lg-6  col-md-6 col-sm-6 col-12 ">
                        <h3>Tell Us Your Project</h3>
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            <p>
                                <label>Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter your name" 
                                    required
                                    name="txtName"
                                    value={this.state.txtName}
                                    onChange={this.handleChange}
                                    ></input>
                                    <div style={{height:'20px'}}>
                                    <span className="badge badge-danger" style={{background:'white',color:"red"}}>{this.state.NameError}</span>
                                    </div>
                            </p>
                            <p>
                                <label>Email</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter your email"
                                    required
                                    name="txtEmail"
                                    value={this.state.txtEmail}
                                    onChange={this.handleChange} 
                                    ></input>
                                                                        <div style={{height:'20px'}}>
                                    <span className="badge badge-danger" style={{background:'white',color:"red"}}>{this.state.emailError}</span>
                                    </div>
                            </p>
                            <p>
                                <label>Phone</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter your phone" 
                                    required
                                    name="txtPhone"
                                    value={this.state.txtPhone}
                                    onChange={this.handleChange}
                                    ></input>
                                                                        <div style={{height:'20px'}}>
                                    <span className="badge badge-danger" style={{background:'white',color:"red"}}>{this.state.phoneError}</span>
                                    </div>
                            </p>
                            <p>
                                <label>Message</label>
                                <textarea 
                                    type="text" 
                                    placeholder="Enter your message"
                                    value={this.state.textarea} 
                                    name="textarea" 
                                    onChange={this.handleChange}
                                    ></textarea>
                            </p>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact_TellUs;