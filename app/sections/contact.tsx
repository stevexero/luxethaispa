import Map from '../ui/map';

const Contact = () => {
  return (
    <div className='w-full flex flex-col md:flex-row flex-col-reverse items-start justify-center mt-12 border-t border-b border-t-textPrimary-dark border-b-textPrimary-dark'>
      <div className='w-full md:w-1/2 relative p-4 md:p-0'>
        <Map lat={36.113919} lng={-115.20711} zoom={16} />
      </div>
      <div className='w-full md:w-1/2 flex flex-col items-center p-4'>
        <h4 className='text-5xl text-textPrimary-dark'>
          <span className='font-lavishly'>Contact</span>{' '}
          <span className='font-bold gold-text'>LUXE</span>
        </h4>
        <button className='bg-primary-dark text-white px-4 py-2 rounded-md mt-4'>
          View in Maps
        </button>
      </div>
    </div>
  );
};

export default Contact;
