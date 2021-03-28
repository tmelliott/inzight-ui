import React, { useState } from 'react'
import './Controls.css'

import { InputPicker, Slider } from 'rsuite';


const Controls = () => {
    const [var1, setVar1] = useState('')
    const [var2, setVar2] = useState('')
    const [var3, setVar3] = useState({
        var: '',
        level: 0,
        levels: ['a', 'b', 'c']
    })
    const [var4, setVar4] = useState({
        var: '',
        level: 0,
        levels: ['x', 'y', 'z']
    })

    const variables = [
        {label: "ID", value: "id"},
        {label: "Column 1", value: "col1"},
        {label: "Column 2", value: "col2"},
        {label: "Column 3", value: "col3"},
    ];

    return (
        <div className="controls">
            <div className="control__row">
                <InputPicker
                    data={variables}
                    placeholder="Select Variable 1"
                    value={var1}
                    onChange={(v) => setVar1(v)}
                    />
            </div>
            <div className="control__row">
                <InputPicker
                    data={variables}
                    placeholder="Select Variable 2"
                    value={var2}
                    onChange={(v) => setVar2(v)}
                    />
            </div>
            <div className="control__row">
                <InputPicker
                    data={variables}
                    placeholder="Select Subset Variable 1"
                    value={var3.var}
                    onChange={(v) => setVar3(prev => {
                        return {
                            ...prev,
                            var: v
                        }
                    })}
                    />
            </div>
            <div className="control__row control__slider">
                <Slider
                    min={0}
                    max={var3.levels.length - 1}
                    value={var3.level}
                    className="slider"
                    // handleClassName="slider__handle"
                    // handleTitle={var3.levels[var3.level]}
                    onChange={(v) => setVar3(prev => {
                        return {
                            ...prev,
                            level: v
                        }
                    })}
                 />
            </div>
            <div className="control__row">
                <InputPicker
                    data={variables}
                    placeholder="Select Subset Variable 2"
                    value={var4.var}
                    onChange={(v) => setVar4(prev => {
                        return {
                            ...prev,
                            var: v
                        }
                    })}
                    />
            </div>
            <div className="control__row control__slider">
                <Slider
                    min={0}
                    max={var4.levels.length - 1}
                    value={var4.level}
                    className="slider"
                    graduated
                    // handleClassName="slider__handle"
                    // handleTitle={var3.levels[var3.level]}
                    onChange={(v) => setVar4(prev => {
                        return {
                            ...prev,
                            level: v
                        }
                    })}
                 />
            </div>
        </div>
    )
}

export default Controls
