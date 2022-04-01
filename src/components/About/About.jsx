import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, title, paragraphOne, paragraphTwo, paragraphThree, githubOne, twitterOne, githubTwo, twitterTwo, githubThree, twitterThree } =
    about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="Who is Trustless" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
              <h1 className="about-wrapper__info-title">{title || 'Project Title'}</h1>
                <p className="about-wrapper__info-text">{paragraphOne}</p>
                {githubOne && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={githubOne}
                    >
                      Github
                    </a>

                    <p>  ____ </p>
                    {twitterOne && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={twitterOne}
                    >
                      Twitter
                    </a>
                )}
                  </span>
                )}
                <p> </p>
                <p> </p>
                <p className="about-wrapper__info-text">{paragraphTwo}</p>
                {githubTwo && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={githubTwo}
                    >
                      Github
                    </a>
                    <p>  ____ </p>
                    {twitterTwo && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={twitterTwo}
                    >
                      Twitter
                    </a>
                )}
                  </span>
                )}
                 
                <p> </p>
                <p> </p>

                <p className="about-wrapper__info-text">{paragraphThree}</p>
                {githubThree && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={githubThree}
                    >
                      Github
                    </a>


                    <p>  ____ </p>
                    {twitterThree && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={twitterThree}
                    >
                      Twitter
                    </a>
                )}
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
