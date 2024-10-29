import PropTypes from 'prop-types'

function Form({cardInfo, errors, onChange, handleClick}) {

  return (
    <div className="max-w-sm">
      <form>

        <section>
          <label htmlFor="name">CARDHOLDER NAME</label><br />
            <input type="text"
            className={`${errors.name ? 'border-red-600' : ''}`}
            placeholder="e.g. Jane Appleseed"
            name="name"
            value={cardInfo.name}
            onChange={onChange} />
            {errors.name && <p className="text-sm mt-1 text-red-600">{errors.name}</p>}
        </section>

        <section>
          <label htmlFor="number">CARD NUMBER</label><br />
          <input type="text"
          className={`${errors.number ? 'border-red-600' : ''}`}
          placeholder="e.g. 1234 5678 9123 0000"
          name="number"
          value={cardInfo.number}
          onChange={onChange}
          maxLength={19} />
          {errors.number && <p className="text-sm mt-1 text-red-600">{errors.number}</p>}
        </section>

        <section className="flex flex-1 gap-4">
          <div className="w-[50%]">
            <label htmlFor="date">EXP. DATE (MM/YY)</label><br />
            <div className="flex gap-2">
              <input type="text"
              className={`${errors.exp.mm ? 'border-red-600' : ''}`}
              placeholder="MM"
              name="month"
              value={cardInfo.exp.mm}
              onChange={onChange} />

              <input type="text"
              className={`${errors.exp.yy ? 'border-red-600' : ''}`}
              placeholder="YY"
              name="year"
              value={cardInfo.exp.yy}
              onChange={onChange} />
            </div>
            {errors.exp && <p className="text-sm mt-1 text-red-600">{errors.exp.mm ? errors.exp.mm : errors.exp.yy}</p>}
            
          </div>
          <div>
            <label htmlFor="cvc">CVC</label><br/>
            <input type="text"
            className={`${errors.cvc ? 'border-red-600' : ''}`}
            placeholder="e.g. 123"
            name="cvc"
            value={cardInfo.cvc}
            onChange={onChange}
            maxLength={4} />
            {errors.cvc && <p className="text-sm mt-1 text-red-600">{errors.cvc}</p>}
          </div>
        </section>

        <button
         onClick={handleClick}
         className="w-full bg-dark-violet text-white py-2.5 rounded-lg mt-6">
          Confirm
        </button>
      </form>
    </div>
  )
}

Form.propTypes = {
  cardInfo: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.number,
    exp: PropTypes.shape({
      mm: PropTypes.number,
      yy:PropTypes.number
    }),
    cvc: PropTypes.number
  }).isRequired,

  errors: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    exp: PropTypes.shape({
      mm: PropTypes.string,
      yy: PropTypes.string 
    }),
    cvc: PropTypes.string
  }).isRequired,

  onChange: PropTypes.func,
  handleClick:PropTypes.func

}

export default Form