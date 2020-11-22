import WordCard from '../components/WordCard'
import { Button, Input, Select, Row, Col } from 'antd';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { Link } from "react-router-dom"
import bg from './assets/picture.jpg';
import AppContext from '../context/AppContext';
import { Loading3QuartersOutlined } from '@ant-design/icons';

const StyledWrapper = styled.div`
  padding: 30px;
  background-image: url('${bg}');
  background-size: 100%;

  h1{
    color:white;
    font-weight:bold;
  }
  @media(max-width){
    padding: 20px 0;
  }

  .spin{
    color:red;
  }
`

const typesOption = [
  { label: 'noun', value: 'noun' },
  { label: 'verd', value: 'verd' },
  { label: 'adjective', value: 'adjective' },
  { label: 'adverd', value: 'adverd' },
]

function HomePages() {

  const { vocapController } = useContext(AppContext);
  const { vocabs, deleteVocabs } = vocapController;

  const renderVocabs = () => {
    if (!vocabs) {
      return <Loading3QuartersOutlined className="spin" spin={true} />
    }
    else if (vocabs.length <= 0) {
      return <p>No data</p>
    }
    else {
      return vocabs.map((item, index) => {
        return (
          <Col key={index} xs={24} md={16} lg={8} span={6}>
            <WordCard {...item} onDelete={() => { deleteVocabs(index) }} />
          </Col>
        )
      })
    }
  }


  return (

    <StyledWrapper>

      <div className="card-home">

      </div>

      <h1>My Vocab</h1>

      <Row gutter={[16, 16]}>
        {renderVocabs()}
      </Row>

    </StyledWrapper>
  );
}

export default HomePages;