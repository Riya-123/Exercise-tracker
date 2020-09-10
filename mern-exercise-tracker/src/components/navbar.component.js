import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
export default class Navbar extends Component {
	handledate() {
		var d = new Date();
		var y = d.getFullYear();
		var mon = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ];
		var m = mon[d.getMonth()];
		var dd = d.getDate();
		if (dd < 10) {
			dd = '0' + dd;
		}

		d = dd + ' ' + m + ' ' + y;
		return d;
		//document.getElementById('data').innerHTML = d;
	}
	handletime() {
		var d = new Date();
		if (d.getHours() > 12) {
			h = d.getHours() - 12;
		} else {
			h = d.getHours();
		}
		var h = (h < 10 ? '0' : '') + h;

		var t = d.getHours() < 12 ? 'AM' : 'PM';
		var min = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
		d = h + ':' + min + ' ' + t;
		return d;
	}
	render() {
		return (
			<div className="dr">
				<div id="navbar">
					<nav className="navbar">
						<div className="row">
							<div className="container-fluid">
								<div className="col-5">
									<div className="navbar-header">
										<Link to="/" className="navbar-brand">
											Exercise Tracker
										</Link>
									</div>
								</div>

								<div className="col-4">
									<span id="data">{this.handledate()}</span>
								</div>
								<div className="col-3">
									<span id="time">{this.handletime()}</span>
								</div>
							</div>
						</div>
					</nav>
				</div>
				<div className="sidenav">
					<Link to="/create" className="nav-link">
						Create Exercise
					</Link>
					<Link to="/user" className="nav-link">
						Create User
					</Link>
				</div>
			</div>
		);
	}
}
