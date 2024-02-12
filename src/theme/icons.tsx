import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {colors} from './colors';
import {VectorIconProps} from '@/utils/types';
import {Image, Text, View} from 'react-native';
import {
  getFontSize,
  getHeight,
  getVerticalPaddingAndMargin,
  getWidth,
} from '@/utils/utilities';
import {fonts} from './fonts';
import {TextInputComponent} from 'react-native';

export const EyeIcon: React.FC<VectorIconProps> = props => (
  <Ionicons name="eye" size={24} {...props} />
);

export const EyeSlashIcon: React.FC<VectorIconProps> = props => (
  <Ionicons name="eye-off" size={24} {...props} />
);

export const BackIcon: React.FC<VectorIconProps> = props => (
  <Ionicons name="chevron-back" size={24} {...props} />
);
export const ForwardIcon: React.FC<VectorIconProps> = ({color, size}) => (
  <Ionicons
    name="chevron-forward"
    size={size ? size : 24}
    color={color ? color : colors.BLACK}
  />
);
export const PrivacyIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Image
    source={require('@/assets/images/privacyPolicy.png')}
    style={{
      width: size ? size : getWidth(24),
      height: size ? size : getWidth(24),
    }}
    resizeMode={'contain'}
  />
);
export const FaqIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Image
    source={require('@/assets/images/messages.png')}
    style={{
      width: size ? size : getWidth(24),
      height: size ? size : getWidth(24),
    }}
    resizeMode={'contain'}
  />
);
export const CalendarPluseIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <FontAwesome name="calendar-plus-o" size={24} />
);
export const DownIcon: React.FC<VectorIconProps> = props => (
  <Entypo name="chevron-down" size={24} {...props} />
);
export const CrossIcon: React.FC<VectorIconProps> = props => (
  <Entypo name="cross" size={24} {...props} />
);
export const LinkIcon: React.FC<VectorIconProps> = props => (
  <Feather name="external-link" size={16} {...props} color={colors.BLUE} />
);
export const CrossCircleIcon: React.FC<VectorIconProps> = props => (
  <AntDesign name="closecircleo" size={18} {...props} />
);
export const CheckFill: React.FC<VectorIconProps> = props => (
  <Ionicons name="checkbox" size={26} {...props} />
);
// export const CheckIcon: React.FC<VectorIconProps> = props => (
//   <AntDesign name="checksquareo" size={24} {...props} />
// );
export const CheckBoxIcon: React.FC<VectorIconProps> = props => (
  <Fontisto name="checkbox-passive" size={20} {...props} />
);
export const SearchIcon: React.FC<VectorIconProps> = props => (
  <Ionicons name="search" size={24} {...props} />
);
export const CameraIcon: React.FC<VectorIconProps> = props => (
  <FontAwesome name="camera" size={24} {...props} style={{color: '#fff'}} />
);
export const RadioOffIcon: React.FC<VectorIconProps> = props => (
  <Ionicons name="radio-button-off-sharp" size={24} {...props} />
);
export const RadioOnIcon: React.FC<VectorIconProps> = props => (
  <Ionicons name="radio-button-on" size={24} {...props} />
);

export const UserIcon: React.FC<VectorIconProps> = props => (
  <Feather name="users" size={24} {...props} style={{color: colors.BLUE}} />
);
export const ProfileIcon: React.FC<VectorIconProps> = props => (
  <FontAwesome
    name="user-circle"
    size={24}
    {...props}
    style={{color: colors.BLACK}}
  />
);
export const Hourglass: React.FC<VectorIconProps> = props => (
  <Ionicons
    name="hourglass-outline"
    size={24}
    {...props}
    style={{color: colors.BLUE}}
  />
);

export const SettingIcon: React.FC<VectorIconProps> = props => (
  <Feather name="settings" size={24} {...props} style={{color: '#000'}} />
);

export const NoteIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Image
    source={require('@/assets/images/file.png')}
    style={{
      width: size ? size : getWidth(24),
      height: size ? size : getWidth(24),
      tintColor: color ? color : colors.BLACK,
    }}
    resizeMode={'contain'}
  />
);
export const WarningIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Image
    source={require('@/assets/images/warning.png')}
    style={{
      width: size ? size : getWidth(24),
      height: size ? size : getWidth(24),
    }}
    tintColor={color ? color : 'red'}
    resizeMode={'contain'}
  />
);
export const LogoutIcon: React.FC<VectorIconProps> = props => (
  <MaterialIcons
    name="power-settings-new"
    size={24}
    {...props}
    color={colors.BLACK}
  />
);
export const UpIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Entypo
    name="chevron-up"
    size={size ? size : 24}
    color={color ? color : colors.BLACK}
  />
);

export const CircleIcon: React.FC<VectorIconProps> = props => (
  <AntDesign
    name="checkcircle"
    size={24}
    {...props}
    style={{color: '#1D4F91'}}
  />
);

export const EditIcon: React.FC<VectorIconProps> = props => (
  <Feather name="edit" size={24} {...props} style={{color: colors.BLACK}} />
);

