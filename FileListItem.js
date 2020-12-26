import React from 'react';
import Icon from './Icon';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import Time from './Time';

function FileListItem({ file }) {
    return (
        <div className="fileListItem">
            <span className="fileListItem__nameGroup">
                <Icon type={file.type} />
                <FileName name={file.name} />
            </span>
            <CommitMessage message={file.message} />
            <Time time={file.time} />
        </div>
    );
}

export default FileListItem;
