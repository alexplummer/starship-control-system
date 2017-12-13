
// Scout
// ============
// A small ship used as a lookout

// Imports
import React from 'react';

class Scout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            scoutReport: {
                activity: ""
            }
        }
        this.updateReport = this.updateReport.bind(this);
        this.reportToCarrier = this.reportToCarrier.bind(this);
    }

    updateReport(e) {
        this.setState({
            scoutReport: {
                activity: e.target.value
            }
        });
    }

    reportToCarrier(e) {
        this.props.sendAlert(this.state.scoutReport.activity);
        e.preventDefault();
    }

    render() {
        return (
            <div className="Scout">
                <h4>Scout</h4>
                <p><strong>Scout report:</strong> {this.state.scoutReport.activity}</p>
                <p><strong>Fleet report:</strong> {this.props.fleetReports}</p>
                <hr />
                <form onSubmit={this.reportToCarrier}>
                    <label>Send alert</label>
                    <input 
                        type="text" 
                        value={this.state.scoutReport.activity} 
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
export default Scout;
