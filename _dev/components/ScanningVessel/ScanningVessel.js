
// ScanningVessel
// ============
// Performs scans deep into space

// Imports
import React from 'react';

class ScanningVessel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            scanResults: {
                activity: ""
            }
        }
        this.updateReport = this.updateReport.bind(this);
        this.reportToCarrier = this.reportToCarrier.bind(this);
    }

    updateReport(e) {
        this.setState({
            scanResults: {
                activity: e.target.value
            }
        });
    }

    reportToCarrier(e) {
        this.props.sendAlert(this.state.scanResults.activity);
        e.preventDefault();
    }

    render() {
        return (
            <div className="ScanningVessel">
                <h4>Scanning Vessel</h4>
                <p className="description">Performs scans deep into space.</p>
                <p><strong>Scan results:</strong> <span>{this.state.scanResults.activity}</span></p>
                <p><strong>Fleet report:</strong> <span>{this.props.fleetReports}</span></p>

                <form onSubmit={this.reportToCarrier}>
                    <label>Send alert</label>
                    <input 
                        type="text" 
                        value={this.state.scanResults.activity} 
                        onChange={this.updateReport} 
                        placeholder="Enter a report"
                    />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

// Exports
export default ScanningVessel;
