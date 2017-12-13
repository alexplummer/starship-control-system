
// Battleship
// ============
// A first class war ship

// Imports
import React from 'react';
import Carrier from '../Carrier/Carrier';

class Battleship extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            battleshipSystems: {
                defences: "coming online..."
            }
        }
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({
                battleshipSystems: {
                    defences: "ready"
                }
            });
        }, 3000);
    }

    render() {
        return (
            <div>
                <div className="Battleship">
                    <h2>Battleship</h2>
                    <p><strong>Defences:</strong> {this.state.battleshipSystems.defences}</p>
                    <p><strong>Orders:</strong> {this.props.orders.battleship}</p>
                </div>
                <Carrier orders={this.props.orders} />
            </div>
        );
    }
}

// Exports
export default Battleship;
