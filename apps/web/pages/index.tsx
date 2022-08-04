import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  margin: 100px;
`;

export function Index() {
  const [apiData, setApiData] = useState("");
  // useEffect(() => {
  //   fetch("http://localhost:3333/api")
  //     .then((data) => data.json())
  //     .then((data) => setApiData(data?.message));
  // }, []);

  return (
    <StyledPage>
      <div>Hello world</div>
      {!apiData ? <p>Loading...</p> : <p>{apiData}</p>}
    </StyledPage>
  );
}

export default Index;
