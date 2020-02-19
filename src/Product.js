import React from 'react'

class Product extends React.Component {
    
    render() {
        let product = this.props.product;

        return (
            <div className={"product-container " + (this.props.isAllOpen || product.selected ? " open" : " ")} onClick={() => this.props.selectProduct(product)}>
                <div className="flipper">
                    <div className="front" style={{ backgroundImage: `url(${product.image})` }}>
                        <div className="name">{product.name}</div>
                    </div>
                    <div className="back" style={{ backgroundImage: `url(${product.imageEco})` }}>
                        <div className="name">{product.alternatives.zeroWaste ? product.alternatives.zeroWaste : product.alternatives.ecoFriendly}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product