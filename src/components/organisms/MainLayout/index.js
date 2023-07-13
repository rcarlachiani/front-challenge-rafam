import React from "react";

import Sidebar from "components/molecules/Sidebar";
import BaseHeader from "components/atoms/BaseHeader";

import "./styles.scss";
import BottomHeader from "components/atoms/BottomHeader";

const MainLayout = ({ showHeader = true, children }) => {
    
    return <div className="desktop-main-layout-container">
        <Sidebar >
        </Sidebar>
        
        <div className='right-layout-container'>
            {showHeader && 
                <>
                    <BaseHeader/>
                    <BottomHeader/>
                </>
            }
            <div className="right-layout-content" id="right-layout-content">
                {children}
            </div>
        </div>
    </div>
}

export default MainLayout;





