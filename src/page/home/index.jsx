import React from 'react'
import CarouselBox from '../../components/Carousel'
import Search from '../../components/search'
import HotProduct from '../../components/HotProduct'
import HotRecommend from '../../components/HotRecommend'
import Notice from '../../components/Notice'
export default function Home() {
  return (
    <div>
      <CarouselBox />
      <Search />
      <Notice />
      <HotProduct />
      <HotRecommend />
    </div>
  )
}
