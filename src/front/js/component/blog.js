import React, { Component } from "react";

import rigoImage from "../../img/rigo-baby.jpg";




export const Blog = () => (
	<div className="blog-section">
			<div className="container">
				
				<div className="row">

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={rigoImage} alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h4><a href="#">First Time Home Owner Ideas</a></h4>
								<div className="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={rigoImage} alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h4><a href="#">How To Keep Your Furniture Clean</a></h4>
								<div className="meta">
									<span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry rounded-5">
							<a href="#" className="post-thumbnail"><img src={rigoImage} alt="Image" className="img-fluid "/></a>
							<div className="post-content-entry">
								<h4><a href="#">Small Space Furniture Apartment Ideas</a></h4>
								<div className="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
);
