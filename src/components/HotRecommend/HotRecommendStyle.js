import styled from "styled-components";


const HotRecomendBox = styled.div`
.grid-demo-item-block {
  box-shadow:0 1px 1px  #999;
  box-sizing: border-box;
  height: 100%;
  overflow:hidden;
  padding:0.3rem 0;
  img {
    width:200px;
    object-fit:cover;
  }
  .price {
    font-size:14px;
    color:red;
  }
  .text {
    margin-top:0.2rem;
    margin-bottom:0.2rem;
    overflow:hidden;
    white-space:nowrap;
    /*文字超出宽度则显示ellipsis省略号*/
    text-overflow:ellipsis;
    width:100%;
  }
  .hot {
    margin-bottom:0.2rem;
  }
  .numberStyle {
    color:#ccc
  }
  .goodstyle {
    color: pink;
  }
}
`

export default HotRecomendBox;