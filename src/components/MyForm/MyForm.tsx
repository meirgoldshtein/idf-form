import React, { useState } from 'react'
import './MyForm.css'
import FormSection from '../FormSection/FormSection'
import Guidelines from '../Guidelines/Guidelines'
export default function MyForm() {
    const [name,setName]=useState('')
    const [formData, setFormData]=useState<IMilitaryForm>()
  return (
    <div className='form'>
        <label className='name-label'>שם מלא</label>
        <input className='name' type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <Guidelines />
        <FormSection title={'רצון לשרת כלוחם בזרוע היבשה'} options={['גולני','שריון','תותחנים','חילוץ והצלה']} />
        <FormSection title={"רצון לשרת כג'ובניק"} options={['מש"ק ממטרות','רס"ר בנימרודי','טבח',"ממלא מקרר בסנדוויצ'ים"]} />
        <FormSection title={"רצון לשרת בתכנית קודקוד"} options={["מפתח פולסטאק","מפתח דאטא","מפתח דבאופס","תורן"]} />
    </div>
  )
}
