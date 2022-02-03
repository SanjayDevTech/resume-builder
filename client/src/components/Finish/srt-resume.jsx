import React from 'react';
import { Button } from 'react-bootstrap';
import './resume.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

	function Srtresume( {personalDetailsValues,educationDetailsValues,experienceDetailsValues,projectDetailsValues} ){

	
	const _exportPdf = () => {
		html2canvas(document.querySelector("#doc2")).then(canvas => {
		   document.body.appendChild(canvas);  // if you want see your screenshot in body.
		   const imgData = canvas.toDataURL('image/pdf');
		   const pdf = new jsPDF();
		   pdf.addImage(imgData, 'PDF', 0, 0);
		   pdf.save("download.pdf"); 
   });
   
	}

    return (
	<div>
    <Button className='download' onClick={_exportPdf}>Download</Button>
    <div id="doc2" className="yui-t7">
	<div id="inner">
	
		<div id="hd">
			<div className="yui-gc">
				<div className="yui-u first">
					<h3>{personalDetailsValues.firstName}&nbsp;&nbsp;{personalDetailsValues.lastName}</h3>
				</div>

				<div className="yui-u">
					<div className="contact-info">
                    <h3><a href={`$personalDetailsValues.email`}>{personalDetailsValues.email}</a></h3>
						<h3>{personalDetailsValues.phoneNo}</h3>
					</div>	
				</div>
			</div>
			<div className='address'>
				<h3>Address : </h3>{personalDetailsValues.address}r518gvb87r518gvb87r518gvb87r518gvb87r518gvb87r518gvb87r518gvb87r518gvb87r518gvb87r518gvb87<br/>{personalDetailsValues.city}&nbsp;&nbsp;{personalDetailsValues.country}
			</div>
		</div>

		<div id="about-me">
			<div id="yui-gf">
				<h2>About Me</h2>
				<h4>I'm a hardworking person with a lot of skills.</h4>	
				<h4>Date of Birth : {personalDetailsValues.dob}</h4>
			</div>
		</div>

		<div id="bd">
			<div id="yui-main">

				<div className="yui-b">

					{/* <div className="yui-gf">
						<div className="yui-u first">
							<h2>Profile</h2>
						</div>
						<div className="yui-u">
							<p className="enlarge">
								Progressively evolve cross-platform ideas before impactful infomediaries. Energistically visualize tactical initiatives before cross-media catalysts for change. 
							</p>
						</div>
					</div> */}

					{/* <div className="yui-gf">
						<div className="yui-u first">
							<h2>Skills</h2>
						</div>
						<div className="yui-u">

								<div className="talent">
									<h2>Web Design</h2>
									<p>Assertively exploit wireless initiatives rather than synergistic core competencies.	</p>
								</div>

								<div className="talent">
									<h2>Interface Design</h2>
									<p>Credibly streamline mission-critical value with multifunctional functionalities.	 </p>
								</div>

								<div className="talent">
									<h2>Project Direction</h2>
									<p>Proven ability to lead and manage a wide variety of design and development projects in team and independent situations.</p>
								</div>
						</div>
					</div> */}

					<div className="yui-gf">
						<div className="yui-u first">
							<h2>My Projects</h2>
						</div>
						<div className="yui-u">
							{projectDetailsValues.list.map( (e)=> 
							<ul className="project-width" key={e.id}>
								<p><b>Project Name : </b>{e.project_name}</p>
								<p><b>Url : </b>{e.link_url}</p>
								<p><b>Description : </b>{e.description}</p>
							</ul>)}
						</div>
					</div>

					<div className="yui-gf">
	
						<div className="yui-u first">
							<h2>Experience</h2>
						</div>

						<div className="yui-u">

							<div className="job">
								<h2>{experienceDetailsValues.employer}</h2>
								<h3>{experienceDetailsValues.job_title}</h3>
								<h4>{experienceDetailsValues.start_month}&nbsp;{experienceDetailsValues.start_year} - {experienceDetailsValues.isCheckedExperience? <>Present</>:<>{experienceDetailsValues.end_month} {experienceDetailsValues.end_year}</>}</h4>
								<p>Intrinsicly enable optimal core competencies through corporate relationships. Phosfluorescently implement worldwide vortals and client-focused imperatives. Conveniently initiate virtual paradigms and top-line convergence. </p>
							</div>
						</div>
					</div>
								
					<div className="yui-gf last">
						<div className="yui-u first">
							<h2>Education</h2>
						</div>
						<div className="education">
							<h2>{educationDetailsValues.college_name} - {educationDetailsValues.city_college}, {educationDetailsValues.state_college}</h2>
							<div className='gpa'><h3>{educationDetailsValues.degree}, {educationDetailsValues.field_of_study}</h3><strong>4.0 GPA</strong></div>
						</div>
					</div>
					
				</div>
			</div>
		</div>

		<div id="ft">
			<p>{personalDetailsValues.firstName}&nbsp;&nbsp;{personalDetailsValues.lastName} &mdash; <a href={`$personalDetailsValues.email`}>{personalDetailsValues.email}</a> &mdash; {personalDetailsValues.phoneNo}</p>
		</div>

	</div>


	</div>
	</div>
        );
    }
 
export default Srtresume;