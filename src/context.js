import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        default:
            return state;
    }
};


export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'Stephan Maree',
                email: 'smaree@email.com',
                phone: '123 3456 567 '
            },
            {
                id: 2,
                name: 'Appel',
                email: 'appel@email.com',
                phone: '333 555 666 '
            },
            {
                id: 3,
                name: 'Pere',
                email: 'pere@email.com',
                phone: '88 8888 8888'
            },
            {
                id: 3,
                name: 'Mike ',
                email: 'mike@email.com',
                phone: '1234567890'
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }

    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;