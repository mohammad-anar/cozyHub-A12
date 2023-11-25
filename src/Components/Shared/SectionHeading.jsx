import PropTypes from 'prop-types'; 
const SectionHeading = ({title, subtitle}) => {
    return (
        <div className='my-12  mx-auto text-center'>
            <h2 className='text-xl font-medium mb-2'>{subtitle}--</h2>
            <h1 className='text-4xl md:text-5xl font-semibold border-b-4 inline-block px-4 pb-4'>{title}</h1>
            <hr  className='mt-4 border-0 border-b-2'/>
        </div>
    );
};
SectionHeading.propTypes= {
    title: PropTypes.string,
    subtitle: PropTypes.string
}
export default SectionHeading;