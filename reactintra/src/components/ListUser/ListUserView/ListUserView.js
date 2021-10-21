import React, {Component} from "react";
import Swal from "sweetalert2";

export default class ListUserView extends Component {


    render(){
        const {user} = this.props
        let text
        let valid = user.match
        if (valid){
            text = "Bravo!"
        }
        else {
            text = "Manqué!"
        }
        Swal.fire(valid ? "Bravo!" : "Manqué!", '', valid ? 'success': 'error').then();
        return(
            <tr>
                <td>{user.name}</td>
                <td>{user.coup}</td>
                <td>{user.coupRandom}</td>
                <td>{text}</td>
            </tr>
        )
    }
}