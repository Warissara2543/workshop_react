import React from 'react'
import styled from 'styled-components';
import {DeleteOutlined} from '@ant-design/icons'

const StyledWrapper = styled.div`
  box-shadow:0 0 4px 0 rgba(0,0,0,.5);
  border-radius:4px;
  margin-top: 20px;
  margin-left: 15px;
  padding: 10px;
  height:90px;
  width:290px;
  /* text-align:center; */

  .titleCard{
      display:flex;
      /* จัดให้อยู่ห่างกัน */
      justify-content:space-between;
      /* จัดให้ถังขยะมันตรงกับบรรทัด */
      align-items:center;
  }

  .botton_delete{
      color: red;
      cursor: pointer;
  }
`


const WordCard = (props) => {
    return (
        <StyledWrapper>

            <div className="titleCard">

                <div>
                    <b>{props.word} <span>({props.types.join(",")})</span></b>
                </div>
                
                <DeleteOutlined className="botton_delete"/>

            </div>

            <div>
                "{props.meanings.join(",")}"
            </div>

        </StyledWrapper>
    )
}

export default WordCard
