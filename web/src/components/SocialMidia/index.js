import React from 'react';

import { Container } from './styles';


export default function SocialMidia() {

  return (
    <Container>
      <nav>
        <ul>
          <li><a href="https://www.google.com/"><i className="fa fa-github" aria-hidden="true"></i></a></li>
          <li><a href="https://www.google.com/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="https://www.google.com/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
      </nav>
    </Container>
  );
}
