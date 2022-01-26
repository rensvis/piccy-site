import { FC } from "react";
import styled from "styled-components";

interface layoutProps {
  children: React.ReactNode;
}

const Layout: FC<layoutProps> = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;
`;

export default Layout;
