import './FormSection.css'
import FormInput from '../FormInput/FormInput';
interface Props {
    title: string;
    options: string[]
}
export default function FormSection({title, options}: Props) {
  return (
    <div className="section">
        <h2>{title}</h2>    
        <div className="divider"></div>    
        {options.map((option,i)=><FormInput title={option} key={i} />)}
    </div>
  )
}
