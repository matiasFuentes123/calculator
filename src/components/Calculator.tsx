import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FC, ReactNode } from "react";
import { useCalculator } from '../hooks/useCalculator'

type Props = {
  children?: ReactNode;
};

export const Calculator: FC<Props> = () => {

  const { addDigit, calculator, calculateTotal, setOperation, setState, clearCalculator } = useCalculator()

  return (
    <View style={styles.container}>
      <View style={styles.topScreen}>
        <Text>
          {
            calculator.state === 1 ? calculator.firstNumber : ''
          }
        </Text>
        <Text>{calculator.state === 2 ? calculator.secondNumber : ''}</Text>
        <Text>{calculator.state === 3 ? calculator.total : ''}</Text>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => clearCalculator()} style={styles.button}>
          <Text style={styles.whiteText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.whiteText}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => calculateTotal()}>
          <Text style={styles.whiteText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.whiteText}></Text>
        </TouchableOpacity>        
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => addDigit('1')} style={styles.button}>
          <Text style={styles.whiteText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit('2')} style={styles.button}>
          <Text style={styles.whiteText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit('3')} style={styles.button}>
          <Text style={styles.whiteText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOperation('sum')} style={styles.button}>
          <Text style={styles.whiteText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => addDigit('4')} style={styles.button}>
          <Text style={styles.whiteText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit('5')} style={styles.button}>
          <Text style={styles.whiteText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit('6')} style={styles.button}>
          <Text style={styles.whiteText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOperation('subtract')} style={styles.button}>
          <Text style={styles.whiteText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => addDigit('7')} style={styles.button}>
          <Text style={styles.whiteText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit('8')} style={styles.button}>
          <Text style={styles.whiteText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDigit('9')} style={styles.button}>
          <Text style={styles.whiteText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOperation('division')} style={styles.button}>
          <Text style={styles.whiteText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => addDigit('0')} style={styles.buttonXL}>
          <Text style={styles.whiteText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOperation('multiplication')} style={styles.button}>
          <Text style={styles.whiteText}>*</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center" 
  },
  rowContainer: { flexDirection: "row" },
  button: { 
    backgroundColor: "#2596be", 
    padding: 10, 
    margin: 5, 
    borderRadius: 5, 
    width: 70, 
    height: 70, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  whiteText: { color: "#fff", fontSize: 30 },
  buttonXL: { 
    backgroundColor: "#2596be", 
    padding: 10, 
    margin: 5, 
    borderRadius: 5, 
    width: 230, 
    height: 70, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  topScreen: {
    borderStyle: "solid",
    borderColor: "#2596be",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 5,
    height: 80,
    width: 310,
    flexDirection: "row"
  }
});