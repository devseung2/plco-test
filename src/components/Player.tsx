import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import PlayerList from 'components/PlayerList'
import Pagination from 'components/Pagination'
import { playerListInfoTypes, pageInfoTypes } from 'constants/types'
import DEFAULT_DATA from 'player.json'

const DEFAULT_PAGE_INFO = {
  limit: 5,
  pageNum: 0,
  hasNext: false,
  hasPrev: false,
  acwr: 1.5,
}

type Props = {
  limit: number
  acwr: number
}

const Player = ({ limit, acwr }: Props) => {
  const [playerListInfo, setPlayerListInfo] = useState<playerListInfoTypes[]>([])
  const [playerTotal, setPlayerTotal] = useState(0)
  const [pageInfo, setPageInfo] = useState<pageInfoTypes>(Object.assign({}, DEFAULT_PAGE_INFO))
  const [playerList, setPlayerList] = useState<playerListInfoTypes[]>([])

  useEffect(() => {
    const { limit, entries } = DEFAULT_DATA

    const entriesByDesc = entries.filter((playerInfo) => playerInfo.acwr >= pageInfo.acwr).sort((a, b) => b.acwr - a.acwr)

    setPlayerListInfo(entriesByDesc)
    setPlayerTotal(entriesByDesc.length)
    setPageInfo((prev) => ({ ...prev, limit, pageNum: 1 }))
  }, [])

  useEffect(() => {
    setPageBtn()
  }, [playerTotal])

  useEffect(() => {
    setPageInfo((prev) => ({ ...prev, pageNum: 1, limit, acwr }))
  }, [limit, acwr])

  useEffect(() => {
    getPlayerList()
  }, [pageInfo.acwr, pageInfo.limit, pageInfo.pageNum])

  const getPlayerList = () => {
    const { entries } = DEFAULT_DATA
    const filteredPlayerList = entries.filter((playerInfo) => playerInfo.acwr >= pageInfo.acwr).sort((a, b) => b.acwr - a.acwr)
    const searchRange = (pageInfo.pageNum - 1) * pageInfo.limit

    setPlayerList(filteredPlayerList.slice(searchRange, searchRange + pageInfo.limit))
    setPlayerTotal(filteredPlayerList.length)
    setPageBtn()
  }

  const setPageBtn = () => {
    let _hasNext = false
    let _hasPrev = false

    if (pageInfo.pageNum < getLastPageNum()) _hasNext = true
    if (pageInfo.pageNum > 1) _hasPrev = true

    setPageInfo((prev) => ({ ...prev, hasPrev: _hasPrev, hasNext: _hasNext }))
  }

  const movePage = (operation: number) => setPageInfo({ ...pageInfo, pageNum: pageInfo.pageNum + operation })
  const getLastPageNum = () => Math.ceil(playerTotal / pageInfo.limit)

  return (
    <div css={playerContainer}>
      <div css={mainWrap}>
        <div css={title}>???? ??????????????? ?????? ?????? ({playerTotal}???)</div>
        <div css={subTitle}>?????? ??? ???????????????(ACWR) {pageInfo.acwr.toFixed(1)} ??????</div>
        {playerList.length > 0 && <PlayerList playerList={playerList} limit={pageInfo.limit} />}
        {playerTotal && (
          <div css={paginationNumWrap}>
            <span className="active">{pageInfo.pageNum}</span>
            <span className="crossLine">/</span>
            <span>{getLastPageNum()}</span>
          </div>
        )}
      </div>
      <div css={divider} />
      <Pagination hasNext={pageInfo.hasNext} hasPrev={pageInfo.hasPrev} movePage={movePage} />
    </div>
  )
}

export default Player

const playerContainer = css({
  position: 'relative',
  width: '343px',
  minHeight: '500px',
  marginBottom: '32px',
  paddingBottom: '64px',
  backgroundColor: '#FFFFFF',
  border: '1px solid #E4E9F2',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '8px',
})

const mainWrap = css({
  padding: '16px',
})

const title = css({
  paddingTop: '8px',
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '30px',
  color: '#222B45',
})

const subTitle = css({
  marginTop: '4px',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '18px',
  color: '#8F9BB3',
})

const paginationNumWrap = css({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  fontWeight: 700,
  fontSize: '12px',
  lineHeight: '18px',

  span: {
    color: '#C5CEE0',
  },

  'span.crossLine': {
    margin: '0 4px',
  },

  'span.active': {
    color: '#222B45',
  },
})

const divider = css({
  width: '100%',
  height: '1px',
  backgroundColor: '#EDF1F7',
})
