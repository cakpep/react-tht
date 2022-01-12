import styled from 'styled-components';

export const AppLayout = styled.div`
  max-width: 980px;
  margin: 0 auto;
  overflow: auto;
  padding: 30px 20px 80px 20px;
  box-sizing: border-box;
  @media only screen and (min-width: 400px) {
    max-width: 450px;
  }
  @media only screen and (min-width: 600px) {
    max-width: 670px;
  }
  @media only screen and (min-width: 900px) {
    max-width: 980px;
  }
`;

export const NomineeWraper = styled.div`
  padding: 0;
  margin: 0;
`;

export const BallotWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;
