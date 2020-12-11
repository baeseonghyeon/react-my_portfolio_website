import React from 'react';
import './Nav.scss'
import { Link, NavLink } from 'react-router-dom';

function Nav(props) {

	const items = props.data;
	
	return (
		<div 
			id="Nav"
		 	className={ !items ?  "" : "w-100"}
		>		
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
				<span className="nav-toggle m-auto text-center">
					<Link to='/works' className="mt-0">← Back to home</Link>
				</span>
			}
			
		</div>
	);
}

export default React.memo(Nav);

