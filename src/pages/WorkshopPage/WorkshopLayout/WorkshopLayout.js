import React from 'react'
import { useParams } from 'react-router-dom'
import DemoLayout from './DemoLayout/DemoLayout'
import SubmitLayout from './SubmitLayout/SubmitLayout';
import './WorkshopLayout.css'

/**
 * 
 * @WorkshopLayout :
 * - determine which layout should use
 * - 3 layout: 
 *  (1) demo & material download & instruction 
 *  (2) notes 
 *  (3) submit dialog
 * 
 * @props :
 * type: the type of the layout (demo/note/submit)
 * 
 */

function WorkshopLayout() {

    let { section } = useParams();

    return (
        <div>
            {

                section == "demo"
                && 
                (
                    <DemoLayout />
                )

            }

            {

                section == 'submit'
                &&
                (
                    <SubmitLayout />
                )

            }
        </div>
    )
}

export default WorkshopLayout
