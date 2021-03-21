import React from 'react'
import "./Data.css"

import { InputPicker, Radio, RadioGroup, Table } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;


const Data = () => {
    const datasets = [
        {label: "cas500", value: "cas500"},
        {label: "gapminder", value: "gapminder"},
    ]
    const data = [
        {
            id: 1,
            col1: "a",
            col2: "x",
            col3: 5
        },
        {
            id: 2,
            col1: "b",
            col2: "y",
            col3: 10
        }
    ]

    return (
        <div className="data">
            <div className="data__group">
                <label>Dataset:</label>
                <InputPicker value={ datasets[0].value } data={ datasets }
                    cleanable={false}/>

                <RadioGroup name="dataDisplay" inline appearance="picker" defaultValue="data">
                    <Radio value="data">Data</Radio>
                    <Radio value="variables">Variables</Radio>
                </RadioGroup>
            </div>

            <div className="data__table">
                <Table
                    virtualized
                    height={400}
                    data={data}
                    >

                    <Column>
                        <HeaderCell>ID</HeaderCell>
                        <Cell dataKey="id" />
                    </Column>
                    <Column>
                        <HeaderCell>Column 1</HeaderCell>
                        <Cell dataKey="col1" />
                    </Column>
                    <Column>
                        <HeaderCell>Column 2</HeaderCell>
                        <Cell dataKey="col2" />
                    </Column>
                    <Column>
                        <HeaderCell>Column 3</HeaderCell>
                        <Cell dataKey="col3" />
                    </Column>

                </Table>
            </div>
        </div>
    )
}

export default Data
