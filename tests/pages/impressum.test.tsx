import React from 'react';
import { shallow } from 'enzyme';

import Impressum from '../../pages/impressum';

describe('Impressum', () => {
  it('should render correctly', () => {
    const component = shallow(<Impressum />);

    expect(component).toMatchSnapshot();
  });
});
