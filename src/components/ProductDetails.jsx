import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return <> hi {id}</>;
}

export default ProductDetails;
