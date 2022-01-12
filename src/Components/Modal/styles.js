import styled from 'styled-components';
import { TextLarge } from '../../Components/Styled/Text';

export const ModalWrapper = styled.div`
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  position: fixed;
  padding-top: 100px;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
`;

export const ModalTitle = styled(TextLarge)`
  color: black;
  text-align: center;
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  height: 80%;
  overflow: none;
`;
export const ContentWrapper = styled.div`
  height: calc(100% - 100px);
  overflow: auto;
`;

export const ModalClose = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  :hover,
  :focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;
