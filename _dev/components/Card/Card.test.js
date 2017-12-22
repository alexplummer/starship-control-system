
// Card
// ============
// Bordered wrapper for each ship

// Imports
import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card renders correctly', () => {
    it('renders correctly', () => {
        const props = {};
        const rendered = renderer.create(
            <Card props={props} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
