import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Player from 'components/Player'
import Filter from 'components/Filter'

import { filterTypes } from 'constants/types'

const DEFAULT_FILTER = {
  acwr: 1.5,
  limit: 5,
}

const Home = () => {
  const [filterInfo, setFilterInfo] = useState<filterTypes>(Object.assign({}, DEFAULT_FILTER))

  return (
    <div css={homeContainer}>
      <Filter filterInfo={filterInfo} setFilterInfo={setFilterInfo} />
      <Player {...filterInfo} />
    </div>
  )
}

export default Home

const homeContainer = css({
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minWidth: '400px',
  minHeight: '600px',
})
