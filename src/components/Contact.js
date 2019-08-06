import React, { Component } from 'react'
import propTypes from 'prop-types';



class Contact extends Component {
    render() {

        const { contact } = this.props;

        return (
            <div className="card card-body mb-3">
                <h4>{contact.name}</h4>
                <ul className="list-group">
                    <li className="list-group-item">Email: {contact.email} </li>
                    <li className="list-group-item">Phone: {contact.phone}</li>
                </ul>
            </div>
        )
    }
}

Contact.propTypes = {

    contact: propTypes.object.isRequired,



}
export default Contact;