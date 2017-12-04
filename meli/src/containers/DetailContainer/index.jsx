import React from 'react';
import SearchBox from '../../components/SearchBox/index.jsx';
import Detail from '../../components/Detail/index.jsx';
import Request from '../../lib/request';

const request = new Request();

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('DetailContainer props.match: ', this.props.match);
    return (
      <div>
        <Detail match={this.props.match} />
      </div>
    );
  }
}

export default DetailContainer;
