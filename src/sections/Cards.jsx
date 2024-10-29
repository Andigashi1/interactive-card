import PropTypes from 'prop-types'

function Cards({cardInfo}) {
  return (
    <div className='relative flex flex-col max-lg:flex-col-reverse gap-10 max-lg:mb-40 max-lg:gap-0 items-center *:shadow-2xl'>

      <div className='bg-front-card bg-cover bg-no-repeat w-96 h-52 max-lg:w-[22rem] max-lg:h-48 max-lg:p-4 rounded-lg p-6 z-10
                      max-lg:absolute top-28 left-0 uppercase'>
         <div className='flex flex-col justify-between'>
          <div className='flex items-center gap-4 mb-14 max-lg:mb-8'>
            <div className='w-10 aspect-square bg-white rounded-full'></div>
            <div className='w-5 aspect-square border-[1px] border-white rounded-full'></div>
          </div>

          <div className='text-white font-normal'>
            <p className='text-[26px] max-lg:text-xl tracking-widest whitespace-nowrap'>
              {cardInfo.number ? cardInfo.number : '0000 0000 0000 0000'}</p>
            <div className='flex justify-between text-xs mt-4 tracking-widest'>
              <p className="">{cardInfo.name? cardInfo.name : 'jane appleseed'}</p>
              <p>{cardInfo.exp.mm ? cardInfo.exp.mm : '00'}/
                {cardInfo.exp.yy ? cardInfo.exp.yy : '00'}</p>
            </div>
          </div>

         </div>
      </div>

      <div className='relative ml-32 max-lg:ml-10 bg-back-card bg-cover bg-no-repeat rounded-lg w-96 h-52 max-lg:w-[22rem] max-lg:h-48 '>
        <p className='absolute top-[5.8rem] max-lg:top-[5.3rem] right-11 text-sm tracking-widest text-white font-medium'>
          {cardInfo.cvc ? cardInfo.cvc : '000'}
        </p>
      </div>
    </div>
  )
}

Cards.propTypes = {
  cardInfo: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.number,
    exp: PropTypes.shape({
      mm: PropTypes.number,
      yy:PropTypes.number
    }),
    cvc: PropTypes.number
  }).isRequired
}

export default Cards