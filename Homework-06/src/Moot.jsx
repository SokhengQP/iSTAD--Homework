// import React from "react";

export default function Moot() {
     
	const componentCards = Array(8).fill(0); // Array to hold 8 cards
	return (
		<div className="container mt-4">
			<div className="row">
				{componentCards.map((_, index) => (
					<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={index}>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Featured</h5>
								<h6 className="card-subtitle mb-2 text-muted">
									Special title treatment
								</h6>
								<p className="card-text">
									With supporting text below as a natural lead-in to additional
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};


