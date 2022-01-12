import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
export const TableThead = styled.thead``;
export const TableTbody = styled.tbody``;

export const TableTh = styled.th`
  background-color: ${({ theme }) => theme.colors.primaryGreen};
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const TableTd = styled.td`
  color: black;
  border: 1px solid #dddddd;
  text-align: left;
  text-align: ${({ center }) => center ? 'center' : 'left'};
  padding: 8px;
`;

export const TableTr = styled.tr`
  :nth-child(even) {
    background-color: #dddddd;
  }
`;
