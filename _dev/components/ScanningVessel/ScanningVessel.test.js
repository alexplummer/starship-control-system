
// ScanningVessel
// ============
// Performs scans deep into space

// Imports
import React from 'react';
import renderer from 'react-test-renderer';
import ScanningVessel from './ScanningVessel';

describe('ScanningVessel renders correctly', () => {
    it('renders correctly', () => {
        const props = {};
        const rendered = renderer.create(
            <ScanningVessel props={props} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
