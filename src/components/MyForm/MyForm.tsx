import React, { useState } from 'react'
import './MyForm.css'
import FormSection from '../FormSection/FormSection'
import Guidelines from '../Guidelines/Guidelines'
import data from '../../data/initial.json'
export default function MyForm() {
  const [name, setName] = useState('')
  const [formData, setFormData] = useState<IMilitaryForm>(data as IMilitaryForm)

  return (
    <div className='form'>
      <label className='name-label'>שם מלא</label>
      <input className='name' type="text" value={formData.name} onChange={(e) => {
        setFormData(data => ({ ...data, name: e.target.value }))
        console.log(formData)

      }} />
      <Guidelines />
      <FormSection title={{name:'רצון לשרת כלוחם בזרוע היבשה', key:'combatPreferences'}}
        options={[
          { name: 'גולני', key: "golani" },
          { name: 'שריון', key: "armor" },
          { name: 'תותחנים', key: "artillery" },
          { name: 'חילוץ והצלה ', key: "searchAndRescue" }
        ]} setFormData={setFormData} />
      <FormSection
        title={{name:"רצון לשרת כג'ובניק", key:'supportPreferences'}}
        options={[
          { name: 'מש"ק ממטרות', key: "targetingNCO" },
          { name: 'רס"ר בנימרודי', key: "nimrodiSergeant" },
          { name: 'טבח', key: "cook" },
          { name: "ממלא מקרר בסנדוויצ'ים", key: "sandwichFiller" }
        ]} setFormData={setFormData}
      />
      <FormSection
        title={{name:"רצון לשרת בתכנית קודקוד", key:'techPreferences'}}
        options={[
          { name: "מפתח פולסטאק", key: "fullstack" },
          { name: "מפתח דאטא", key: "data" },
          { name: "מפתח דבאופס", key: "devops" },
          { name: "תורן", key: "duty" }
        ]} setFormData={setFormData}
      />

    </div>
  )
}
