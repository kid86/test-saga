const API_BASE_ADDRESS = 'http://localhost:3000/db.json';
const ROOT_URL = '//reduxblog.herokuapp.com/api';
const API_KEY = '?key=cseckler1234';

export default class Api {
    static getUsers() {
        // const uri = API_BASE_ADDRESS + "/users";

        const uri = `${ROOT_URL}/posts${API_KEY}`;
        return fetch(uri, {
            method: 'GET'
        });
    }
}