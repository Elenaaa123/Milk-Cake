import './footer.css';
import styled from 'styled-components';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from './responsive';
import { Link } from 'react-router-dom';

const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  margin: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <div className="container2">
      <div className="leftContainer">
        <div className="logo">
          <h1>MILK & CAKE</h1>
        </div>
        <div className="desc">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus id
            accusantium mollitia delectus voluptatem eveniet!
          </p>
        </div>
        <div className="socialContainer">
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </div>
      </div>
      <div className="centerContainer">
        <Title>
          <h3>Useful links</h3>
        </Title>
        <List>
          <Link to="/" className="listItem">
            Home
          </Link>

          <Link to="/cart" className="listItem">
            Cart
          </Link>
          <Link to="/signin" className="listItem">
            Sign In
          </Link>
        </List>
      </div>
      <div className="rightContainer">
        <Title>
          <h3>Contact Us</h3>
        </Title>
        <ContactItem>
          <FmdGoodIcon style={{ marginRight: '10px' }} /> Tel Aviv, Rodschild
          17, Israel
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{ marginRight: '10px' }} />
          +790539342410
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: '10px' }} />
          contact@milk&cake.com
        </ContactItem>
      </div>
    </div>
  );
};

export default Footer;
