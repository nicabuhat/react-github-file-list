import React from 'react';

function Icon({ type }) {
    const icon = type === 'folder' ? 'far fa-folder' : 'far fa-file';

    return (
        <span className="fileListItem__icon">
            <i className={icon}></i>
        </span>
    );
}

export default Icon;
