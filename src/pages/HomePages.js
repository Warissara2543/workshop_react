import WordCard from '../components/WordCard'
import { Button, Input, Select, Row, Col } from 'antd';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { Link } from "react-router-dom"
import bg from './assets/picture.jpg';
import AppContext from '../context/AppContext';

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
`

const typesOption = [
  { label: 'noun', value: 'noun' },
  { label: 'verd', value: 'verd' },
  { label: 'adjective', value: 'adjective' },
  { label: 'adverd', value: 'adverd' },
]

function HomePages() {

  const {vocapController} = useContext(AppContext);
  const {vocabs,deleteVocabs} = vocapController;
  const [word, setWord] = useState('');
  const [types, settypes] = useState([]);
  const [meanings, setMeaning] = useState('');

  return (

    <StyledWrapper className="HomePages">

      <h1>My Vocab</h1>

      <Row gutter={[16, 16]}>
        {vocabs.map((item, index) => {
          return (
            <Col key={index} xs={24} md={16} lg={8} span={6}>
              <WordCard {...item} onDelete={() => { deleteVocabs(index) }} />
            </Col>
          )
        })}
      </Row>

    </StyledWrapper>
  );
}

export default HomePages;