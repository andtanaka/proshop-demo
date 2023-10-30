import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col, Tab } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Message from '../../components/Message.jsx';
import Loader from '../../components/Loader.jsx';
import { toast } from 'react-toastify';

import {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} from '../../store/slices/productsApiSlice.js';

const ProductListScreen = () => {
  const {
    data: products,
    isLoading: loadingProducts,
    error,
    refetch,
  } = useGetProductsQuery();
  const [createProduct, { isLoading: loadingCreateProduct }] =
    useCreateProductMutation();

  const [deleteProduct, { isLoading: loadingDeleteProduct }] =
    useDeleteProductMutation();

  const handleCreateProduct = async () => {
    if (window.confirm('Are you sure you want to create a new product?')) {
      try {
        await createProduct();
        refetch();
        toast.success('Product created');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (window.confirm('Are you sure?')) {
      try {
        await deleteProduct(productId);
        refetch();
        toast.success('Product deleted');
      } catch (err) {
        toast.error(err?.data?.message | err.error);
      }
    }
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-end">
          <Button
            className="btn-sm m-3"
            type="button"
            onClick={handleCreateProduct}
            disabled={loadingCreateProduct}
          >
            <FaEdit /> Create Product
          </Button>
        </Col>
      </Row>
      {loadingCreateProduct && <Loader />}
      {loadingDeleteProduct && <Loader />}

      {loadingProducts ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant="light" className="btn-sm mx-2">
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm mx-2"
                      onClick={() => handleDeleteProduct(product._id)}
                    >
                      <FaTrash style={{ color: 'white' }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default ProductListScreen;
