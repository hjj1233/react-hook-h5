import React, { useRef } from 'react'
import { Button, Space, Swiper, Toast } from 'antd-mobile'
// import { DemoBlock, DemoDescription } from 'demos'
import { ContentBox } from './CarouselStyle.js'
import { SwiperRef } from 'antd-mobile/es/components/swiper'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const foodsImg = ['foods_1.jpg', 'foods_2.jpg', 'foods_3.jpg', 'foods_4.jpg']

const items = foodsImg.map((item, index) => (
  <Swiper.Item key={index}>
    <ContentBox>
      <img src={require(`../../assets/${item}`)} alt="美食" />
    </ContentBox>
  </Swiper.Item>
))

const CarouselBox = () => {
  const ref = useRef(null)
  return (
    <>
      {/* <DemoBlock title="自动播放"> */}
      <Swiper loop autoplay>
        {items}
      </Swiper>
      {/* </DemoBlock> */}
    </>
  )
}
export default CarouselBox
