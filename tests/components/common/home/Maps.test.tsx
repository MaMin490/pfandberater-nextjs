import React from 'react';
import { shallow } from 'enzyme';

import Maps from '../../../../components/home/Maps';

describe('Maps', () => {
  it('should render correctly', () => {
    const component = shallow(<Maps />);

    expect(component).toMatchSnapshot();
  });
});
