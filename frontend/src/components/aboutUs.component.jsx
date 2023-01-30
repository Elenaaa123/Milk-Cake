import { Container } from 'react-bootstrap';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="imgContainer">
          <img
            src="https://cdn.pixabay.com/photo/2015/03/03/12/26/chef-657352__480.jpg"
            alt="baker"
          />
        </div>
        <div className="infoContainer">
          <h1 className="title">We Just Cake!</h1>
          <p className="description">
            Enlivened by incredible crisp fixings, our little neighborhood
            pastry shop on a corner in downtown Tel Aviv started making Cakes
            and naturally prepared desserts. Also, upon a little achievement,
            neighbors started to approach us for cookies, small yummy deserts
            Our visitors solicitations kept on moving us as our cake kitchen’s
            menu and business developed.!
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
