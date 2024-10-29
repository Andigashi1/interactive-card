import { useState } from 'react'

import Cards from "./sections/Cards"
import Form from "./sections/Form"
import Confirmed from './sections/Confirmed'


function App() {

  const [isConfirmed, setIsConfirmed] = useState(false)
  const [cardInfo, setCardInfo] = useState({name: '',
                                           number: '',
                                           exp: {
                                            mm: '',
                                            yy: ''},
                                           cvc: ''})
  const [errors, setErrors] = useState({name: '',
                                        number: '',
                                        exp: {
                                          mm: '',
                                          yy: ''},
                                        cvc: ''})

  //Validate state and update it in case of no errors

  const handleChange = (e) => {
    const {name, value} = e.target
    const nameRegex = /^[A-Za-z\s]*$/; // Only letters and spaces
    const numberRegex = /^\d{0,16}$/; // Only digits (max 16 digits)
    const mmRegex = /^(0?[1-9]|1[0-2])$/; // Month between 01 and 12
    const yyRegex = /^\d{2}$/; // Year as two digits
    const cvcRegex = /^\d{3,4}$/; // 3-4 digit CVV
    

    switch(name) {
      case 'name': 
      setCardInfo(prev => ({...prev, [name]: value }))
      if(!value) {
        setErrors(prev => ({...prev, [name]: "Can't be blank"}))
      } else if(!nameRegex.test(value)) {
        setErrors(prev => ({...prev, [name]: "Wrong format, letters only"}))
      } else {
        setErrors(prev => ({...prev, [name]: ''}))
      }
      break

      case 'number': {
      const cleanValue = value.replace(/\s/g, '')
      const formattedValue = cleanValue.replace(/(\d{4})(?=\d)/g, '$1 ')
      setCardInfo(prev => ({...prev, [name]: formattedValue }))
      if(!cleanValue) {
        setErrors(prev => ({...prev, [name]: "Can't be blank"}))
      } else if(!numberRegex.test(cleanValue)) {
        setErrors(prev => ({...prev, [name]: "Wrong format, numbers only"}))
      } else if(cleanValue.length !== 16) {
        setErrors(prev => ({...prev, [name]: "Must be 16 digits"}))
      } else {
        setErrors(prev => ({...prev, [name]: ''}))
      }
      break
    }

        case 'month':
          setCardInfo(prev => ({...prev, exp:{...prev.exp, mm: value}}))
          if(!value) {
            setErrors(prev => ({...prev, exp:{...prev.exp, mm: "Can't be blank"}}))
          } else if(!mmRegex.test(value)) {
            setErrors(prev => ({...prev, exp:{...prev.exp, mm: "Wrong format"}}))
          } else {
            setErrors(prev => ({...prev, exp:{...prev.exp, mm: ''}}))
          }
          break

          case 'year':
          setCardInfo(prev => ({...prev, exp:{...prev.exp, yy: value}}))
          if(!value) {
            setErrors(prev => ({...prev, exp:{...prev.exp, yy: "Can't be blank"}}))
          } else if(!yyRegex.test(value) || new Date().getFullYear() % 100 > parseInt(value, 10)) {
            setErrors(prev => ({...prev, exp:{...prev.exp, yy: "Wrong format"}}))
          } else {
            setErrors(prev => ({...prev, exp:{...prev.exp, yy: ''}}))
          }
          break

          case 'cvc':
          setCardInfo(prev => ({...prev, [name]: value}))
          if(!value) {
            setErrors(prev => ({...prev, [name]: "Can't be blank"}))
          } else if (value.length < 3) {
            setErrors(prev => ({...prev, [name]: "Only 3 or 4 digits allowed"}))
          } else if(!cvcRegex.test(value)) {
            setErrors(prev => ({...prev, [name]: "Wrong format, numbers only"}))
          } else {
            setErrors(prev => ({...prev, cvc: ''}))
          }
          break
    }
  } 

  //Show the confirmed status on click if there is no errors

  const handleClick = (e) => {
    e.preventDefault()
    
    if(!errors.name && !errors.number && !errors.exp.mm && !errors.exp.yy && !errors.cvc
      && cardInfo.name && cardInfo.number && cardInfo.exp.mm && cardInfo.exp.yy & cardInfo.cvc
    ) {
     setIsConfirmed(true)
   } else {
     setIsConfirmed(false)
   } 
  }

  //reset the form and its values when the button on the confirmed status is clicked

  const resetForm = () => {
    setIsConfirmed(false)
    setCardInfo({name: '',
                number: '',
                exp: {
                  mm: '',
                  yy: ''},
                cvc: ''}
    )
  }


  return (
    <div className="w-full max-w-screen-wide flex justify-center items-center max-lg:mb-10 max-lg:flex-col gap-32 max-lg:gap-10">
      <div className="">
        <Cards cardInfo={cardInfo}/>
      </div>
      <div className="min-w-[50%]">
        {isConfirmed ? <Confirmed resetForm={resetForm}/> : 
        <Form 
        cardInfo={cardInfo}
        errors={errors}
        onChange={handleChange}
        handleClick={handleClick}/>}
        </div>
    </div>
  )
}

export default App