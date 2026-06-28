import React, { useMemo, useState } from 'react'
import "./casualStyle.css"
import Filter from './casualPageCompo/filterComp/Filter'
import CasualProduct from './casualPageCompo/casualProductArea/CasualProduct'
import productApi from '../../../api/productApi'
import { defaultFilters, filterProducts } from '../../../utils/filterProducts'

const CasualPage = () => {
  const [appliedFilters, setAppliedFilters] = useState(defaultFilters)

  const filteredProducts = useMemo(
    () => filterProducts(productApi, appliedFilters),
    [appliedFilters]
  )

  return (
    <main className='pageCasual'>
      <div className='container grid casualContainer'>
        <Filter appliedFilters={appliedFilters} onApply={setAppliedFilters} />
        <CasualProduct products={filteredProducts} />
      </div>
    </main>
  )
}

export default CasualPage
