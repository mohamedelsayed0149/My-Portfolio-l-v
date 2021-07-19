import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    position : relative;
    flex: 2.2;
  }
  .footer__col1::after {
    position: absolute;
    content: '';
    width: 3px;
    height: 100%;
    background-color: var(--gray-1);
    left: 45rem;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Mohamed M El Sayed</h1>
          <PText>
            A freelance web designer and developer from Alexandria, Egypt.
            I always make websites that have unique designs and also has a good
            performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+20 01157551041',
                path: 'tel:+20 01157551041',
              },
              {
                title: 'mohamed11490a@gmail.com',
                path: 'mailto:mohamed11490a@gmail.com',
              },
              {
                title: 'Web Developer, Alex, Egypt',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
              {
                title: 'Github',
                path: 'https://github.com/mohamedelsayed0149',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/mohamed-elsayed-0aa24b1b8/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - All Rights Reserved, Designed By | <strong>Mohamed M El sayed</strong> 
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
