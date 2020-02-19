import React from 'react'

class Aside extends React.Component {

    render() {
        let product = this.props.product;
        if (Object.entries(product).length !== 0 && product.constructor === Object && product.selected === true) {
            let tags = product.tags.split(", ");
            console.log(tags);
            return (
                <div className={"panel-aside" + (product.selected ? " show" : " ")} >
                    <div className="panel-container">
                        <div className="icon mdi mdi-close" onClick={() => this.props.close(product)}></div>
                        <h3>{product.alternatives.zeroWaste ? product.alternatives.zeroWaste : product.alternatives.ecoFriendly}</h3>
                        <div className="product-image-container">
                            <img src={process.env.PUBLIC_URL + product.imageEco} alt="alt" />
                        </div>
                        <p>
                        {tags.map((tag, index) => {
                            return <span key={index}>#{tag} </span>
                        })}
                        </p>
                        <p>Category: {product.category}</p>
                        <br />
                        <p>Price: {product.price}</p>
                    </div>
                </div>
            )
        } else {
            return <div className="panel-aside">
                <div className="panel-container"></div>
            </div>
        }

    }
}

export default Aside