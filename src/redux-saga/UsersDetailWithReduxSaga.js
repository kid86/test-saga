import * as React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {loadUserDetail} from "./actions";

class UsersDetailWithReduxSaga extends React.Component {
    componentDidMount() {
        this.props.loadUserDetail(this.props.match.params.id);
    };

    render() {
        if (this.props.loading) {
            return <div>Loading</div>
        }


        if (this.props.error) {
            return <div style={{color: 'red'}}>ERROR: {this.props.error}</div>
        }

        return (
            <div>
                <h3>{detail.title}</h3>
                <h6>Categories: {detail.categories}</h6>
                <p>{detail.content}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    detail: state.reduxSaga.detail,
    loading: state.reduxSaga.loading,
    error: state.reduxSaga.error,
});

const mapDispatchToProps = {
    loadUserDetail
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersDetailWithReduxSaga);
