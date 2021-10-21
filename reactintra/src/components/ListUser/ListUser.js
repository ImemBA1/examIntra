import React, {Component} from "react";
import service from "../../service/service"
import ListUserView from "./ListUserView/ListUserView";
import './ListUser.css'

export default class ListUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: [],
        };

        service.getAllUsers()
            .then(userList => this.setState({userList}))
            .catch(e => {
                this.setState({userList: []})
                console.trace(e);
            });
    }


    render() {
        return(
            <div className="container">
                <h2 className="text-center text-warning"> Liste des coups</h2>
                    <div>
                        <table style={{width:"100%"}}>
                            <tr>
                                <th>Nom</th>
                                <th>Guess utilisateur</th>
                                <th>Nombre random</th>
                                <th>Validité</th>
                            </tr>
                            {this.state.userList.map((user, index) =>
                                <ListUserView key={index} user={user}/>
                            )}
                        </table>
                    </div>
            </div>
        )
    }
}