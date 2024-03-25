import { useLocation } from "react-router-dom";

const Invoice = () => {
  const { state } = useLocation();
  const data = state?.data;
  console.log(data);

  return (
    <div>
      <h1>Invoice</h1>
    </div>
  );
};

export default Invoice;
