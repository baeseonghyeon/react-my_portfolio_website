import React from 'react';
import './Nav.scss'
import { Link, NavLink } from 'react-router-dom';

function Nav(props) {

	const items = props.data;
	
	return (
		<div id="Nav">
			{!items 
			? 
				<>
					{ window.location.pathname === '/'
					?
					<NavLink
						to="/about"
						className="nav-toggle active"
						activeClassName="active"
					>
						Bae Seonghyeon
					</NavLink>
					:
					<NavLink
						to="/about"
						className="nav-toggle"
						activeClassName="active"
					>
						Bae Seonghyeon
					</NavLink>
					}			
					<NavLink
						to="/works"
						className="nav-toggle"
						activeClassName="active"
					>
						Works
					</NavLink>
				</>	
			: 	
				<span className="nav-toggle m-auto text-center pt-2">
					<Link to='/works' className="mt-0 mb-3">← Back to home</Link>
					<h1 className="ft-s">[ {items.title} ]</h1>
				</span>
			}
			
		</div>
	);
}

export default React.memo(Nav);

