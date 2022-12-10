/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const reset = css({
  '*': {
    boxSizing: 'border-box',
  },
  'html, body': {
    width: '100%',
    height: '100%',
    margin: '0',
    padding: '0',
    fontFamily: 'Noto Sans KR',
    fontSize: '16px',
    color: 'black',
  },
  'p, ul, li ': {
    margin: '0',
    padding: '0',
  },
  'li ': {
    listStyle: 'none',
  },
})

export default reset
