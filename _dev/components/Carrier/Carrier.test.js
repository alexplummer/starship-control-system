
// Carrier
// ============
// Controls and launches smaller ships

// Imports
import React from 'react';
import renderer from 'react-test-renderer';
import Carrier from './Carrier';

describe('Carrier renders correctly', () => {
    it('renders correctly', () => {
        const props = {};
        const rendered = renderer.create(
            <Carrier props={props} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
