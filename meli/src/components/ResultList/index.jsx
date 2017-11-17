import React from 'react';
import Item from '../Item/index.jsx';

class ResultList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  componentWillMount() {
    console.info('antes de ejecutar');
  }

  render() {
    const items = this.props.items;
    return (
      <div>
        {items.map(item => (
          <div key={item.id}>
            <Item item={item.title} />
          </div>
        ))}
      </div>
    );
  }
}

export default ResultList;
