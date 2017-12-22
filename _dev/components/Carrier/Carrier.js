
// Carrier
// ============
// Controls and launches smaller ships

// Imports
import React from 'react';
import Scout from '../Scout/Scout';
import ScanningVessel from '../ScanningVessel/ScanningVessel';

class Carrier extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fleetReports: {
                activity: "no reports"
            }
        }
        this.alertFleet = this.alertFleet.bind(this);
    }

    alertFleet(message) {

        this.setState({
            fleetReports: {
                activity: message
            }
        });
    }

    render() {

        return (
            <div>
                <div className="Carrier">
                    <h3>Carrier</h3>
                    <p className="description">Controls smaller ships.</p>
                    <p><strong>Fleet reports:</strong> <span>{this.state.fleetReports.activity}</span></p>
                    <p><strong>Orders:</strong> <span>{this.props.orders.carrier}</span></p>
                </div>
                <Scout sendAlert={this.alertFleet} fleetReports={this.state.fleetReports.activity} />
                <ScanningVessel sendAlert={this.alertFleet} fleetReports={this.state.fleetReports.activity} />
            </div>
        );
    }
}

// Exports
export default Carrier;
