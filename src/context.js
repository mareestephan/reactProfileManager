import React, { Component } from 'react';

const Context = React.createContext();

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
            }
        ]
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