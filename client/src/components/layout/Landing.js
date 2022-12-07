import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import home from '../../img/home.png';

class Landing extends Component {
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    render() {
        return (
            
            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                           
                            <div className="btn">
                                    <img src={home}></img>
                                </div>
                           <h1 className="display-4 mb-4">Developer Arena</h1>
                                
                                
                                
                                
                                <p className="lead">
                                    {' '}
                                    Create a developer profile/portfolio, share posts and get help
                                    from other developers
                                </p>

                                
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Landing);
