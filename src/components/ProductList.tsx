import React from 'react';
import styled from 'styled-components';
import productsData from '../data/Product';
import Product from './Product';

interface ProductListState {
  products: Array<{
    id: number;
    title: string;
    description: string;
    url: string;
    votes: number;
    submitterAvatarUrl: string;
    productImageUrl: string;
  }>;
}

export default class ProductList extends React.Component<
  any,
  ProductListState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: []
    };

    this.handleProductUpVote = this.handleProductUpVote.bind(this);
  }
  componentDidMount() {
    this.setState({ products: productsData });
  }

  handleProductUpVote(productId: number) {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts
    });
  }
  // render is the only required method for class component and it returns HTML || JSX Element
  render() {
    const products = this.state.products.sort(
      (a: any, b: any) => b.votes - a.votes
    );
    return (
      <ProductListContainer>
        <div className="main ui text container">
          <h1 className="ui dividing centered header">Popular Products</h1>
          <div id="content">
            <div className="ui unstackable items">
              {products.map((product: any) => (
                <Product
                  key={'product_' + product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  url={product.url}
                  votes={product.votes}
                  submitterAvatarUrl={product.submitterAvatarUrl}
                  productImageUrl={product.productImageUrl}
                  onVote={this.handleProductUpVote}
                />
              ))}
            </div>
          </div>
        </div>
      </ProductListContainer>
    );
  }
}
const ProductListContainer = styled.div`
  padding: 40px 0px 20px 0px;
`;
