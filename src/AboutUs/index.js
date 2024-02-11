import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import p1 from './mem1.jpg';
import p2 from './mem2.jpg';
import preamble from './preamble1.png';
import goal from './goal.png';
import './Team.css'; 

const AboutUs = () => {
    const paragraphStyle = {
        border: '2px double red',
        borderRadius: '8px',
        padding: '20px',
        borderWidth: '5px 5px'
    };


    const teamdetails = [
        {
          id: 1,
          name: 'Person1 Name',
          phone: '1234567890',
          email: 'person1@gmail.com',
          image: p1,
          role:'web developer'
        },
        {
          id: 2,
          name: 'Person2',
          phone: '1234567890',
          email: 'person2@gmail.com',
          image: p2,
          role:'poster designer'
        },
        {
          id: 3,
          name: 'Person1',
          phone: '1234567890',
          email: 'person1@gmail.com',
          image: p1,
          role:'web developer'
        },
        {
          id: 4,
          name: 'Person2',
          phone: '1234567890',
          email: 'person2@gmail.com',
          image: p2,
          role:'poster designer'
        },
        {
          id: 5,
          name: 'Person1',
          phone: '1234567890',
          email: 'person1@gmail.com',
          image: p1,
          role:'web developer'
        },
        {
          id: 6,
          name: 'Person2',
          phone: '1234567890',
          email: 'person2@gmail.com',
          image: p2,
          role:'poster designer'
        },
        {
          id: 7,
          name: 'Person1',
          phone: '1234567890',
          email: 'person1@gmail.com',
          image: p1,
          role:'web developer'
        },
      ];
      

    return (
         <Container className="text-light py-5" style={{backgroundColor: "#1e1f26"}}>

            {/* Who we are section */}
            <h1 className="text-center text-light">About Us</h1>
            <h2 className="text-center text-danger mt-4 mb-5">Who We Are?</h2>
            <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="mt-1">
                        <p style={paragraphStyle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
            </div>
                </div>
            </div>
        </div>
        
        {/* Who we are section End */}
       

       {/* Preamble and goal section */}
       <div className="page-container">
      <section className="container-fluid container1">
        <div className="left">
          <div className="image-wrapper">
            <img src={preamble} alt="Preamble" />
          </div>
          <h1 className="h1preandgoal">PREAMBLE</h1>
        </div>
        <div className="right col-lg-6 col-md-6">
          <div className="content">
            <p>
            TED Club of MIT, would create a potential forum for
sharing innovative ideas. It would be a platform for other students to
awake and inspire them to think independently. With the ultimate goal
of organizing a TEDx event in a greater scale, this team would work to
identify the inherent talent of students with distinct insight and
design a theme to conduct interactive talks. The team would also
identify and invitepotential speakers of various research fields and
professions.
            </p>
            <p>
            TED Club of MIT is the brain child of a group of final
year students who took the help of one of the most instrumental
teaching staffs of MIT, Dr. P. Prakash.
            </p>
          </div>
        </div>
      </section>

      <section className="container-fluid container1">
        <div className="left">
          <div className="image-wrapper">
            <img src={goal} alt="Goal" className="img-fluid" />
          </div>
          <h1 className="h1preandgoal">GOAL</h1>
        </div>
        <div className="right col-lg-6 col-md-6">
          <div className="content">
            <p>
            The ultimate goal of TED Club of MIT would be to organize
an yearly TEDx event, which would be the flagship event of the
organisation. Along with the flagship event, local events would be
also organized so that those events would act as a forum for
discussion for sharing ideas and would be a potential idea maker for
many students in the college.
            </p>
            <p>
            This club would also inspire students to think on a
broader perspective and introduce them to newer developments in all
research fields of interest of students.
            </p>
          </div>
        </div>
      </section>
    </div>

       {/* Preamble and goal section End*/}

        {/* Team */}
         <h2 className="text-center text-danger mt-4 mb-5">Meet Our Team</h2>
         <div className="container" style={{ color: "#ffffff" }}> 
   <div className="row">
     {teamdetails.map((member) => (
      <div className="col-md-3" key={member.id}>
        <div className="card" style={{ marginBottom: "30px", marginRight: "40px", backgroundColor: "#1e1f26", color: "#ffffff" }}> 
          <div className="text-center">
            <img
              className="card-img-top rounded-circle team-member-image"
              style={{ height: '200px', width: '200px', border: '4px solid red', padding: '15px' }}
              src={member.image}
              alt={member.name}
            />
          </div>
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
    <h5 className="card-title" style={{ fontWeight: 'bold', fontSize: '18px', textAlign: 'center' }}>{member.name}</h5>
    <h5 style={{ fontSize: '14px', marginBottom: '10px', textAlign: 'center' }}>{member.role}</h5>
    <p className="card-text text-center">
        <FontAwesomeIcon icon={faPhone} style={{ color: 'red' }} /> {member.phone}<br />
        <FontAwesomeIcon icon={faEnvelope} style={{ color: 'red' }} /> {member.email}
    </p>
</div>


        </div>
      </div>
    ))}
  </div>
</div>


 {/* Team End */}


        </Container>
    );
}

export default AboutUs;
