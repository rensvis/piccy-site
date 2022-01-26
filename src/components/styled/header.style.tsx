import { FC } from "react";
import styled from "styled-components";

const StyledHeader: FC = styled.div`
  /* background-color: grey; */
  /* padding: */

  & .header-content {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .site-logo {
    display: flex;
    align-items: center;

    & img {
      height: 30px;
      object-fit: contain;
      margin-right: 10px;
    }
  }

  & h2 {
    color: ${({ theme }) => theme.body};
  }

  & ul {
    list-style: none;
  }
  & li {
    display: inline-block;
    margin-left: 20px;
  }
`;

export default StyledHeader;
