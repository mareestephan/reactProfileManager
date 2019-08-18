import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup'

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    };

    onSubmit = (dispatch, e) => {
        e.preventDefault()

        const { name, email, phone } = this.state;

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };

        dispatch({ type: 'ADD_CONTACT', payload: newContact });




        // CLEAR STATE
        this.setState({
            name: '',
            email: '',
            phone: ''

        }

        );


    };



    onChange = e => this.setState({
        [e.target.name]:
            e.target.value
    })
    render() {

        const { name, email, phone } = this.state;

        return (
            <Consumer >
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                {/* ++++++++++FORM+++++++++ */}

                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    {/* ++++++++++FORM INput+++++++++ */}

                                    <TextInputGroup
                                        label="Appelame"
                                        name="name"
                                        placeholder="Enter full name..."
                                        value={name}
                                        onChange={this.onChange}

                                    />
                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email..."
                                        value={email}
                                        onChange={this.onChange}

                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter phone number..."
                                        value={phone}
                                        onChange={this.onChange}

                                    />


                                    {/* ++++++++++BUTTON+++++++++ */}
                                    {/* ++++++++++FORM INput+++++++++ */}
                                    <input type="submit" value="Add Contact" className="btn btn-block btn-light" />

                                </form>
                            </div>

                        </div>

                    )
                }}
            </Consumer >
        )

    }
}

export default AddContact;