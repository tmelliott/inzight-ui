import React from 'react'
import './Controls.css'

import { InputPicker, Slider } from 'rsuite';


const Controls = () => {
    const variables = [
        {label: "ID", value: "id"},
        {label: "Column 1", value: "col1"},
        {label: "Column 2", value: "col2"},
        {label: "Column 3", value: "col3"},
    ];

    const g1labels = ['a', 'b', 'c']
    const { g1value } = 0


    return (
        <div className="controls">
            <div className="control__row">
                <InputPicker data={variables} placeholder="Select Variable 1" />
            </div>
            <div className="control__row">
                <InputPicker data={variables} placeholder="Select Variable 2" />
            </div>
            <div className="control__row">
                <InputPicker data={variables} placeholder="Select Subset Variable 1" />
            </div>
            <div className="control__row .control__slider">
                <Slider
                    min={0}
                    max={g1labels.length - 1}
                    // value={g1value}
                 />
            </div>
            <div className="control__row">
                <InputPicker data={variables} placeholder="Select Subset Variable 2" />
            </div>
        </div>
    )
}

export default Controls
