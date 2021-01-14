import * as React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {loadUsers} from "./actions";

class UsersWithReduxSaga extends React.Component {
    componentDidMount() {
        this.props.loadUsers();
    };

    render() {
        if (this.props.loading) {
            return <div>Loading</div>
        }


        if (this.props.error) {
            return <div style={{color: 'red'}}>ERROR: {this.props.error}</div>
        }

        return (
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Messages</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map(u =>
                        <tr key={u.id}>
                            <td><Link to={`/redux-saga/${u.id}`}>{u.title}</Link></td>
                            <td>{u.categories}</td>
                            <td>{u.content}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    data: state.reduxSaga.data,
    loading: state.reduxSaga.loading,
    error: state.reduxSaga.error,
});

const mapDispatchToProps = {
    loadUsers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersWithReduxSaga);
