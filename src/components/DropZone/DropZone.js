import React, { useRef, useState, useEffect } from 'react'
import './DropZone.css';

import 'boxicons'

function DropZone() {

    const wrapperRef = useRef(null);

    const [files, setFiles] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('drag-over')
    const onDragLeave = () => wrapperRef.current.classList.remove('drag-over')
    const onDrop = () => wrapperRef.current.classList.remove('drag-over')

    const onFileDrop = (file) => {

        const newList = [...files]
        
        for(var i = 0; i < file.length; i++){
            
            const current = file[i]
            newList.push(current) 

        }
        
        setFiles(newList)
        console.log("file: " , files)
    }

    useEffect(()=>{}, [files])

    return (
        <div className="dropzone-container">
            
            <div ref={wrapperRef} 
                className="drop-zone" 
                onDragEnter={onDragEnter} 
                onDragLeave={onDragLeave} 
                onDrop={onDrop}
            >
                請將檔案拖放在此
                <input multiple type="file" value="" onChange={(e)=>{onFileDrop(e.target.files)}} />
            </div>
            <div className="dropzone-list">
                <div className="dropzone-scroll-panel">
            {
                files.length > 0 
                &&     
                files.map((item, index) => (

                    <div key={index} className="dropzone-list-item">
                        <box-icon color="grey" size="lg" type='solid' name='file'></box-icon>
                        <span>{item.name}</span>
                    </div>

                ))               
            }
                </div>
            <button className="submit-coursework-btn">遞交</button>
            </div>

        </div>
    )
}

export default DropZone