export const SaveIcon: React.FC<VectorIconProps> = props => (
  <Ionicons
    name="save-outline"
    size={24}
    {...props}
    style={{color: colors.BLACK}}
  />
);
export const ExitIcon: React.FC<VectorIconProps> = props => (
  <Ionicons
    name="exit-outline"
    size={24}
    {...props}
    style={{color: colors.BLACK}}
  />
);
export const CheckIcon: React.FC<VectorIconProps> = props => (
  <Entypo name="check" size={24} {...props} />
);
export const FrontIdImage = () => {
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        paddingVertical: getVerticalPaddingAndMargin(6),
      }}>
      <Image
        source={require('@/assets/images/Id.png')}
        style={{width: '50%'}}
        resizeMode={'contain'}
      />
      <Text
        style={{
          fontFamily: fonts.POPPINS_MEDIUM,
          fontSize: getFontSize(14),
          color: colors.GRAY_TEXT_SECONDARY,
          marginVertical: getVerticalPaddingAndMargin(10),
        }}>
        {'Front photo of ID'}
      </Text>
    </View>
  );
};

export const BacIdImage = () => {
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        paddingVertical: getVerticalPaddingAndMargin(6),
      }}>
      <Image
        source={require('@/assets/images/BackId.png')}
        style={{width: '50%'}}
        resizeMode={'contain'}
      />
      <Text
        style={{
          fontFamily: fonts.POPPINS_MEDIUM,
          fontSize: getFontSize(14),
          color: colors.GRAY_TEXT_SECONDARY,
          marginVertical: getVerticalPaddingAndMargin(10),
        }}>
        {'Back photo of ID'}
      </Text>
    </View>
  );
};

export const SuccessIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Image
    source={require('@/assets/images/success_icon.jpg')}
    style={{
      width: size ? size : getWidth(24),
      height: size ? size : getWidth(24),
    }}
    resizeMode={'contain'}
  />
);

export const RejectedIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Image
    source={require('@/assets/images/rejected_icon.jpg')}
    style={{
      width: size ? size : getWidth(24),
      height: size ? size : getWidth(24),
    }}
    resizeMode={'contain'}
  />
);

export const FailedIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Image
    source={require('@/assets/images/failed_icon.jpg')}
    style={{
      width: size ? size : getWidth(24),
      height: size ? size : getWidth(24),
    }}
    resizeMode={'contain'}
  />
);

export const RequiredIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Image
    source={require('@/assets/images/required_icon.jpg')}
    style={{
      width: size ? size : getWidth(24),
      height: size ? size : getWidth(24),
    }}
    resizeMode={'contain'}
  />
);

export const AcceptedIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Image
    source={require('@/assets/images/accepted_icon.jpg')}
    style={{
      width: size ? size : getWidth(24),
      height: size ? size : getWidth(24),
    }}
    resizeMode={'contain'}
  />
);

export const SubmitReviewIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Image
    source={require('@/assets/images/submit_review_icon.jpg')}
    style={{
      width: size ? size : getWidth(24),
      height: size ? size : getWidth(24),
    }}
    resizeMode={'contain'}
  />
);

export const CertificateIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Image
    source={require('@/assets/images/certificate.png')}
    style={{
      width: size ? size : getWidth(24),
      height: size ? size : getWidth(24),
    }}
    resizeMode={'contain'}
  />
);

export const AppLogoIcon: React.FC<{
  height: any;
  width: any;
  color?: string;
}> = ({height, width, color}) => (
  <Image
    source={require('@/assets/images/logo.png')}
    style={{
      width: width ? width : getWidth(100),
      height: height ? height : getWidth(40),
    }}
    tintColor={color ? color : colors.BLUE}
    resizeMode={'contain'}
  />
);
export const CalendarIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Image
    source={require('@/assets/images/calendar.png')}
    style={{
      width: size ? size : getWidth(24),
      height: size ? size : getWidth(24),
    }}
    tintColor={color ? color : colors.BLACK}
    resizeMode={'contain'}
  />
);
export const RectangleIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Image
    source={require('@/assets/images/rectangle.png')}
    style={{
      width: size ? size : getWidth(60),
      height: size ? size : getHeight(5),
    }}
    resizeMode={'contain'}
  />
);
export const RightMenuIcon: React.FC<VectorIconProps> = props => (
  <Entypo name="dots-three-vertical" size={18} {...props} color={props.color} />
);
export const MenuIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Entypo
    name="dots-three-vertical"
    size={size ? size : 24}
    color={color ? color : colors.BLACK}
  />
);
export const PointIcon: React.FC<VectorIconProps> = props => (
  <Entypo name="controller-record" size={18} {...props} color={props.color} />
);
export const AlingnLeft: React.FC<VectorIconProps> = props => (
  <Feather name="align-left" size={28} {...props} color={colors.BLUE} />
);
export const PlusIcon: React.FC<VectorIconProps> = props => (
  <AntDesign
    name="plus"
    size={24}
    {...props}
    style={{color: props.color || '#fff'}}
  />
);
export const SeenIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Image
    source={require('@/assets/images/seen.png')}
    style={{
      width: size ? size : getWidth(24),
      height: size ? size : getWidth(24),
    }}
    resizeMode={'contain'}
  />
);
export const SentIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Image
    source={require('@/assets/images/sent.png')}
    style={{
      width: size ? size : getWidth(24),
      height: size ? size : getWidth(24),
    }}
    resizeMode={'contain'}
  />
);
export const SendIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Image
    source={require('@/assets/images/send.png')}
    style={{
      width: size ? size : getWidth(24),
      height: size ? size : getWidth(24),
    }}
    resizeMode={'contain'}
  />
);
export const CheckCircleIcon: React.FC<VectorIconProps> = props => (
  <AntDesign name="checkcircleo" size={28} {...props} color={colors.BLACK} />
);
export const AvatarIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Image
    source={require('@/assets/images/avatar.png')}
    style={{
      width: size ? size : getWidth(24),
      height: size ? size : getWidth(24),
    }}
    resizeMode={'contain'}
  />
);
