import React, { Component } from "react";

import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

class AddClient extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: ""
  };

  onSubmit = e => {
    e.preventDefault();

    const newClient = this.state;
    const { firestore, history } = this.props;
    // If no balance make it zero
    if (newClient.balance === "") {
      newClient.balance = 0;
    }

    firestore.add({ collection: "clients" }, newClient).then(() => {
      history.push("/");
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        {/* Main card class for the form is under the row */}
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" />
              Back to dashboard
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Add Client</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="Enter first name"
                  minLength="2"
                  value={this.state.firstName}
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Enter last name"
                  minLength="2"
                  value={this.state.lastName}
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="Enter phone number"
                  minLength="10"
                  value={this.state.phone}
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="balance
                "
                >
                  Balance
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="balance
                  "
                  placeholder="Enter balance"
                  value={this.state.balance}
                  onChange={this.onChange}
                />
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
AddClient.propTypes = {
  firestore: PropTypes.object.isRequired
};
export default firestoreConnect()(AddClient);
