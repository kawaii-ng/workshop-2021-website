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
    const [materialList, setMaterialList] = useState([])
    const [isSubmit, setIsSubmit] = useState(false)

    // /**
    //  * handleChange: assign a list of selected files into files 
    //  */
    // const handleChange = (files) => {

    //     // set new files
    //     setFiles(files)

    // }

    /**
     * @submitWork : upload files to firebase storage
     */
    const submitWork = () => {

        // for(var i = 0; i < props.files.length; i++){

        // const file = props.files[i]
        // const fileRef = ref(storage, `exercise/${title}/${file.name}`)

        // uploadBytesResumable(fileRef, file)
        // .then((snapshot)=>{
        //     console.log('SubmitButton.js: Uploaded')
        //     props.setFiles([])
        //     setIsSubmit(true)
        // })
        // .catch((error)=>{
        //     console.log('SubmitButton.js: Upload failed')
        // })

        // }
        setIsSubmit(true)

    }

    /**
     * @getMaterialList : list the item within firebase storage
     */
    const getMaterialList = () => {

        const listRef = ref(storage, 'flappy-bird-material/')

        listAll(listRef)
        .then((res) => {

        var newList = []

        res.items.forEach((itemRef) => {

            newList.push(itemRef)

        })

        setMaterialList(newList)

        })
        .catch((erorr) => {

        console.log("SubmitButton.js: Showing File List Error")

        })

    }

    /**
     * @getUrl : generate the download url of the specific file 
     */
    const getUrl = (name) => {

        const fileRef = ref(storage, 'flappy-bird-material/'+name)
        let mUrl = ""

        getDownloadURL(fileRef)
        .then((url) => {
        mUrl = url
        })
        .catch((error) => {
        console.log("SubmitButton.js: Can't get url of a file")
        })

        return mUrl

    }

    /**
     * initialize the list of teaching materials
     */
    useEffect(()=>{

        if(!materialList.length) {

        getMaterialList();

        }

    }, [materialList])

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
