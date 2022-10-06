/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import _ from 'lodash';

// BEGIN (write your solution here)
class DefinitionsList extends React.Component {

  render() {
    const { data } = this.props;
    if (_.isEmpty(data)) return null;
    const res = data.map((el) => {
      const dt = <dt key={el.id}>{el.dt}</dt>;
      const dd = <dd>{el.dd}</dd>;

      return (
        <React.Fragment key={el.id}>
          {dt}
          {dd}
        </React.Fragment>);
    });

    return (
      <dl>
          {res}
      </dl>)
  };
};

export default DefinitionsList;
// END

/**
 * const definitions = [
    { dt: 'one', dd: 'two', id: 1 },
    { dt: 'another term', dd: 'another description', id: 2 },
  ];
 */
