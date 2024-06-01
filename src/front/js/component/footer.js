import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="py-5 py-lg-6 bg-gray-100" bg-secondary>
			<div className="container">
				<div className="row">
					<div className="py-4 service-column col-lg-3 col-sm-6">
						<i className="bi bi-truck"></i>
						<div className="service-text">
							<h6 className="text-sm mb-1">Free shipping; return</h6>
							<p className="text-muted fw-light text-sm mb-0">Free Shipping over $300</p>
						</div>
					</div>
					<div className="py-4 service-column col-lg-3 col-sm-6">
						<i className="bi bi-piggy-bank"></i>
						<div className="service-text">
							<h6 className="text-sm mb-1">Money back guarantee</h6>
							<p className="text-muted fw-light text-sm mb-0">30 Days Money Back Guarantee</p>
						</div>
					</div>
					<div className="py-4 service-column col-lg-3 col-sm-6">
						<i className="bi bi-tag"></i>
						<div className="service-text">
							<h6 className="text-sm mb-1">Best prices</h6>
							<p className="text-muted fw-light text-sm mb-0">Always the best prices</p>
						</div>
					</div>
					<div className="py-4 service-column col-lg-3 col-sm-6">
						<i className="bi bi-headset"></i>
						<div className="service-text">
							<h6 className="text-sm mb-1">020-800-456-747</h6>
							<p className="text-muted fw-light text-sm mb-0">24/7 Available Support</p>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div className="py-4 fw-light bg-gray-800 text-gray-300">
			<div className="container">
				<div className="align-items-center row">
					<div className="text-center text-md-start col-md-6">
						<p className="text-sm mb-md-0">© 2021, Your company. All rights reserved.</p>
					</div>
					<div className="col-md-6">
						<ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-md-end">
							<li className="list-inline-item">
								<img width="32" height="32" src="/svg/visa.svg" alt="..." className="w-2rem" />
							</li>
							<li className="list-inline-item">
								<img src="/svg/mastercard.svg" width="32" height="32" alt="..." className="w-2rem" />
							</li>
							<li className="list-inline-item">
								<img src="/svg/paypal.svg" width="32" height="32" alt="..." className="w-2rem" />
							</li>
							<li className="list-inline-item">
								<img src="/svg/western-union.svg" width="32" height="32" alt="..." className="w-2rem" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
);
