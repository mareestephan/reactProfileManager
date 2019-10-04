import React, { Component } from 'react';


class Test extends Component {
    state = {
        name: ''

    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({
                name: data.name

            }));
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                <h1>{name}</h1>

            </div>

        )
    }
}

export default Test;