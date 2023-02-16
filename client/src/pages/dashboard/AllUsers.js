import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import Loading from "../../components/Loading";
import User from "../../components/User";
import UserOnSearch from "../../components/UserOnSearch";

const AllUsers = () => {
  const {
    getAllUsers,
    pageNumber,
    pageSize,
    sort,
    searchKey,
    searchUsers,
    isLoading,
  } = useAppContext();

  useEffect(() => {
    getAllUsers();
    searchUsers();
    // eslint-disable-next-line
  }, [pageNumber, pageSize, sort, searchKey]);

  if (isLoading) {
    return <Loading center />;
  }

  return <>{searchKey ? <UserOnSearch /> : <User />}</>;
};

export default AllUsers;
