import React, { useEffect, useState } from 'react'
import "./filterStyle.css"
import { useDispatch, useSelector } from 'react-redux'
import { filterOpen } from "../../../../../features/stateSlice"
import {
  FILTER_CATEGORIES,
  FILTER_COLORS,
  FILTER_STYLES,
  MAX_PRODUCT_PRICE,
} from "../../../../../api/productFilterMeta"
import { defaultFilters } from "../../../../../utils/filterProducts"

const Filter = ({ appliedFilters, onApply }) => {
  const [draftFilters, setDraftFilters] = useState(appliedFilters)
  const openFilter = useSelector((state) => state.state.filOpen)
  const dispatch = useDispatch()

  useEffect(() => {
    setDraftFilters(appliedFilters)
  }, [appliedFilters])

  const updateDraft = (updates) => {
    setDraftFilters((prev) => ({ ...prev, ...updates }))
  }

  const toggleCategory = (category) => {
    updateDraft({
      category: draftFilters.category === category ? null : category,
    })
  }

  const toggleStyle = (style) => {
    updateDraft({
      style: draftFilters.style === style ? null : style,
    })
  }

  const toggleColor = (color) => {
    updateDraft({
      color: draftFilters.color === color ? null : color,
    })
  }

  const toggleSize = (size) => {
    updateDraft({
      size: draftFilters.size === size ? null : size,
    })
  }

  const handleApply = () => {
    onApply(draftFilters)
    dispatch(filterOpen({ filOpen: false }))
  }

  const handleClear = () => {
    setDraftFilters(defaultFilters)
    onApply(defaultFilters)
  }

  return (
    <>
      {openFilter && (
        <div
          className="filterOverlay"
          onClick={() => dispatch(filterOpen({ filOpen: false }))}
          aria-hidden="true"
        />
      )}
      <aside className={openFilter ? "filterSection show" : "filterSection"}>
        <div className="filterHeadingArea flexContainer">
          <h2 className='filterHeadings'>Filters</h2>
          <img
            className='filterArrowLeft'
            onClick={() => dispatch(filterOpen({ filOpen: false }))}
            width={30}
            height={30}
            src="arrowLeft.svg"
            alt="close filter"
          />
        </div>
        <hr className='filterLine' />
        <div className="filterLinks flexContainer">
          {FILTER_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className={`filterLinkBtn ${draftFilters.category === category ? 'filterActive' : ''}`}
              onClick={() => toggleCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <hr className='filterLine' />
        <div className="filterHeadingArea flexContainer">
          <h2 className='filterHeadings'>Price</h2>
        </div>
        <div className="rangeContainer">
          <input
            type="range"
            className="customRange"
            min={0}
            max={MAX_PRODUCT_PRICE}
            value={draftFilters.maxPrice}
            onChange={(e) => updateDraft({ maxPrice: Number(e.target.value) })}
          />
          <p className='rangeValue'>Up to ${draftFilters.maxPrice}</p>
        </div>
        <hr className='filterLine' />
        <div className="filterHeadingArea flexContainer">
          <h2 className='filterHeadings'>Colors</h2>
        </div>
        <div className="colorSelectArea">
          {FILTER_COLORS.map(({ id, label, hex }) => (
            <button
              key={id}
              type="button"
              className={`colorSwatch ${draftFilters.color === id ? 'colorSelected' : ''}`}
              style={{ backgroundColor: hex }}
              title={label}
              aria-label={label}
              onClick={() => toggleColor(id)}
            />
          ))}
        </div>
        <hr className='filterLine' />
        <div className="filterHeadingArea flexContainer">
          <h2 className='filterHeadings'>Size</h2>
        </div>
        <div className="sizeSelectArea">
          <button type="button" onClick={() => toggleSize("xxSmall")} className={`sizeBtn ${draftFilters.size === "xxSmall" ? "xxSmall" : ""}`}>XX-Small</button>
          <button type="button" onClick={() => toggleSize("xSmall")} className={`sizeBtn ${draftFilters.size === "xSmall" ? "xSmall" : ""}`}>X-Small</button>
          <button type="button" onClick={() => toggleSize("small")} className={`sizeBtn ${draftFilters.size === "small" ? "small" : ""}`}>Small</button>
          <button type="button" onClick={() => toggleSize("mdm")} className={`sizeBtn ${draftFilters.size === "mdm" ? "mdm" : ""}`}>Medium</button>
          <button type="button" onClick={() => toggleSize("large")} className={`sizeBtn ${draftFilters.size === "large" ? "large" : ""}`}>Large</button>
          <button type="button" onClick={() => toggleSize("xl")} className={`sizeBtn ${draftFilters.size === "xl" ? "xl" : ""}`}>X-Large</button>
          <button type="button" onClick={() => toggleSize("xxl")} className={`sizeBtn ${draftFilters.size === "xxl" ? "xxl" : ""}`}>XX-Large</button>
          <button type="button" onClick={() => toggleSize("xxxl")} className={`sizeBtn ${draftFilters.size === "xxxl" ? "xxxl" : ""}`}>3X-Large</button>
          <button type="button" onClick={() => toggleSize("xxxxl")} className={`sizeBtn ${draftFilters.size === "xxxxl" ? "xxxxl" : ""}`}>4X-Large</button>
        </div>
        <hr className='filterLine' />
        <div className="filterHeadingArea flexContainer">
          <h2 className='filterHeadings'>Dress Style</h2>
        </div>
        <div className="filterLinks flexContainer">
          {FILTER_STYLES.map((style) => (
            <button
              key={style}
              type="button"
              className={`filterLinkBtn styleBtn ${draftFilters.style === style ? 'filterActive' : ''}`}
              onClick={() => toggleStyle(style)}
            >
              {style}
            </button>
          ))}
        </div>
        <button type="button" className='apllyFilterBtn' onClick={handleApply}>Apply Filter</button>
        <button type="button" className='clearFilterBtn' onClick={handleClear}>Clear All</button>
      </aside>
    </>
  )
}

export default Filter
