import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ProfileCard from '../components/profileComponent/ProfileCard';
import UserProfile from '../components/profileComponent/UserProfile';
import BottomProfile from '../components/profileComponent/BottomProfile';

const Profile = () => {
  const [isLogin, setIslogin] = useState(false);

  const iconData: any = [
    {
      iconName: <SimpleLineIcons name="social-dropbox" size={20} />,
      title: 'Orders',
      desc: 'Check your order status',
    },
    {
      iconName: <SimpleLineIcons name="social-dropbox" size={20} />,
      title: 'Help Center',
      desc: 'Helping regarding your real function',
    },
    {
      iconName: <SimpleLineIcons name="social-dropbox" size={20} />,
      title: 'Wislist',
      desc: 'Your most loved styles',
    },
    {
      iconName: <SimpleLineIcons name="social-dropbox" size={20} />,
      title: 'Orders',
      desc: 'Check your order status',
    },
    {
      iconName: <SimpleLineIcons name="social-dropbox" size={20} />,
      title: 'Scan for coupen',
      desc: '',
    },
  ];
  return (
    <View>
      <Header headerTitle="Profile" />
      {!isLogin && <UserProfile onLogin={() => {}} />}
      <ProfileCard Icons={iconData} />
      <BottomProfile />
    </View>
  );
};

export default Profile;
