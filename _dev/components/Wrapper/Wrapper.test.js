
// Wrapper
// ============
// A UI container for the app

// Imports
import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from './Wrapper';

describe('Wrapper renders correctly', () => {
    it('renders correctly', () => {
        const props = {};
        const rendered = renderer.create(
            <Wrapper props={props} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
