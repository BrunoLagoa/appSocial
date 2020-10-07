import React, { useContext } from 'react';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { FirebaseContext } from '../context/FirebaseContext';

import Text from '../components/Text';

export default ProfileScreen = () => {
  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const logOut = async () => {
    const loggedOut = await firebase.logOut();

    if (loggedOut) {
      setUser((state) => ({ ...state, isLoggedIn: false }));
    }
  };

  return (
    <Container>
      <ProfilePhotoContainer>
        <ProfilePhoto
          source={
            user.profilePhotoUrl === 'default'
              ? require('../../assets/defaultProfilePhoto.jpg')
              : { uri: user.profilePhotoUrl }
          }
        />
      </ProfilePhotoContainer>
      <Text medium bold margin="16px 0 32px 0">
        {user.username}
      </Text>

      <StatsContainer>
        <StatContainer>
          <Text large light>
            21
          </Text>
          <Text small bold color="#c2c4cd">
            Postagens
          </Text>
        </StatContainer>

        <StatContainer>
          <Text large light>
            385
          </Text>
          <Text small bold color="#c2c4cd">
            Seguidores
          </Text>
        </StatContainer>

        <StatContainer>
          <Text large light>
            78
          </Text>
          <Text small bold color="#c2c4cd">
            Seguindo
          </Text>
        </StatContainer>
      </StatsContainer>

      <Logout onPress={logOut}>
        <Text medium bold color="#23a8d9">
          Sair
        </Text>
      </Logout>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 64px;
`;

const ProfilePhotoContainer = styled.View`
  shadow-opacity: 0.8;
  shadow-radius: 30px;
  shadow-color: #222;
`;

const ProfilePhoto = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 64px;
`;

const StatsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 32px;
`;

const StatContainer = styled.View`
  flex: 1;
  align-items: center;
`;

const Logout = styled.TouchableOpacity`
  margin-bottom: 32px;
`;
