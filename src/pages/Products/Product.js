import { useNavigate } from 'react-router-dom';
import './Product.scss';

function Product({ productData }) {
  const { id, image, name, price, average_rating, review_count } = productData;

  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/products/${id}`);
      }}
      className="wrap"
    >
      <img className="items" src={image} alt="productImg" />
      <span className="product-name">{name}</span>
      <span className="product-price">{Math.round(price)}</span>
      <span className="product-detail">
        <i className="fa fa-star" aria-hidden="true" />
        <span className="bold">
          <span className="bold">{average_rating}</span>{' '}
        </span>{' '}
        | 리뷰 : {review_count}
      </span>
    </div>
  );
}

export default Product;
