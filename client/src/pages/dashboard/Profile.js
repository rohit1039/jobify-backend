import { useEffect, useState } from "react";
import { FormRow, Alert } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useAppContext } from "../../context/appContext";
import Loading from "../../components/Loading";

const Profile = () => {
  const {
    showAlert,
    displayAlert,
    updateUser,
    isLoading,
    userLoading,
    user
  } = useAppContext();

  const [firstName, setFirstName] = useState(user?.firstName);
  useEffect(() => {
    setFirstName(user?.firstName);
  }, [user?.firstName]);
  const [emailID, setEmailID] = useState(user?.emailID);
  useEffect(() => {
    setEmailID(user?.emailID);
  }, [user?.emailID]);
  const [lastName, setLastName] = useState(user?.lastName);
  useEffect(() => {
    setLastName(user?.lastName);
  }, [user?.lastName]);
  const [location, setLocation] = useState(user?.location);
  useEffect(() => {
    setLocation(user?.location);
  }, [user?.location]);
  const [age, setAge] = useState(user?.age);
  useEffect(() => {
    setAge(user?.age);
  }, [user?.age]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !emailID || !lastName || !location) {
      displayAlert();
      return;
    }
    updateUser({ firstName, emailID, lastName, location, age });
  };

  if (userLoading) {
    return <Loading center />;
  }

  return (
    <>
      <Wrapper>
        <form className="form" onSubmit={handleSubmit}>
          <h3>profile update</h3>
          {showAlert && <Alert />}
          <div className="form-center">
            <FormRow
              type="text"
              labelText="first name"
              name="firstName"
              value={firstName}
              handleChange={(e) => setFirstName(e.target.value)}
            />
            <FormRow
              type="text"
              labelText="last name"
              name="lastName"
              value={lastName}
              handleChange={(e) => setLastName(e.target.value)}
            />
            <FormRow
              type="number"
              labelText="age"
              name="age"
              value={age}
              handleChange={(e) => setAge(e.target.value)}
            />
            <FormRow
              type="email"
              name="emailID"
              value={emailID}
              handleChange={(e) => setEmailID(e.target.value)}
            />
            <FormRow
              type="text"
              name="location"
              value={location}
              handleChange={(e) => setLocation(e.target.value)}
            />
            <button
              className="btn btn-block"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Please Wait..." : "save changes"}
            </button>
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default Profile;
