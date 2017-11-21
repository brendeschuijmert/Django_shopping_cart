import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Card } from 'semantic-ui-react'

import Product from './Product'

const ProductList = (props) => {
    let productsCollection = _.map(props.products, (product, idx) => {
        return (
            <Product key={idx} product={product} />
        )
    })

    return (
        <Card.Group itemsPerRow={4}>
            {productsCollection}
        </Card.Group>
    )
}

ProductList.propTypes = {
    products: PropTypes.array
}


export default ProductList
