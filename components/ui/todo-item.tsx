import { useState } from "react"
import { StyleSheet, Switch, Text, View } from "react-native"

interface TodoItemProps {
    title: string;
    completer: boolean;
}

export default function TodoItem({title, completer}: TodoItemProps) {
    const [isCompleted, setIsCompleted] = useState(completer);
    const toggleSwitch = () => setIsCompleted(!isCompleted);
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <Switch value={isCompleted} onValueChange={toggleSwitch} />
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffffff",
  },
});