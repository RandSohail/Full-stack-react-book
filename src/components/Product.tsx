import React from 'react';

export interface IProductProps {
  id: number;
  productImageUrl: string;
  votes: number;
  url: string;
  title: string;
  description: string;
  submitterAvatarUrl: string;
  onVote: (productId: number) => void;
}

export default class Product extends React.Component<IProductProps> {
  constructor(props: IProductProps) {
    super(props);
    this.handelUpVote = this.handelUpVote.bind(this);
  }
  handelUpVote() {
    this.props.onVote(this.props.id);
  }

  render() {
    return (
      <div className="item">
        <div className="image">
          <img src={this.props.productImageUrl} />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a onClick={this.handelUpVote}>
              <i className="large caret up icon" />
            </a>
            {this.props.votes}
          </div>
          <div className="description">
            <a href={this.props.url}>{this.props.title}</a>
            <p>{this.props.description}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img
              className="ui avatar image"
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}
