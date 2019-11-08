import React from 'react';
import styled from 'styled-components';


const Btn = styled.a`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 11rem;
background: transparent;
color: balck;
border: 2px solid black;
text-decoration: none;

&:visited, &:link {
  color: black;
}

&:active {
  color: green;
  background-color: pink;
}`;

const Button = (props) => {
  const { random, setFilter, getSearchResults } = props;

  const handleButton = (v) => {
    setFilter(v);
    getSearchResults();
  };

  return (
    <div>
      <Btn
        href="#"
        onClick={() => handleButton('random')}
      >
        {random}
      </Btn>
    </div>
  );
};


export default Button;
