import {methods, requestInit, urlBackend} from "./serviceUtil";
import {swalErr, toast} from "../utility";

class Service{

    async joue(User){
        const response = await fetch(`${urlBackend}/coup`, requestInit(methods.POST, User));
        return await response.json().then(value => {
            if (value.message) {
                swalErr(value.message).fire({}).then()
            } else {
                toast.fire({title:"coup joué"}).then()
            }
        })
    }
    async getAllUsers(){
        const response = await fetch(`${urlBackend}/users`,  requestInit(methods.GET));
        return await response.json();
    }
}
const service = new Service();
export default service;