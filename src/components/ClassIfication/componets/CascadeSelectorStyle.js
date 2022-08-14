import styled from "styled-components";


export  const CascadeSelectorBox = styled.div`
.adm-tree-select-column:nth-last-child(1) {
    width: 100%;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    /* height: 100%; */
    height: fit-content;
},
.adm-tree-select-column:nth-last-child(2) {
    overflow: hidden;
    overflow-y: scroll;
    height: 480px;
    /* box-shadow: 0px 1px 1px #999; */
}，
`

export  const CommodityBox = styled.div`
  display:flex
  column-gap: 5px;
  column-count: 2;
  padding: 10px 10px 10px 15px;
.item{
  width: 99%;
  break-inside: avoid;
  margin-bottom: 10px;
  /* border:1px solid #999; */
  box-shadow: 0px 0px 1px pink;
  img{
  width: 100%;
  border-radius: 5px;
  
}
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
    margin-bottom:0.2rem;
  }
  .adm-rate {
    --star-size: 12px;
  }

`
