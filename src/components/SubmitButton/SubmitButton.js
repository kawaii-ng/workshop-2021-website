import React, { useState, useEffect } from 'react'
import './SubmitButton.css'

import  firebase from '../../config/firebase'
import { getStorage, ref, uploadBytesResumable, listAll, getDownloadURL } from 'firebase/storage'
import SubmitModal from '../SubmitModal/SubmitModal';


/**
 * 
 * @SubmitButton :
 * - responsible for uploading the file  
 * 
 * props:
 * @submitDate : the date of submiting the classwork
 * @title : the target folder name to upload 
 * @files : a list of files to uplaod
 * @setFiles : the setter of @files
 * 
 */

function SubmitButton(props) {

    const title = props.title;
    const submitDate = parseInt(props.submitDate) + 1

    // firebase storage
    const storage = getStorage()

    // uploaded files and materials
    const [isSubmit, setIsSubmit] = useState(false)

    /**
     * @submitWork : upload files to firebase storage
     */
    const submitWork = () => {

        for(var i = 0; i < props.files.length; i++){

        const file = props.files[i]
        const fileRef = ref(storage, `exercise/${title}/${file.name}`)

        uploadBytesResumable(fileRef, file)
        .then((snapshot)=>{
            console.log('SubmitButton.js: Uploaded')
            props.setFiles([])
            setIsSubmit(true)
        })
        .catch((error)=>{
            console.log('SubmitButton.js: Upload failed')
        })

        }

    }

    /**
     * set the files again when props.files change  
     */
    useEffect(()=>{

    }, [props.files])

    /**
     * update the status of submit after 3 seconds
     */
    useEffect(()=>{

        if(isSubmit){

            setTimeout(()=>{

                setIsSubmit(false)
                console.log("SubmitButton isSubmmit: ", isSubmit)
                
            }, 3000)

        }

    }, [isSubmit])

    return (
        <div className="">
            <button 
                className="submit-coursework-btn" 
                disabled={new Date() >= new Date(2021, 11, submitDate)}
                onClick={submitWork}
                >
                    遞交
                </button>
                <SubmitModal isAppear={isSubmit}/>
        </div>
    )
}

export default SubmitButton
