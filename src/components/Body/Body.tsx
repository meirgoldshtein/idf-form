import becground from '../../images/tank.jpg'
import './Body.css'
export default function Body() {
  return (
    <div className="image-container">
      <img src={becground}alt="" />
      <h1 className='title1'>טופס העדפות שירות צבאי</h1>
      <h2 className='title2'>מלא את העדפותיך לשירות הצבאי</h2>
    </div>
  )
}
