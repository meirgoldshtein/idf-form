import { useState } from 'react';
import './FormInput.css'
interface Props {
    title: { name: string, key: string };
    prymaryKey: string;
    setFormData: React.Dispatch<React.SetStateAction<IMilitaryForm>>
}
export default function FormInput({ prymaryKey, title, setFormData }: Props) {

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

    const updateFormData = (e: any, value: number) => {

        setFormData(data => ({
            ...data,
            [prymaryKey]: { ...data[prymaryKey], [title.key]: value },
        }
        ))
    }
    return (
        <div className="form-input">
            <div className="input-title">{title.name}</div>
            <div className="input-radios">
                <div id="1" className={`checkbox`} onClick={(e) => {
                    setIsActive(e, 1)
                    updateFormData(e, 1)
                }}>
                    <p>1</p>
                </div>
                <div id="2" className={`checkbox`} onClick={(e) => {
                    setIsActive(e, 2)
                    updateFormData(e, 2)
                }
                }>
                    <p>2</p>
                </div>
                <div id="3" className={`checkbox`} onClick={(e) => {
                    setIsActive(e, 3)
                    updateFormData(e, 3)
                }
                }>
                    <p>3</p>
                </div>
                <div id="4" className={`checkbox`} onClick={(e) => {
                    setIsActive(e, 4)
                    updateFormData(e, 4)
                }
                }>
                    <p>4</p>
                </div>
                <div id="5" className={`checkbox`} onClick={(e) => {
                    setIsActive(e, 5)
                    updateFormData(e, 5)
                }
                }>
                    <p>5</p>
                </div>
            </div>
        </div>
    )
}
