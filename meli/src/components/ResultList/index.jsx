import React from 'react';
import Item from '../Item/index.jsx';
import { Link } from 'react-router-dom';

class ResultList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  componentDidMount() {
    console.info('ResultList did mount');
  }

  render() {
    const items = this.props.items;
    return (
      <div>
        {items.map((item) => {
          console.log('Item: ', item);
          return (
            <div key={item.id}>
              <Link to={`/items/${item.id}`}>
                <Item item={item} />
              </Link>
            </div>
          )
        })}
      </div>
    );
  }
}

export default ResultList;
