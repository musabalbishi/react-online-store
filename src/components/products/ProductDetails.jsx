import { useParams } from "react-router-dom";

function ProductDetails() {
  let { id } = useParams();

  return <> hi {id}</>;
}

export default ProductDetails;
