
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
        color: red;
`

    const Text = (props) =>{
        return(
            <StyledWrapper>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                
            </StyledWrapper>
        )
    }

export default Text;