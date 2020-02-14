import React from 'react'
import Product from './Product'
import SearchInput, { createFilter } from 'react-search-input'

const KEYS_TO_FILTERS = ['name', 'category', 'tags', 'alternatives.zeroWaste', 'alternatives.ecoFriendly']

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            searchTerm: '',
            isAllOpen: false
        };
        this.searchUpdated = this.searchUpdated.bind(this)
    }
    componentDidMount() {
        this.setState({ products: this.props.products })
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }

    setOpen = (open) => {
        //open = !open;
        this.setState({ isAllOpen: !open })
    }
    showProperText() {
        if (!this.state.isAllOpen) {
            return "Reveal all"
        } else {
            return "Hide all"
        }
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
                            isAllOpen={this.state.isAllOpen}
                        />
                    )}
                </div>
                <div className="btn-container">
                    <div className={"btn" + (this.state.isAllOpen ? " hide" : " ")} onClick={() => this.setOpen(this.state.isAllOpen)}>{this.showProperText()}</div>
                </div>
            </div>
        )
    }
}

export default List