import React from 'react'
import Product from './Product'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        this.setState({
            products: this.props.products
        })
    }

    render() {
        return (
            <div className="list-container">
                {this.state.products.map((product, index) =>
                    <Product
                        key={index}
                        product={product}
                    />
                )}

            </div>
        )
    }
}

export default List