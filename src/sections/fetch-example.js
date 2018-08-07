import React, { Component } from 'react';

class FetchExample extends Component {

    state = { bpi: {} }

    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => res.json())
            .then(data => {
                this.setState({ bpi: data.bpi });
            });
    }

    _renderCurrencies() {
        const { bpi } = this.state;
        const currencies = Object.keys(bpi);
        return currencies.map(currency => (
            <div key={currency}>
                1 BTC is {bpi[currency].rate} &nbsp;
                        <span>{currency}</span>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <h4>Bitcoin price index</h4>
                {this._renderCurrencies()}
            </div>
        )
    }
}

export default FetchExample;