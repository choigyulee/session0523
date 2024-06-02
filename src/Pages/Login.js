//Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;

  @media all and (min-width:769px) and (max-width:1023px) { 
    background-color: aliceblue;
  } 
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: lightgray;
  color: black;
  border: none;
  width: 220px;
  height: 45px;
  border-radius: 7px;
  font-size: 20px;
  font-weight: 500;
  margin: 0.5rem 0 0 0;

  &:hover{
    background-color: gray;
    color: white;
  }
`;


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <Container>
      <h2>로그인 페이지</h2>
      <Input
        type="text"
        placeholder="사용자 이름"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <Button onClick={() => navigate('/')}>로그인하기</Button>
      <Button onClick={() => navigate('/register')}>회원가입하기</Button>

    </Container>
  );
}

export default Login;