import React from 'react'
import './Mywork.css'
import pdf from "../assets/pdf.pdf";

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className='mywork-title'>
            <h1>Brochure</h1>
        </div>
        <div className='mywork-container'>
            <iframe src={`${pdf}#toolbar=0&scrollbar=0&navpanes=0`} frameBorder="0" scrolling='yes' title="brochure"></iframe>
        </div>
        <div className='download-btn-container'>
            <a href={pdf} download className='download-btn'>
            Download Brochure
            </a>
      </div>

    </div>
  )
}

export default Mywork