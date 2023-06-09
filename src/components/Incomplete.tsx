import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';
import Checkbox from './CheckBox';
import {useSelector} from 'react-redux';

const Incomplete = () => {
  const {isDarkMode, toggleTheme, theme} = useContext(ThemeContext);
  const incompleteTodos = useSelector((state: any) => state.incompleteTodos);

  return (
    <ScrollView style={styles.mainCont}>
      <Text style={[styles.textHead, {color: theme.textColor}]}>
        Incompleted
      </Text>
      <View style={styles.checkBoxWrapper}>
        {incompleteTodos.map((todo: any) => (
          <>
            <Checkbox />
            <Text
              key={todo.id}
              style={[styles.textItem, {color: theme.textColor}]}>
              {/* Upload 1099-R to TurboTax */}
              {todo.task}
            </Text>
          </>
        ))}
      </View>
    </ScrollView>
  );
};

export default Incomplete;

const styles = StyleSheet.create({
  mainCont: {
    marginBottom: 30,
  },
  textHead: {
    fontWeight: '700',
    fontSize: 18,
    paddingBottom: 12,
  },
  textItem: {
    fontWeight: '500',
    fontSize: 16,
    flexDirection: 'column',
  },
  checkBoxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
