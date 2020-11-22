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

  .input-search{
    margin-bottom:20px;
    width: 300px;
    display:flex;
    justify-content:center;
    align-items:center;
    position: absolute;
    right:28px;

    font-weight:bold;
  }

  .card-home{
    display:flex;
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

  const [search, setSearch] = useState('');

  const renderVocabs = () => {
    if (!vocabs) {
      return <Loading3QuartersOutlined className="spin" spin={true} />
    }
    else if (vocabs.length <= 0) {
      return <p>No data</p>
    }
    else {
      return vocabs
        .filter((item) => {
          return item.word.indexOf(search) >= 0
        })
        .sort((a, b) => {
          return a.createAt.valueOf() - b.createAt.valueOf()
        }).map((item, index) => {
          return (
            <Col key={index} xs={24} md={16} lg={8} span={6}>
              <WordCard {...item} onDelete={() => { deleteVocabs(item.word) }} />
            </Col>
          )
        })
    }
  }


  return (

    <StyledWrapper>

      <div className="card-home">

        <h1>My Vocab</h1>
        
        <Input.Search className="input-search" placeholder="Search Word..." onChange={e => setSearch(e.target.value)} />

      </div>

      
      <Row gutter={[16, 16]}>
        {renderVocabs()}
      </Row>

    </StyledWrapper>
  );
}

export default HomePages;