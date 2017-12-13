
// Battleship
// ============
// A first class war ship

// Imports
import React from 'react';
import renderer from 'react-test-renderer';
import Battleship from './Battleship';

describe('Battleship renders correctly', () => {
    it('renders correctly', () => {
        const props = {};
        const rendered = renderer.create(
            <Battleship props={props} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
