import Wrapper from "../assets/wrappers/Job";
import { FaFileCsv, FaFilePdf, FaFileExcel } from "react-icons/fa";
import { Link } from "react-router-dom";
import {SearchContainer} from ".";
import { useAppContext } from "../context/appContext";
import Alert from "./Alert";

const UserOnSearch = () => {
  const {
    showAlert,
    usersOnSearch,
    usersDataInFileFormat
  } = useAppContext();

  return (
    <>
      <Wrapper>
        {showAlert && <Alert />}
        <div className="files">
          <Link
            type="button"
            className="btn export-csv-file"
            onClick={() => usersDataInFileFormat({ fileType: "csv" })}
          >
            <FaFileCsv /> download csv
          </Link>
          <Link
            type="button"
            className="btn export-excel-file"
            onClick={() => usersDataInFileFormat({ fileType: "excel" })}
          >
            <FaFileExcel /> download excel
          </Link>
          <Link
            type="button"
            className="btn export-pdf-file"
            onClick={() => usersDataInFileFormat({ fileType: "pdf" })}
          >
            <FaFilePdf /> download pdf
          </Link>
        </div>
      </Wrapper>
      <SearchContainer />
      <h5 style={{ fontWeight: "bold", marginLeft: "1rem" }}>
        {usersOnSearch?.length} user{usersOnSearch?.length > 1 && "s"} found
      </h5>
      <Wrapper>
        &nbsp;
        <div className="full-details">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th className="hideable-column">First Name</th>
                <th className="hideable-column">Last Name</th>
                <th>Full Name</th>
                <th>Username</th>
                <th>Location</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {usersOnSearch?.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.userId}</td>
                    <td className="hideable-column">{user.firstName}</td>
                    <td className="hideable-column">{user.lastName}</td>
                    <td>{user.firstName + " " + user.lastName}</td>
                    <td>{user.emailID}</td>
                    <td>{user.location}</td>
                    <td>{user.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* for small screen */}
        <div className="less-details">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {usersOnSearch?.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.userId}</td>
                    <td>{user.firstName + " " + user.lastName}</td>
                    <td>{user.location}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Wrapper>
    </>
  );
};

export default UserOnSearch;
