import React from 'react'
import './personalComment.css'

interface Props {
  setFormData: React.Dispatch<React.SetStateAction<IMilitaryForm>>
}
export default function PersonalComment({setFormData}: Props) {
  return (
    <div className='personalComment'>
        <h2>הערות אישיות</h2>
        <div className="divider"></div>
        <input type="text-area"  onChange={(e) => setFormData(data => ({ ...data, personalComment: e.target.value }))}/>
    </div>
  )
}
