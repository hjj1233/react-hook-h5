import styled from "styled-components";

const GridBox = styled.div`
/* margin-top:40px; */
/* background:#ccc; */
/* border:1px solid #ccc; */
.grid-demo-item-block {
 display:flex;
 flex-direction: column;
 align-items:center;
  text-align: center;
  width:100%;
  height: 100%;
  img {
    width:50px;
    object-fit:cover;
  }
  span {
    margin-top:5px;
    font-size:14px;
    /* color:#ccc; */
  }
}
`
export default GridBox