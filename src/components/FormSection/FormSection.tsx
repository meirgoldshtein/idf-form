import './FormSection.css'
import FormInput from '../FormInput/FormInput';
interface Props {
    title: {name:string, key:string};
    options: {name:string, key:string}[];
    setFormData: React.Dispatch<React.SetStateAction<IMilitaryForm>>
}
export default function FormSection({title, options,setFormData}: Props) {
  return (
    <div className="section">
        <h2>{title.name}</h2>    
        <div className="divider"></div>    
        {options.map((option)=><FormInput title={option} prymaryKey={title.key} key={option.key} setFormData={setFormData} />)}
    </div>
  )
}
