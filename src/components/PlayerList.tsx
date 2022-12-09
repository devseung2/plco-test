import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { playerListInfoTypes } from '../constants/types'

type Props = {
  playerList: playerListInfoTypes[]
  limit: number
}

const PlayerList = ({ playerList, limit }: Props) => {
  return (
    <div css={[playerListContainer, playerListHeight(limit)]}>
      {playerList.map((playerInfo, index) => {
        return (
          <div css={playerItemWrap} key={index}>
            {playerInfo.user.pictureUrl ? (
              <div css={[commonPlayerPicture, playerPicture(playerInfo.user.pictureUrl)]}></div>
            ) : (
              <div css={[commonPlayerPicture, playerisNotPicture]}>{playerInfo.user.name[0]}</div>
            )}
            <div css={playerInfoWrap}>
              <div className="name">{playerInfo.user.name}</div>
              <div className="position">{playerInfo.user.position}</div>
            </div>
            <div css={acwrWrap}>{playerInfo.acwr.toFixed(1)}</div>
          </div>
        )
      })}
    </div>
  )
}

export default PlayerList

const listHeight = 54
const listMarginBottom = 8

const playerListContainer = css({
  marginTop: '16px',
})

const playerListHeight = (limit: number) =>
  css({
    height: `${(listHeight + listMarginBottom) * limit}px`,
  })

const playerItemWrap = css({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  height: `${listHeight}px`,
  marginBottom: `${listMarginBottom}px`,
  padding: '6px 8px',
})

const commonPlayerPicture = css({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
})

const playerPicture = (image: string) =>
  css({
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  })

const playerisNotPicture = css({
  display: 'flex',
  justifyContent: ' center',
  alignItems: 'center',
  backgroundColor: '#EDF1F7',
  fontWeight: 700,
  fontSize: '14px',
  color: '#8F9BB3',
})

const playerInfoWrap = css({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  marginLeft: '16px',

  'div.name': {
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#222B45',
  },
  'div.position': {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '18px',
    color: '#8F9BB3',
  },
})

const acwrWrap = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  right: '8px',
  width: '36px',
  height: '23px',
  backgroundColor: '#F9D1CA',
  border: '1px solid #F2A496',
  borderRadius: '43px',
  fontWeight: 400,
  fontSize: '14px',
  color: '#E6492D',
})
