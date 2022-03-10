import { useNavigate } from 'react-router-dom';
import './Product.scss';

function Product({ productData }) {
  const { productId, img, name, price, rating, review } = productData;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/products/${productId}`);
      }}
      className="wrap"
    >
      <img className="items" src={img} alt="productImg" />
      <span className="product-name">{name}</span>
      <span className="product-price">{price}</span>
      <span className="product-detail">
        <i className="fa fa-star" aria-hidden="true" />
        <span className="bold">
          <span className="bold">{rating}</span>{' '}
        </span>{' '}
        | 리뷰 : {review}
      </span>
    </div>
  );
}

export default Product;
