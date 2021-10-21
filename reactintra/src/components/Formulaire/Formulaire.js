import React, {Component} from "react";
import {User} from "../../model/User";
import service from "../../service/service";

export default class Formulaire extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            coup: '',
        }
        this.service = service;
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    refresh = () => {
        window.location.reload();
    }
    finish = () => {
        const {
            name, coup
        } = this.state;
        let user
        user = new User(name, coup)
        this.service.joue(user).then(value => {
            console.log(value)

        });
        this.refresh()
    }

    verification = () => {
        if (!this.state.name) {
            alert("Le champs nom est vide")
            return false
        }
        if (Number(this.state.coup) <= 0 || Number(this.state.coup) > 6) {
            alert("Le coup doit etre entre 1 et 6")
            return false
        }
        return true;
    }
    render() {
        return(<div>
            <div className="form-container">
                <form className="bg-dark px-3 py-4 rounded shadow-lg mt-5" id="contact_form">
                    <fieldset>
                        <legend>
                            <center><h2 className="text-info">Examen Intra Imem</h2></center>
                        </legend>
                        <br/>
                        <div className="form-group row">
                            <div className="col-md-6">
                                <label>Votre nom</label>
                                <div className="input-group">
                                    <input name="name"  className="form-control" type="text"
                                           value={this.state.name} onChange={this.handleChange("name")}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label>Votre guess</label>
                                <div>
                                    <div className="input-group">
                                        <input name="coup" className="form-control" type="number"
                                               value={this.state.coup} onChange={this.handleChange("coup")}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group text-center">
                            <label/>
                            <div>
                                <button className="btn btn-primary" type={"button"}
                                        onClick={() => {
                                            if(this.verification()){
                                                this.finish()
                                            }}}>Coup dé</button>
                            </div>
                        </div>
                    </fieldset>

                </form>
            </div>
        </div>)
    }
}