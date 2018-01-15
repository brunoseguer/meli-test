import React from 'react';
import Item from '../Item/index.jsx';
import { Link } from 'react-router-dom';

class ResultList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.info('ResultList did mount');
  }

  render() {
    const items = this.props.items || [];
    return this.props.showResult && (
      <ol className="parent">
        {items.map((item, i) => {
          console.log('Item: ', item);
          return (
            <li key={`item.id${i}`}>
              <div  className="child">
                <Link to={`/items/${item.id}`}>
                  <Item item={item} />
                </Link>
              </div>
            </li>
          )
        })}
      </ol>
    );
  }
}

export default ResultList;
