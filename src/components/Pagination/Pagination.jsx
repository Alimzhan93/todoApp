import React from 'react'

export const Pagination = ({numberArr}) => {
  return (
    <div>
        {numberArr.map(item => <button>{item}</button>)}
    </div>
  )
}
export default Pagination