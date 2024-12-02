import { useState } from 'react';
import './FormInput.css'
interface Props {
    title: string
}
export default function FormInput({title}: Props) {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const setIsActive = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        const checkboxes = e.currentTarget.parentElement?.children;
        
        if (checkboxes) {
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].classList.remove('active');
            }           
            e.currentTarget.classList.add('active');
            setActiveIndex(index);
        }
    };
  return (
    <div className="form-input">
        <div className="input-title">{title}</div>
        <div className="input-radios">
            {/* <input type="checkbox" value={1} id={"1"} />
            <input type="checkbox" value={2} />
            <input type="checkbox" value={3} />
            <input type="checkbox" value={4} />
            <input type="checkbox" value={5} /> */}
            <div className={`checkbox`} onClick={(e) => setIsActive(e, 1)}>
                <p>1</p>
            </div>
            <div className={`checkbox`} onClick={(e) => setIsActive(e, 2)}>
                <p>2</p>
            </div>
            <div className={`checkbox`} onClick={(e) => setIsActive(e, 3)}>
                <p>3</p>
            </div>
            <div className={`checkbox`} onClick={(e) => setIsActive(e, 4)}>
                <p>4</p>
            </div>
            <div className={`checkbox`} onClick={(e) => setIsActive(e, 5)}>
                <p>5</p>
            </div>
        </div>
    </div>
  )
}
