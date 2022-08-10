import React from 'react'
import { NoticeBar, Space } from 'antd-mobile'
import NoticeBox from './NoticeStyle'

// const demoLongText = lorem.generateWords(20)

export default function Notice() {
  return (
    <NoticeBox>
      <NoticeBar
        content={
          '特大消息，特大消息，全场满50元打99.99折，送5张价值100元的优惠券，活动仅限当天，走过路过千万不要错过。'
        }
        color="alert"
      />
    </NoticeBox>
  )
}
