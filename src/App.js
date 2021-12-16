import React, { useState, useEffect, useCallback } from 'react'

import  firebase from './config/firebase'
import { getStorage, ref, uploadBytesResumable, listAll, getDownloadURL } from 'firebase/storage'

import './App.css';
import logo from './logo.svg'

import Dropzone from 'react-dropzone' 

function App() {

  // firebase storage
  const storage = getStorage()

  // uploaded files and materials
  const [files, setFiles] = useState(null)
  const [materialList, setMaterialList] = useState([])

  // handleChange: if file is added, get the files and assign 
  //               it into files
  const handleChange = (files) => {

    // set new files
    setFiles(files)

  }

  // handleSave: upload the file to firebase storage
  const handleSave = () => {

    for(var i = 0; i < files.length; i++){

      const file = files[i]
      const fileRef = ref(storage, 'exercise/' + file.name)

      uploadBytesResumable(fileRef, file)
      .then((snapshot)=>{
        console.log('App.js: Uploaded')
      })
      .catch((error)=>{
        console.log('App.js: Upload failed')
      })

    }

  }

  // getMaterialList: getting a list of materials from firebase storage
  //                  and assign it into materialList
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

      console.log("App.js: Showing File List Error")

    })

  }

  // getUrl: provide a file name and generate a download url for downloading it via a link
  const getUrl = (name) => {

    const fileRef = ref(storage, 'flappy-bird-material/'+name)
    let mUrl = ""

    getDownloadURL(fileRef)
    .then((url) => {
      mUrl = url
    })
    .catch((error) => {
      console.log("App.js: Can't get url of a file")
    })

    return mUrl

  }

  // initialize the material list
  useEffect(()=>{

    if(!materialList.length) {

      getMaterialList();

    }

  }, [materialList])

  return (
    <div>

      {/* upload and seletct file */}
      {/* <label htmlFor="select-file">Select</label> */}
      {/* <input id="select-file" multiple type="file" onChange={(e) => {handleChange(e.target.files)}} /> */}
      <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
        {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
      <button onClick={handleSave}>Save</button>

      {

        // render all the material from a list
        materialList.map(material => (

          <div key={material.name}>
            <p>
              {material.name}
              <a href={getUrl(material.name)} download={material.name}>Download</a> 
            </p>
          </div>

        ))

      }

    </div>
  );
}

export default App;
