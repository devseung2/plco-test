import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Player from '../components/Player'

const Home = () => {
  return (
    <div css={homeContainer}>
      <Player />
    </div>
  )
}

export default Home

const homeContainer = css({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '400px',
  minHeight: '600px',
})
