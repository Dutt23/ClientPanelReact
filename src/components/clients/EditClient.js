import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

class EditClient extends Component {
  constructor(props) {
    super(props);
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.emailInput = React.createRef();
    this.balanceInput = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();

    const { client, firestore, history } = this.props;
    console.log();
    const updatedClient = {
      firstName: this.firstNameInput.current.value,
      lastName: this.lastNameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
      balance:
        this.balanceInput.current.value === ""
          ? 0
          : this.balanceInput.current.value
    };
    // Update client in firestore
    firestore
      .update({ collection: "clients", doc: client.id }, updatedClient)
      .then(history.push("/"));
  };
  render() {
    const { client } = this.props;
    if (client) {
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
            <div className="card-header">Edit Client</div>
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
                    defaultValue={client.firstName}
                    required
                    ref={this.firstNameInput}
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
                    defaultValue={client.lastName}
                    required
                    ref={this.lastNameInput}
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
                    defaultValue={client.email}
                    ref={this.emailInput}
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
                    defaultValue={client.phone}
                    ref={this.phoneInput}
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
                    defaultValue={client.balance}
                    ref={this.balanceInput}
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-primary btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      );
    } else return <Spinner />;
  }
}
EditClient.propTypes = {
  firestore: PropTypes.object.isRequired
};

// Props is here , because we need the id. Hence the props
export default compose(
  firestoreConnect(props => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    //   always array of one client.
    // This puts this inside the props
    client: ordered.client && ordered.client[0]
  }))
)(EditClient);
