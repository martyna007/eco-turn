import React from 'react'

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        } 
    }

    setOpen = (open) => {
        open = !open;
        this.setState({
            isOpen: open
        })
    }

    render() {
        let product = this.props.product;
        return (
            <div className={"product-container " + (this.state.isOpen ? " open" : " ")} onClick={() => this.setOpen(this.state.isOpen)}>
                <div className="flipper">
                    <div className="front" style={{ backgroundImage: `url(${product.image})` }}>
                        <div className="name">{product.name}</div>
                    </div>
                    <div className="back">
                        <div className="name">{product.alternatives.zeroWaste ? product.alternatives.zeroWaste : product.alternatives.ecoFriendly}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product