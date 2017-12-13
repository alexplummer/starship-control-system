
// Mothership
// ============
// The main control ship in the fleet

// Imports
import React from 'react';
import renderer from 'react-test-renderer';
import Mothership from './Mothership';

describe('Mothership renders correctly', () => {
    it('renders correctly', () => {
        const props = {};
        const rendered = renderer.create(
            <Mothership props={props} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
