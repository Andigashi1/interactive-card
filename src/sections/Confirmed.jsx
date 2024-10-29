import PropTypes from 'prop-types'
import complete from '../assets/images/icon-complete.svg'


function Confirmed({resetForm}) {
  return (
    <div className='flex flex-col items-center w-96 max-w-sm'>
        <img src={complete} alt="complete logo" />
        <h1 className='uppercase text-2xl font-semibold tracking-widest mb-2 mt-8'>thank you</h1>
        <p className='text-violet-gray mb-5'>We&apos;ve added your card details</p>
        <button onClick={resetForm}
         className="w-full bg-dark-violet text-white py-2.5 rounded-lg mt-6">
            Continue
        </button>
    </div>
  )
}

Confirmed.propTypes = {
  resetForm: PropTypes.func
}

export default Confirmed