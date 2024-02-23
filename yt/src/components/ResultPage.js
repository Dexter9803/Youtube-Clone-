import React, { useEffect } from 'react'
import ResultVideoContainer from './ResultVideoContainer.js'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice.js'


const SearchPage = () => {

  const [searchQuery] = useSearchParams()

  return (
    <div className='flex items-center justify-center'>
        <ResultVideoContainer searchQuery={searchQuery}/>
    </div>
    
  )
}

export default SearchPage