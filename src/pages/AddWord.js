import { useState, useContext } from 'react'
import styled from 'styled-components';
import { Button, Input, Select, Row, Col, notification } from 'antd';
import { Link, useHistory } from "react-router-dom"
import AppContext from '../context/AppContext';

const StyledWrapper = styled.div`
    padding:20px;
    

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
`

const typesOption = [
    { label: 'noun', value: 'noun' },
    { label: 'verd', value: 'verd' },
    { label: 'adjective', value: 'adjective' },
    { label: 'adverd', value: 'adverd' },
]

function AddWord() {

    const history = useHistory();

    const { vocapController } = useContext(AppContext);
    const { vocabs, setVocabs, addVocabs} = vocapController;

    const handleClick = () => {
        
        addVocabs(word,types,meanings);

        notification["success"]({
            message: 'Success',
            description: 'Add word success'
        });
        
        history.push('/');

    }

    const [word, setWord] = useState('');
    const [types, settypes] = useState([]);
    const [meanings, setMeaning] = useState('');

    return (
        <StyledWrapper>

            <div>

                <h1>My Vocab</h1>

                {/* word */}
                <div className="word">
                    <div>
                        <div>
                            <label htmlFor='word_input'>Word</label>
                        </div>
                        <Input id="word_input" placeholder="Enter Word" onChange={(e) => { setWord(e.target.value) }} />
                    </div>
                </div>

                {/* types */}
                <div className="types">
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
                <div className="meaning">
                    <div>
                        <div>
                            <label htmlFor='meaning-input'>Meaning</label>
                        </div>
                        <Input id="meaning-input" placeholder="Enter Meaning" onChange={(e) => { setMeaning(e.target.value) }} />
                    </div>
                </div>

                <Button id="botton" type="primary" onClick={handleClick}>Add Vocab</Button>

            </div>

        </StyledWrapper>
    )
}

export default AddWord
