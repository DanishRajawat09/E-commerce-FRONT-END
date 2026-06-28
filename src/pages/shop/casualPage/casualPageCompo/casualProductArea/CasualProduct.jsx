import React from 'react'
import "./casualProductStyles.css"
import { useDispatch } from 'react-redux'
import { filterOpen } from '../../../../../features/stateSlice'
import { Link } from 'react-router-dom'
import { addProduct } from '../../../../../features/productData'

const CasualProduct = ({ products = [] }) => {
  const dispatch = useDispatch()

  const handleProduct = (id, title, desc, price, img, actualPrice, starImg, rating, productDetails) => {
    dispatch(addProduct({ id, img, title, rating, price, actualPrice, starImg, desc, productDetails }))
  }

  return (
    <section className='casualProductSection'>
      <div className="CPHead flexContainer">
        <h1 className="CPHeading">Casual</h1>
        <img
          onClick={() => dispatch(filterOpen({ filOpen: true }))}
          className='filterIcon'
          src="filterBtn.png"
          alt="open filters"
        />
      </div>
      <div className="productGrid grid">
        {products.length > 0 ? (
          products.map(({ id, title, desc, price, images, actualPrice, ratingImg, rating, productDetails }) => (
            <Link key={id} to={"/productDetails"} className='productLink'>
              <div
                className="CPCard"
                onClick={() => handleProduct(id, title, desc, price, images, actualPrice, ratingImg, rating, productDetails)}
              >
                <div className="CPCardImg">
                  <img src={images[0]} alt={title} />
                </div>
                <h3 className="CPCardTitle">{title}</h3>
                <div className="CPRatingArea flexContainer">
                  <img src={ratingImg} className='ratingStar' alt="stars" />
                  <p>{rating}</p>
                </div>
                <div className="CPPriceArea flexContainer">
                  <p className="CPPrice">${price}</p>
                  {actualPrice && (
                    <p className="CPActualPrice">${actualPrice}</p>
                  )}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="noProductsMessage">No products match your filters. Try adjusting or clearing them.</p>
        )}
      </div>
    </section>
  )
}

export default CasualProduct
