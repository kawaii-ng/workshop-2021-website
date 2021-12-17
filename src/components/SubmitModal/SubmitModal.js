import React, { useRef, useEffect } from 'react'
import './SubmitModal.css'


/**
 * 
 * @SubmitModal :
 * - responsible for showing the modal to notice the user
 * that the files are uploaded sucessfully
 * 
 * props:
 * @isSubmit : the status of submit
 * 
 */


function SubmitModal(props) {

    const previous = useRef(null)
    const submitModal = useRef(null)

    /**
     * handle the modal showing and hiding animation
     */
    useEffect(() => {
        console.log("SubmitModal.js: previous: " + previous.current + ", isApper: "+ props.isAppear)
        if(previous.current !=null && previous.current != props.isAppear){
            if(props.isAppear){
                console.log("SubmitModal.js: show modal")
                submitModal.current.classList.toggle('show-modal')
            }else{
                console.log("SubmitModal.js: hide modal")
                submitModal.current.classList.toggle('show-modal')
            }
            previous.current = props.isAppear
            console.log("SubmitModal isAppear: ",previous.current)
        }else{
            previous.current = false            
        }
    }, [props.isAppear])

    return (
        <div ref={submitModal} className='submit-modal'>
            <box-icon color="white" type='solid' name='check-circle'></box-icon>
            <span>你已成功遞交檔案</span>
        </div>
    )
}

export default SubmitModal
