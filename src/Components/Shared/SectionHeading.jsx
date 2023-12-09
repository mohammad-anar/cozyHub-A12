import PropTypes from "prop-types";
const SectionHeading = ({ title, subtitle }) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      data-aos-duration="800"
      className="my-12  mx-auto text-center dark:text-white"
    >
      <h2 className="text-xl font-medium mb-2">{subtitle}--</h2>
      <h1 className="text-4xl md:text-5xl font-semibold border-b-2 inline-block px-4 pb-4">
        {title}
      </h1>
    </div>
  );
};
SectionHeading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default SectionHeading;
