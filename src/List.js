import React from 'react'
import Aside from './Aside'
import Product from './Product'
import SearchInput, { createFilter } from 'react-search-input'

const KEYS_TO_FILTERS = ['name', 'category', 'tags', 'alternatives.zeroWaste', 'alternatives.ecoFriendly']

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            product: {},
            searchTerm: '',
            isAllOpen: false,
            isProductOpen: false
        };
        this.searchUpdated = this.searchUpdated.bind(this)
    }

    componentDidMount() {
        this.props.products.map(product => {
            product.selected = false;
            return null
        });
        this.setState({ products: this.props.products })
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }

    setOpen = (open) => {
        this.setState({ isAllOpen: !open })
    }

    showProperText() {
        if (!this.state.isAllOpen) {
            return "Reveal all"
        } else {
            return "Hide all"
        }
    }

    selectCurrentItem = (product) => {
        let list = this.state.products
        list.map(elem => {
            if (elem.id !== product.id) {
                elem.selected = false
            } else if (elem.id === product.id) {
                elem.selected = !elem.selected;
            }
            return null
        })

        this.setState({
            product: product,
            products: list
        })
        let isSelected = this.state.product.selected ? true : false
        this.setState({
            isProductOpen: isSelected
        })
    }

    render() {
        const filteredProducts = this.state.products.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        
        return (
            <div>
                <div className={"main-container" + (this.state.product.selected ? " showPanel" : " ")} >
                    <SearchInput className="search-input" data={this.state.products} onChange={this.searchUpdated} />
                    <div className="list-container" ref={this.setProductListRef}>
                        {filteredProducts.map((product, index) =>
                            <Product
                                key={index}
                                product={product}
                                isAllOpen={this.state.isAllOpen}
                                selectProduct={this.selectCurrentItem}
                            />
                        )}
                        <div className="authors">
                            <p>made by <a href="https://www.instagram.com/muiri_/" target="_blank" rel="noopener noreferrer">@muiri_</a> and <a href="http://www.martynaszeszko.pl/" target="_blank" rel="noopener noreferrer">martyna007</a></p>
                        </div>
                    </div>
                    <div className="btn-container">
                        <div className={"btn" + (this.state.isAllOpen ? " hide" : " ")} onClick={() => this.setOpen(this.state.isAllOpen)}>{this.showProperText()}</div>
                    </div>
                </div>
                <Aside product={this.state.product}/>
            </div>
        )
    }
}

export default List