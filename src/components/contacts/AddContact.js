import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup'

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    onSubmit = (dispatch, e) => {
        e.preventDefault()

        const { name, email, phone } = this.state;

        // CHECK FOR ERRORS
        if (name === '') {
            this.setState({ errors: { name: 'Name is required' } });
            return;
        }
        if (email === '') {
            this.setState({ errors: { email: 'Email is required' } });
            return;

        }
        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is required' } });
            return;

        }

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
            phone: '',
            errors: {}

        });
        this.props.history.push('/')

    };



    onChange = e => this.setState({
        [e.target.name]:
            e.target.value
    })
    render() {

        const { name, email, phone, errors } = this.state;

        return (
            <Consumer >
                {value => {
                    const { dispatch } = value;
                    return (

                        <div className="card mb-3">
                            <h1 className="display-4 mb-2">
                                <span className="text-info">Add</span>  Contact</h1>
                            {/* <div className="card-header">Add Contact</div> */}
                            <div className="card-body">
                                {/* ++++++++++FORM+++++++++ */}

                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    {/* ++++++++++FORM INput+++++++++ */}

                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="Enter full name..."
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}

                                    />
                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email..."
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}

                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter phone number..."
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}

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