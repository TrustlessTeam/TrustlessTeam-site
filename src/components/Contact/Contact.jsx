import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, cta2, btn, link } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="STAKE $ONE WITH US" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
          <p className="contact-wrapper__text">
              {cta || 'TrustlessTeam has recently launched a Staking Validator on Harmony! '}
            </p>
            <p className="contact-wrapper__text">
              {cta2 || 'Your support would be very much appreciated! '}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={'https://staking.harmony.one/validators/mainnet/one1w9g7j40ctzlffmjrp6nmypdupsmyh0u90yn9xs'}
            >
              {btn || "STAKE NOW!"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;