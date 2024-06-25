import React, { useState, useEffect } from "react";
import styled from "styled-components";

function MyComponent() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/users/1")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box>
      <Div>Test Page</Div>
      <Div2 />
      <Div3>ID: {user.id}</Div3>
      <Div4>Username: {user.username}</Div4>
      <Div5>Email: {user.email}</Div5>
      <Div6>State: {user.state}</Div6>
    </Box>
  );
}

const Box = styled.div`
  background-color: #d9d9d9;
  display: flex;
  max-width: 814px;
  flex-direction: column;
  align-items: start;
  font-size: 32px;
  color: #000;
  font-weight: 400;
  padding: 74px 66px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div = styled.div`
  margin-left: 38px;
  font: 64px Inter, sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
    font-size: 40px;
  }
`;

const Div2 = styled.div`
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #000;
  align-self: stretch;
  margin-top: 32px;
  height: 1px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
  font-family: Inter, sans-serif;
  margin: 112px 0 0 46px;
  @media (max-width: 991px) {
    margin: 40px 0 0 10px;
  }
`;

const Div4 = styled.div`
  font-family: Inter, sans-serif;
  margin: 31px 0 0 46px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Div5 = styled.div`
  font-family: Inter, sans-serif;
  margin: 31px 0 0 46px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Div6 = styled.div`
  font-family: Inter, sans-serif;
  margin: 31px 0 0 46px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

export default MyComponent;
