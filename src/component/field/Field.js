import React from 'react';
import '../../pages/stylePages.scss'
const Field = ({children}) => {
    return (
        <div className="field">
            {children}
        </div>
    );
};

export default Field;