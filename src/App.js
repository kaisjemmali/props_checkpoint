import "./App.css";
import Profile from "./profile/Profile";
import photoProfile from "./photo.jpg";

function App() {
  const profile = {
    fullName: "Kais Jemmali",
    bio: "Hello, my name is Kais Jemmali, and I am learning Full Stack Developpement",
    profession: "CEO",
  };
  const handleName = (fullName) => {
    alert(`Hello, my name is ${fullName}`);
  };
  return (
    <div className="App">
      <Profile
        fullName={profile.fullName}
        bio={profile.bio}
        profession={profile.profession}
        handleName={handleName}
      >
        <img
          style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={photoProfile}
          alt="photoProfile"
        />
      </Profile>
    </div>
  );
}

export default App;
