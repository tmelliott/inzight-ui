import React from 'react'
import './SidePanel.css'
import Data from './Data'
import Controls from './Controls'

export const SidePanel = () => {
    return (
        <div className="sidepanel">
            <Data />
            <Controls />
            {/* Buttons */}
        </div>
    )
}

export default SidePanel
