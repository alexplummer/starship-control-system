
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
    }

    render() {
        function alertFleet(message) {
            console.log(message);

            this.setState({
                fleetReports: {
                    activity: message
                }
            });
        }

        return (
            <div>
                <div className="Carrier">
                    <h3>Carrier</h3>
                    <p><strong>Fleet reports:</strong> {this.state.fleetReports.activity}</p>
                    <p><strong>Orders:</strong> {this.props.orders.carrier}</p>
                </div>
                <Scout sendAlert={alertFleet.bind(this)} fleetReports={this.state.fleetReports.activity} />
                <ScanningVessel sendAlert={alertFleet.bind(this)} fleetReports={this.state.fleetReports.activity} />
            </div>
        );
    }
}

// Exports
export default Carrier;
