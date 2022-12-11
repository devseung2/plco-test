import React, { useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { pageInfoTypes } from 'constants/types'

import leftBtnIcons from 'assets/icons/left-arrow.svg'
import leftBtnActiveIcons from 'assets/icons/left-arrow-active.svg'
import rightBtnIcons from 'assets/icons/right-arrow.svg'
import rightBtnActiveIcons from 'assets/icons/right-arrow-active.svg'

type PropsTypes = {
  hasPrev: boolean
  hasNext: boolean
  movePage: (pageNum: number) => void
}

const Pagination = ({ hasPrev, hasNext, movePage }: PropsTypes) => {
  return (
    <div css={pageSelectWrap}>
      <button css={[pageMoveBtn, prevBtn, hasPrev && activePageMoveBtn]} onClick={() => hasPrev && movePage(-1)}>
        <img src={hasPrev ? leftBtnActiveIcons : leftBtnIcons} alt="left move btn" />
      </button>
      <button css={[pageMoveBtn, nextBtn, hasNext && activePageMoveBtn]} onClick={() => hasNext && movePage(1)}>
        <img src={hasNext ? rightBtnActiveIcons : rightBtnIcons} alt="right move btn" />
      </button>
    </div>
  )
}

export default Pagination

const pageSelectWrap = css({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  right: '0',
  width: '100px',
  height: '32px',
  marginTop: '16px',
  marginRight: '16px',
})

const pageMoveBtn = css({
  color: '#C5CEE0',
  border: 'none',
  background: 'transparent',
  padding: 0,
})

const pageMoveBtnPosition = 12.42

const prevBtn = css({
  position: 'absolute',
  left: `${pageMoveBtnPosition}px`,
})

const nextBtn = css({
  position: 'absolute',
  right: `${pageMoveBtnPosition}px`,
})

const activePageMoveBtn = css({
  color: '#222B45',
  cursor: 'pointer',
})
