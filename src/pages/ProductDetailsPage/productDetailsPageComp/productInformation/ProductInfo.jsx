import React, { useRef, useState } from 'react'
import "./productInfoStyles.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { reviews, FAQs } from '../../../../api/HomePageProducts';
import { useSelector } from 'react-redux';

const ProductSecNav = () => {
  const [activeSec, setActiveSec] = useState("selectDetails")
  const [openFaqId, setOpenFaqId] = useState(null)
  const productArr = useSelector((state) => state.product)
  const details = productArr[0]?.productDetails

  const swiperRef = useRef(null);

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id)
  }

  return (
    <>
      <section className='productNav'>
        <div className="container flexContainer">
          <button onClick={() => { goToSlide(0); setActiveSec("selectDetails") }} className={`productDetails navBarProduct ${activeSec === "selectDetails" && "selectDetails"}`}>
            Product Details
          </button>
          <button onClick={() => { goToSlide(1); setActiveSec("selectReview") }} className={`productReview navBarProduct ${activeSec === "selectReview" && "selectReview"}`}>
            Rating & Review
          </button>
          <button onClick={() => { goToSlide(2); setActiveSec("selectFAQs") }} className={`productFAQ  navBarProduct ${activeSec === "selectFAQs" && "selectFAQs"}`}>
            FAQs
          </button>
        </div>
      </section>
      <Swiper
        onSwiper={(Swiper) => { swiperRef.current = Swiper }}
        spaceBetween={0}
        className="productDetailsSlide"
      >
        <SwiperSlide>
          <div className="container detailsSlide">
            {details ? (
              <div className="productDetailsContent">
                <h3 className='reviewHeading'>Product Specifications</h3>
                <div className="specificationsGrid grid">
                  {details.specifications.map(({ label, value }) => (
                    <div key={label} className="specItem">
                      <span className="specLabel">{label}</span>
                      <span className="specValue">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="detailsInfoGrid grid">
                  <div className="detailsInfoCard">
                    <h4 className="detailsSubHeading">Material</h4>
                    <p>{details.material}</p>
                  </div>
                  <div className="detailsInfoCard">
                    <h4 className="detailsSubHeading">Fit</h4>
                    <p>{details.fit}</p>
                  </div>
                  <div className="detailsInfoCard">
                    <h4 className="detailsSubHeading">Origin</h4>
                    <p>{details.origin}</p>
                  </div>
                </div>

                <h4 className="detailsSubHeading">Key Features</h4>
                <ul className="featuresList">
                  {details.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <div className="careInstructions">
                  <h4 className="detailsSubHeading">Care Instructions</h4>
                  <p>{details.careInstructions}</p>
                </div>
              </div>
            ) : (
              <p className="noDetailsText">Select a product to view its details.</p>
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container reviewSlide">
            <div className="reviewNavArea flexContainer">
              <h3 className='reviewHeading'>All Review</h3>
            </div>
            <div className="reviewArea grid">
              {reviews.map(({ date, title, starImg, desc, markImg }, index) => (
                <div key={index} className='reviewCard'>
                  <div className="ratingOptions flexCOntainer">
                    <img src={starImg} alt="starImg" />
                  </div>
                  <div className='titleArea flexContainer'>
                    <h2 className='reviewTitle'>{title}</h2>
                    <img src={markImg} alt="verified" />
                  </div>
                  <p className='description'>{desc}</p>
                  <p className='date'>Posted on {date}</p>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container FAQsSlide">
            <div className='faqHeadArea'>
              <h3 className='reviewHeading'>FAQs</h3>
              <p className="faqSubText">frequently asked questions</p>
            </div>
            <div className="grid faqArea">
              {FAQs.map(({ id, question, answer }) => (
                <div key={id} className={`faqCard ${openFaqId === id ? 'faqOpen' : ''}`}>
                  <button className="faqQuestion" onClick={() => toggleFaq(id)}>
                    <span>{question}</span>
                    <span className="faqToggle">{openFaqId === id ? '−' : '+'}</span>
                  </button>
                  {openFaqId === id && (
                    <p className="faqAnswer">{answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ProductSecNav
