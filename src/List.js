import React from 'react'
import Product from './Product'
import SearchInput, { createFilter } from 'react-search-input'

const KEYS_TO_FILTERS = ['name', 'category', 'tags', 'alternatives.zeroWaste', 'alternatives.ecoFriendly']

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            searchTerm: ''
        };
        this.searchUpdated = this.searchUpdated.bind(this)
    }
    componentDidMount() {
        this.setState({
            products: this.props.products
        })
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }

    render() {
        const filteredProducts = this.state.products.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

        return (
            <div>
                <SearchInput className="search-input" data={this.state.products} onChange={this.searchUpdated} />
                <div className="list-container">
                    {filteredProducts.map((product, index) =>
                        <Product
                            key={index}
                            product={product}
                        />
                    )}

                </div>
            </div>
        )
    }
}

export default List