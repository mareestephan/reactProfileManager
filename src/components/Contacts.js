import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
    constructor() {
        super();
        this.state = {
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
    }

    render() {

        const { contacts } = this.state;

        return (
            <div>
                {contacts.map(contact =>
                    <Contact
                        key={contact.id}
                        name={contact.name}
                        email={contact.email}
                        phone={contact.phone} />

                )}
            </div>
        )
    }
}


export default Contacts;