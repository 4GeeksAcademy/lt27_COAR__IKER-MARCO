import React, { Component } from "react";


export const Footer = () => (
	<footer className="footer-section bg-success p-2 text-dark bg-opacity-50">
		<div className="container relative">

	
			<div className="row">
				<div className="col-lg-8">
					<div className="subscription-form">
						<h3 className="d-flex align-items-center">
							<span className="me-1">
							<i class="bi bi-envelope"></i>
							</span>
							<span>Subscribe to Newsletter</span>
						</h3>

						<form action="#" className="row g-3">
							<div className="col-auto">
								<input type="text" className="form-control" placeholder="Enter your name" />
							</div>
							<div className="col-auto">
								<input type="email" className="form-control" placeholder="Enter your email" />
							</div>
							<div className="col-auto">
								<button className="btn btn-primary">
									<span className="fa fa-paper-plane"></span>
								</button>
							</div>
						</form>

					</div>
				</div>
			</div>

			<div className="row g-5 mb-5">
				<div className="col-lg-4">
					<br></br>
					<p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

					<div className="row">
						<div className="col"><a href="#" className="text-black"><span className="fa fa-brands fa-facebook-f"></span></a></div>
						<div className="col"><a href="#" className="text-black"><span className="fa fa-brands fa-twitter"></span></a></div>
						<div className="col"><a href="#" className="text-black"><span className="fa fa-brands fa-instagram"></span></a></div>
						<div className="col"><a href="#" className="text-black"><span className="fa fa-brands fa-linkedin"></span></a></div>
					</div>
				</div>

				<div className="col-lg-8">
					<br></br>
					<div className="row links-wrap">
						<div className="col-6 col-sm-6 col-md-3">
							<ul className="list-unstyled">
								<li><a href="#" className="text-black">About us</a></li>
								<li><a href="#" className="text-black">Services</a></li>
								<li><a href="#" className="text-black">Blog</a></li>
								<li><a href="#" className="text-black">Contact us</a></li>
							</ul>
						</div>

						<div className="col-6 col-sm-6 col-md-3">
							<ul className="list-unstyled">
								<li><a href="#" className="text-black">Support</a></li>
								<li><a href="#" className="text-black">Knowledge base</a></li>
								<li><a href="#" className="text-black">Live chat</a></li>
							</ul>
						</div>

						<div className="col-6 col-sm-6 col-md-3">
							<ul className="list-unstyled">
								<li><a href="#" className="text-black">Jobs</a></li>
								<li><a href="#" className="text-black">Our team</a></li>
								<li><a href="#" className="text-black">Leadership</a></li>
								<li><a href="#" className="text-black">Privacy Policy</a></li>
							</ul>
						</div>

						<div className="col-6 col-sm-6 col-md-3">
							<ul className="list-unstyled">
								<li><a href="#" className="text-black">Nordic Chair</a></li>
								<li><a href="#" className="text-black">Kruzo Aero</a></li>
								<li><a href="#" className="text-black">Ergonomic Chair</a></li>
							</ul>
						</div>
					</div>
				</div>

			</div>

			<div className="border-top copyright">
				<div className="row pt-4">
					<div className="col-lg-6">
						<p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a> 
						 {/* <!-- License information: https://untree.co/license/ --> */}
						</p>
					</div>

					<div className="col-lg-6 text-center text-lg-end">
						<ul className="list-unstyled d-inline-flex ms-auto">
							<li className="me-4"><a href="#" className="text-black">Terms &amp; Conditions</a></li>
							<li><a href="#" className="text-black">Privacy Policy</a></li>
						</ul>
					</div>

				</div>
			</div>

		</div>
</footer>
);
