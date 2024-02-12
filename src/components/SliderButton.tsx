import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {DraxProvider, DraxView} from 'react-native-drax';
import {getFontSize, getHeight, getWidth, width} from '@/utils/utilities';
import {colors} from '@/theme/colors';
import {fonts} from '@/theme/fonts';
import {BackIcon, ForwardIcon} from '@/theme/icons';
interface Props {
  onReject: () => void;
  onAccept: () => void;
}
const SliderButton: React.FC<Props> = ({onAccept, onReject}) => {
  const [isDraggable, setIsDraggable] = useState(true);
  const [positions, setPositions] = useState([
    {id: 1, isVisible: false},
    {
      id: 2,
      isVisible: true,
    },
    {id: 3, isVisible: false},
  ]);
  const updatePositions = (id: number) => {
    const updated_positions = positions.map(values => {
      if (values.id === id) {
        return {
          ...values,
          isVisible: true,
        };
      } else
        return {
          ...values,
          isVisible: false,
        };
    });
    setPositions(updated_positions);
  };
  return (
    <DraxProvider style={styles.wrapper}>
      <View style={styles.wrapperChild}>
        <DraxView
          style={styles.receiver}
          onReceiveDragEnter={({dragged: {payload}}) => {
            setIsDraggable(false);
            updatePositions(1);
            !!onReject && onReject();
          }}>
          <View style={styles.textView}>
            <Text
              style={{
                fontSize: getFontSize(16),
                color: colors.WHITE,
                fontFamily: fonts.POPPINS_MEDIUM,
              }}>
              {'Reject'}
            </Text>
            {positions[0].isVisible && (
              <View style={styles.dragableView}>
                <BackIcon color={colors.BLACK} size={18} />
                <ForwardIcon color={colors.BLACK} size={18} />
              </View>
            )}
          </View>
        </DraxView>
        {[1, 2, 3, 4].map(_ => (
          <BackIcon key={_.toString()} size={18} color={colors.WHITE} />
        ))}

        <DraxView
          lockDragYPosition
          payload={'Ok'}
          draggable={isDraggable}
          draggingStyle={{opacity: 0}}
          hoverDragReleasedStyle={{opacity: 0}}
          style={{height: getHeight(40), width: getWidth(42)}}>
          {positions[1].isVisible && (
            <View style={styles.dragableView}>
              <BackIcon color={colors.BLACK} size={18} />
              <ForwardIcon color={colors.BLACK} size={18} />
            </View>
          )}
        </DraxView>

        {[1, 2, 3, 4].map(_ => (
          <ForwardIcon key={_.toString()} size={18} color={colors.WHITE} />
        ))}
        <DraxView
          style={styles.receiver}
          onReceiveDragEnter={({dragged: {payload}}) => {
            setIsDraggable(false);
            updatePositions(3);
            !!onAccept && onAccept();
          }}>
          <View style={styles.textView}>
            <Text
              style={{
                fontSize: getFontSize(16),
                color: colors.WHITE,
                fontFamily: fonts.POPPINS_MEDIUM,
              }}>
              {'Accept'}
            </Text>
            {positions[2].isVisible && (
              <View style={styles.dragableView}>
                <BackIcon color={colors.BLACK} size={18} />
                <ForwardIcon color={colors.BLACK} size={18} />
              </View>
            )}
          </View>
        </DraxView>
      </View>
    </DraxProvider>
  );
};

export default SliderButton;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.BLUE,
    paddingHorizontal: '2%',
    height: getHeight(44),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  receiver: {
    width: getWidth(60),
    height: getHeight(38),
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dragableView: {
    height: getHeight(38),
    width: getWidth(40),
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: getHeight(36),
    width: getWidth(60),
  },
  wrapperChild: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: getHeight(44),
    paddingVertical: '1%',
  },
});
