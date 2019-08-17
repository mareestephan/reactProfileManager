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

                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text"
                                            name="name"
                                            className="form-control form-control-lg"
                                            placeholder="Enter full name..."
                                            value={name}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    {/* ++++++++++FORM INput+++++++++ */}

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email"
                                            name="email"
                                            className="form-control form-control-lg"
                                            placeholder="Enter Email..."
                                            value={email}
                                            onChange={this.onChange}

                                        />
                                    </div>
                                    {/* ++++++++++FORM INput+++++++++ */}

                                    <div className="form-group">
                                        <label htmlFor="name">Phone</label>
                                        <input type="text"
                                            name="phone"
                                            className="form-control form-control-lg"
                                            placeholder="Enter Mobile Number..."
                                            value={phone}
                                            onChange={this.onChange}

                                        />
                                    </div>
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