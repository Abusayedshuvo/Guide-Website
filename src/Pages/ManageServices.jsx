import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { useLoaderData } from "react-router-dom";

const ManageServices = () => {
  const service = useLoaderData();

  console.log(service);

  return (
    <>
      <Breadcrumb title="Manage Services"></Breadcrumb>
    </>
  );
};

export default ManageServices;
