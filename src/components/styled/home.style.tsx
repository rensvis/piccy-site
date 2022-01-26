import { FC } from "react";
import styled from "styled-components";

const StyledHome: FC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;

  padding: 100px 0;
  & .piccy-logo {
    height: 250px;
    width: 250px;
    object-fit: contain;
    margin-bottom: 20px;
  }

  & .app-store-badges {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    & img {
      /* width: 200px;   */
      max-width: 100%;
      height: 60px;
      object-fit: contain;
      margin: 0 5px;
      margin-bottom: 10px;
    }
  }
`;

export default StyledHome;
