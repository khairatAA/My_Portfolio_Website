/* eslint-disable react/prop-types */
// Button

export function ButtonComponent({text, image, onClick, dataAos}) {
  return (
    <div className=''>
        <button className=' text-base py-2 px-4 bg-gold rounded-md border-2 border-gold flex justify-between items-center gap-2 text-purple hover:text-gold hover:bg-purple shadow transition-all duration-200'
        onClick={onClick} data-aos={dataAos}>
            {image}
            {text}
        </button>
    </div>
  )
}
