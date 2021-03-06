import React from 'react'
import styled from 'styled-components';
import { DeleteOutlined } from '@ant-design/icons'

const StyledWrapper = styled.div`
  box-shadow:0 0 4px 0 rgba(0,0,0,.5);
  border-radius:4px;
  padding: 10px;
  background-color:white;

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
    const formatDate = props.createAt ? props.createAt.toLocaleDateString('th-TH', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }) : "";

    return (
        <StyledWrapper>

            <div className="titleCard">

                <div>
                    <b>{props.word} <span>({props.types.join(",")})</span></b>
                </div>

                <DeleteOutlined className="botton_delete" onClick={props.onDelete} />

            </div>

            <div>
                "{props.meanings}"
            </div>
            <div>
                Date: {formatDate}
            </div>

        </StyledWrapper>
    )
}

export default WordCard
