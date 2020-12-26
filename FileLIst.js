// VERSION 1
// [x] it must have a file list item
//  [x] it must have an icon
//  [x] it must have a file name
//  [x] it must haave a commit message
//  [x] it must have time created

import React from 'react';
import FileListItem from './FileListItem';
import './FileList.css';

function FileLIst({ file }) {
    return (
        <div className="fileList">
            {file.map((f) => (
                <FileListItem file={f} key={f.id} />
            ))}
        </div>
    );
}

export default FileLIst;
