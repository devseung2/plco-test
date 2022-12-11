import React, { useState, useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { filterTypes } from 'constants/types'

const FILTER_LIST = [
  { name: '부상위험도(ACWR)', type: 'acwr' },
  { name: '리스트 수', type: 'limit' },
]
const FILTER_ACWR_LIST = [0.5, 1.0, 1.5, 2.0]
const FILTER_LIMIT_LIST = [5, 10, 15, 20]

type Props = {
  filterInfo: filterTypes
  setFilterInfo: (filterInfo: any) => void
}

const Filter = ({ filterInfo, setFilterInfo }: Props) => {
  const [isOpenAcwr, setIsOpenAcwr] = useState(false)
  const [isOpenLimit, setIsOpenLimit] = useState(false)

  useEffect(() => {
    clearOpenFilter()
  }, [filterInfo])

  const selectFilter = (type: string) => {
    clearOpenFilter()

    type === 'acwr' ? setIsOpenAcwr(!isOpenAcwr) : setIsOpenLimit(!isOpenLimit)
  }

  const clearOpenFilter = () => {
    setIsOpenAcwr(false)
    setIsOpenLimit(false)
  }

  const renderFilterList = () => {
    return FILTER_LIST.map((filterObj, index) => {
      const className = `filter-item ${filterObj.type === 'limit' && 'left-item'}`

      return (
        <div className={className} onClick={() => selectFilter(filterObj.type)} key={index}>
          {filterObj.name} : {filterInfo[filterObj.type]}
        </div>
      )
    })
  }

  const renderSelectList = (type: string) => {
    const LIST = type === 'acwr' ? [...FILTER_ACWR_LIST] : [...FILTER_LIMIT_LIST]

    return (
      <div css={[openedFilterList, type === 'acwr' && acwrList]}>
        {LIST.map((value, index) => {
          return (
            <div css={filterItem} onClick={() => setFilterInfo((prev: any) => ({ ...prev, [type]: value }))} key={index}>
              {value}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div css={filterWrap}>
      {renderFilterList()}
      {(isOpenAcwr && renderSelectList('acwr')) || (isOpenLimit && renderSelectList('limit'))}
    </div>
  )
}

export default Filter

const filterItemGap = 10

const filterWrap = css({
  display: 'flex',
  position: 'relative',
  width: '343px',
  marginTop: '32px',
  marginBottom: '10px',

  'div.filter-item': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: `calc(50% - ${filterItemGap}px)`,
    height: '40px',
    border: '1px solid #E4E9F2',
    borderRadius: 4,
    color: '#8F9BB3',
    cursor: 'pointer',
    fontSize: '14px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',

    '&.left-item': {
      marginLeft: `${filterItemGap * 2}px`,
    },
  },
})

const openedFilterList = css({
  position: 'absolute',
  top: '46px',
  right: 0,
  zIndex: 1,
  width: `calc(50% - ${filterItemGap}px)`,
  backgroundColor: '#fff',
  borderRadius: 4,
  border: '1px solid #E4E9F2',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.10)',
})

const filterItem = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '40px',
  cursor: 'pointer',
  fontSize: '14px',
  color: '#8F9BB3',

  '&:not(:nth-of-type(1))': {
    borderTop: '1px solid #E4E9F2',
  },
})

const acwrList = css({
  right: 'auto',
  left: 0,
})
