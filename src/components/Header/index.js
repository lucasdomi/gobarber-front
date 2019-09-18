import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo-roxa.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gobarber" />
          <Link to="/dashboard"> DASHBOARD </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Lucas Domingues</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Lucas Domingues"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
