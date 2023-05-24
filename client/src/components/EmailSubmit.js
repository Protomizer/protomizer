import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage, createEmail, updateEmail } from '../features/emailSlice';

const EmailSubmit = () => {
    const dispatch = useDispatch();
    const {email, type, message, loading} = useSelector((store) => store.email)
  
    

    const handleSubmit = () => {
        dispatch(createEmail(email));

        setTimeout(() => {
            dispatch(clearMessage())
        }, 3000)
    }

  return (
    <>
        <div className="email-input-container flex items-center">
            <input
              type="text"
              placeholder="john@gmail.com"
              className={
                type === 'success' ? 'border-blue-500 border-2':
                type === 'rejected' ? 'border-red-500 border-2':
                 'border-grey-500 border-2' 
                }
              onChange={(e) => dispatch(updateEmail(e.target.value))}
              value={email}
            />
            <button className="border-2 border-blue-500 bg-blue-500 text-white rounded-md" onClick={handleSubmit} disabled={loading || message}>
               {loading ? 'Loading...' : 'Submit'}
            </button>


          </div>
          
       {message && <p className={`${type === 'success' ? 'text-blue-500' : 'text-red-500'} mt-4 text-center`}>{message}</p>}
     </>
  )
}

export default EmailSubmit