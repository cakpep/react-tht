import React from 'react';
import { NomineePhoto } from '../Ballot/styles';
import {
    Table,
    TableThead,
    TableTbody,
    TableTr,
    TableTh,
    TableTd,
} from './styles';

const TableResult = ({ items }) => {
    return (
        <Table>
            <TableThead>
                <TableTr>
                    <TableTh>Category</TableTh>
                    <TableTh>Title</TableTh>
                    <TableTh>Photo</TableTh>
                </TableTr>
            </TableThead>
            <TableTbody>
                {Object.keys(items).map((key) => (
                    <TableTr key={key} data-testid={`table-result-${items[key]?.title}`}>
                        <TableTd>{items[key]?.categoryTile}</TableTd>
                        <TableTd>{items[key]?.title}</TableTd>
                        <TableTd center>
                            <NomineePhoto src={items[key]?.photoUrL} />
                        </TableTd>
                    </TableTr>
                ))}
            </TableTbody>
        </Table>
    );
};

export default TableResult;