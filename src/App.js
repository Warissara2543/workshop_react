import WordCard from './components/WordCard'
import { Button, Input, Select, Row, Col } from 'antd';
import styled from 'styled-components';
import { useState } from 'react';

const StyledWrapper = styled.div`
  padding: 30px;

  @media(max-width){
    padding: 20px 0;
  }

  .select{
    min-width:100%;
  }

  .word{
    margin-bottom:10px;
    font-weight:bold;
  }

  .types{
    margin-bottom:10px;
  }

  .types label{
    font-weight: bold;
  }

  .meaning{
    margin-bottom:10px;
    font-weight:bold;
  }

  #botton{
    margin-bottom:10px;
  }
`

const typesOption = [
  { label: 'noun', value: 'noun' },
  { label: 'verd', value: 'verd' },
  { label: 'adjective', value: 'adjective' },
  { label: 'adverd', value: 'adverd' },
]

function App() {

  const vocab = [{ "meanings": ["มาพร้อมกับ"], "word": "Accompany", "createdAt": "2020-11-15T11:56:52.792Z", "types": ["verb"] }, { "meanings": ["การเข้าซื้อกิจการ", "การเข้าถือสิทธิ์", "การครอบครอง"], "types": ["noun"], "createdAt": "2020-11-17T06:39:36.046Z", "word": "acquisition" }, { "word": "complaint", "meanings": ["การร้องเรียน", "การร้องทุกข์", "การคร่ำครวญ"], "types": ["noun"], "createdAt": "2020-11-17T07:05:40.824Z" }, { "word": "complying", "types": ["noun"], "createdAt": "2020-11-17T07:08:25.211Z", "meanings": ["การยอมตาม", "การยินยอม", "การปฏิบัติตาม"] }, { "createdAt": "2020-11-17T05:40:43.548Z", "word": "correspondence", "types": ["noun"], "meanings": ["จดหมายโต้ตอบ", "ความเหมือนกัน"] }, { "word": "delegate", "meanings": ["ตั้งตัวแทน", "มอบหน้าที่"], "types": ["verb"], "createdAt": "2020-11-16T16:44:23.992Z" }, { "types": ["verb"], "word": "deserve", "meanings": ["สมน้ำสมเนื้อ", "สมควรได้รับ"], "createdAt": "2020-11-16T16:41:43.017Z" }, { "meanings": ["พยายาม", "มุมานะ", "อุตส่าห์"], "word": "endeavor", "types": ["verb"], "createdAt": "2020-11-17T06:03:36.413Z" }, { "types": ["verb"], "word": "engage", "createdAt": "2020-11-17T05:57:17.307Z", "meanings": ["มีส่วนร่วม", "ว่าจ้าง"] }, { "createdAt": "2020-11-17T07:06:42.122Z", "types": ["noun"], "word": "grievance", "meanings": ["ความไม่พอใจ", "ความเศร้าโศก", "ความขัดข้องใจ"] }, { "types": ["adverb"], "meanings": ["โดยนัยนี้", "ด้วยเหตุนี้", "โดยวิธีนี้"], "createdAt": "2020-11-17T05:37:12.526Z", "word": "hereby" }, { "types": ["adjective"], "createdAt": "2020-11-15T11:56:25.637Z", "meanings": ["ถูกต้องตามกฎหมาย"], "word": "legitimate" }, { "word": "merger", "meanings": ["การควบรวบกิจการ"], "createdAt": "2020-11-17T06:38:39.071Z", "types": ["noun"] }, { "word": "meticulous", "createdAt": "2020-11-17T07:47:36.831Z", "types": ["adjective"], "meanings": ["พิถีพิถัน", "เข้มงวด", "กวดขัน"] }, { "createdAt": "2020-11-17T06:05:44.594Z", "types": ["noun"], "meanings": ["ขั้นตอน", "กระบวนการ", "ระเบียบการ"], "word": "procedure" }, { "meanings": ["พิถีพิถัน", "แม่นยำ", "รุนแรง"], "word": "rigorous", "createdAt": "2020-11-17T07:49:20.488Z", "types": ["adjective"] }]
  // const [number, setNumber] = useState(1);
  const [dataList, setDataList] = useState(vocab);

  const [word, setWord] = useState('');
  const [types, settypes] = useState('');
  const [meanings, setMeaning] = useState('');

  const handleClick = () => {
    setDataList([...dataList, {
      word: word,
      types: types,
      meanings: meanings.split(",").map((item) => item.trim())
    }]);
  }

  console.log(word);

  return (

    <StyledWrapper className="App">

      <h1>My Vocab</h1>

      {/* word */}
      <div class="word">
        <div>
          <div>
            <label htmlFor='word_input'>Word</label>
          </div>
          <Input id="word_input" placeholder="Enter Word" onChange={(e) => { setWord(e.target.value) }} />
        </div>
      </div>

      {/* types */}
      <div class="types">
        <div>
          <div>
            <label htmlFor='selected-types'>Types</label>
          </div>
          <Select id="selected-types" className="select" id="selected-types" options={typesOption} mode="multiple" placeholder="Select"
            onChange={(values) => { settypes(values) }}
          />
        </div>
      </div>

      {/* Meaning */}
      <div class="meaning">
        <div>
          <div>
            <label htmlFor='meaning-input'>Meaning</label>
          </div>
          <Input id="meaning-input" placeholder="Enter Meaning" onChange={(e) => { setMeaning(e.target.value) }} />
        </div>
      </div>

      <Button id="botton" onClick={handleClick}>Add Vocab</Button>

      <Row gutter={[16, 16]}>
        {dataList.map((item, index) => {
          return (
            <Col key={index} xs={24} md={16} lg={8} span={6}>
              <WordCard {...item} />
            </Col>
          )
        })}
      </Row>

    </StyledWrapper>
  );
}

export default App;