
// Scout
// ============
// A small ship used as a lookout

// Imports
import React from 'react';
import renderer from 'react-test-renderer';
import Scout from './Scout';

describe('Scout renders correctly', () => {
    it('renders correctly', () => {
        const props = {};
        const rendered = renderer.create(
            <Scout props={props} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
