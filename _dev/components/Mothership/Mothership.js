
// Mothership
// ============
// The main control ship in the fleet

// Imports
import React from 'react';
import Battleship from '../Battleship/Battleship';

class Mothership extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            motherShipSystems: {
                controlSystems: "online"
            },
            fleetOrders: {
                battleship: "standby",
                carrier: "deploy recon"
            }
        }
    }

    render() {
        return (
            <div>
                <div className="Mothership">
                    <h1>Mothership</h1>
                    <p><strong>Control systems:</strong> {this.state.motherShipSystems.controlSystems}</p>
                </div>
                <Battleship orders={this.state.fleetOrders} />
            </div>
        );
    }
}

// Exports
export default Mothership;
