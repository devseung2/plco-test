import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Player = () => {
  return (
    <div css={playerContainer}>
      <div css={title}>😱 부상위험도 높은 선수 (20명)</div>
      <div css={subTitle}>기준 ・ 부상위험도(ACWR) 1.5 이상</div>
    </div>
  )
}

export default Player

const playerContainer = css({
  width: '343px',
  minHeight: '500px',
  padding: '16px',
  backgroundColor: '#FFFFFF',
  border: '1px solid #E4E9F2',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '8px',
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
