import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

// Profile Component with props

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div style={styles.container}>
      {/* Declaration of Children */}
      <div>{children}</div>
      <h2 style={styles.fullName}>{fullName}</h2>
      <p style={styles.myBio}>{bio}</p>
      <p style={styles.myProfession}>{profession}</p>
      <Button onClick={() => handleName(fullName)} variant="dark">
        Click to Know Me
      </Button>
    </div>
  );
};

// Default props

Profile.defaultProps = {
  fullName: "No Name available",
  bio: "No bio available",
  profession: "Unknown",
};

// Prop Types

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.element,
  handleName: PropTypes.func,
};

// Styling

const styles = {
  container: {
    backgroundColor: "lightgray",
    padding: "20px",
    width: "400px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "100px",
    borderRadius: "10px",
  },
  fullName: {
    fontSize: "26px",
    fontWeignt: "700",
  },
  myBio: {
    fontSize: "18px",
    fontWeignt: "500",
  },
  myProfession: {
    fontSize: "22px",
    fontWeignt: "700",
  },
};

export default Profile;
