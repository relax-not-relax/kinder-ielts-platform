import PropTypes from "prop-types";

//Validation StudentOption Props
Separator.propTypes = {
  height: PropTypes.number.isRequired,
};
Separator.defaultProps = {
  height: 10,
};

function Separator(props) {
  const { height } = props;
  return <div style={{ height: height }} />;
}

export default Separator;
