import React, { Component } from "react";
import LoginModal from './LoginModal';



class ProfilePanel extends Component {
  state = {
    username: null,
    LoginModalOpen: false
  }

  render() {
    const display = this.props.username ? (
      <div>
        <LoginModal 
        isOpen={this.state.loginModalOpen}
        toggle={() => this.setState({loginModalOpen: false})} 
        />
        <span className="navbar-text">Welcome, {this.props.username}</span>
      </div>
    ) : (
      <button
        className="btn btn-primary btn-block"
        onClick={() => {
          this.setState({loginModalOpen: true});
          console.log(this.state);
        } }
      >
        Login
      </button>
  );
    return <div className="col-3 profile_panel text-right">{display}</div>;
  }
}

export default ProfilePanel;
