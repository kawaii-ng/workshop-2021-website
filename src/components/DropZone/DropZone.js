import React, { useRef, useState, useEffect } from 'react'
import './DropZone.css';

import 'boxicons'
import SubmitButton from '../SubmitButton/SubmitButton';

/**
 * 
 * @DropZone :
 * - responsible for handling the file control 
 *  such as adding file, dropping file 
 * 
 * props:
 * @submitDate : the date of submiting the classwork
 * @title : the target folder name to upload 
 * 
 */

function DropZone(props) {

    // the files list dropping to the webpage
    const [files, setFiles] = useState([]);

    // drag and drop function
    const wrapperRef = useRef(null);
    const onDragEnter = () => wrapperRef.current.classList.add('drag-over')
    const onDragLeave = () => wrapperRef.current.classList.remove('drag-over')
    const onDrop = () => wrapperRef.current.classList.remove('drag-over')

    /**
     * 
     * @onFileDrop : 
     * it updates the files list that are waitting to upload
     * 
     */
    const onFileDrop = (file) => {

        const newList = [...files]
        
        for(var i = 0; i < file.length; i++){
            
            const current = file[i]
            newList.push(current) 

        }
        
        setFiles(newList)
        console.log("file: " , files)
    }

    useEffect(()=>{

    }, [files])

    return (
        <div className="dropzone-container">
            
            {/* drag and drop area */}
            <div ref={wrapperRef} 
                className="drop-zone" 
                onDragEnter={onDragEnter} 
                onDragLeave={onDragLeave} 
                onDrop={onDrop}
            >
                <box-icon size="100px" color="#dfe4e3" type='solid' name='cloud-upload'></box-icon>
                <span>請將檔案拖放在此</span>
                <input multiple type="file" value="" onChange={(e)=>{onFileDrop(e.target.files)}} />
            </div>

            {/* preview the waitting list of uploading files */}
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
                <SubmitButton submitDate={props.submitDate} title={props.title} files={files} setFiles={setFiles} />
            </div>

        </div>
    )
}

export default DropZone
