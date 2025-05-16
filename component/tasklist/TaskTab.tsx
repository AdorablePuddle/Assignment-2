import { Frequency, ToDo } from "@/data/ToDo";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

var test = [
    new ToDo(Date.now() / 1000, 12000, -1, "Do Homework", Frequency.NONE, 1),
    new ToDo(-1, -1, Date.now() / 1000 + 80000, "Complete Major Assignment", Frequency.NONE, 1)
];

function toDuration(start : number, second : number) {
    let current = Date.now() / 1000;
    second = Math.floor(second - (current - start));

    let s = second % 60
    second = Math.floor(second / 60);
    let m = second % 60
    second = Math.floor(second / 60);
    let h = second % 24
    second = Math.floor(second / 24);
    let d = second;
    return d + ":" + String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

function TaskDisplay(todo : ToDo, index : number) {
    if (todo.dueTime == -1 && todo.startTime != -1) { // If it looks ugly, I tried.
        return (
            <ThemedView style={taskStyle.tabContainer} key={index}>
                <ThemedView style={taskStyle.subContainer}>
                    <ThemedText style={taskStyle.messageText}>To Do: {todo.message}</ThemedText>
                </ThemedView>
                <ThemedView style={taskStyle.bottomContainer}>
                    <ThemedView style={taskStyle.subContainer}>
                        <ThemedText style={taskStyle.messageText}>Start Time: {new Date(todo.startTime).toUTCString()}</ThemedText>
                    </ThemedView>
                    <ThemedView style={taskStyle.subContainer}>
                        <ThemedText style={taskStyle.messageText}>Duration: {toDuration(todo.startTime, todo.duration)}</ThemedText>
                    </ThemedView>
                    <ThemedView style={taskStyle.subContainer}>
                        <ThemedText style={taskStyle.messageText}>Completion Reward: {todo.reward} coins</ThemedText>
                    </ThemedView>
                </ThemedView>
            </ThemedView>
        );
    } else {
        return (
            <ThemedView style={taskStyle.tabContainer} key={index}>
                <ThemedView style={taskStyle.subContainer}>
                    <ThemedText style={taskStyle.messageText}>To Do: {todo.message}</ThemedText>
                </ThemedView>
                <ThemedView style={taskStyle.bottomContainer}>
                    <ThemedView style={taskStyle.subContainer}>
                        <ThemedText style={taskStyle.messageText}>Deadline: {new Date(todo.dueTime).toUTCString()}</ThemedText>
                    </ThemedView>
                    <ThemedView style={taskStyle.subContainer}>
                        <ThemedText style={taskStyle.messageText}>Completion Reward: {todo.reward} coins</ThemedText>
                    </ThemedView>
                </ThemedView>
            </ThemedView>
        );
    }
}

export default function TaskTab() {
    return (
        <ThemedView style={taskStyle.container}>
            {test.map((item, index) => (
                TaskDisplay(item, index)
            ))}
        </ThemedView>
    );
}

const taskStyle = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "#ffe4f0",
        backgroundColor: "#ffffff",
        borderWidth: 5,
    },
    tabContainer: {
        flex: 2,
        borderColor: "#ffffff",
        backgroundColor: "#ffffff",
        borderWidth: 2,
    },
    subContainer: {
        flex: 2,
        borderColor: "#ffafd3",
        backgroundColor: "#ffffff",
        borderWidth: 2,
    },
    bottomContainer: {
        flex: 3,
        flexDirection: "row",
        borderColor: "#ffafd3",
        backgroundColor: "#ffffff",
        borderWidth: 2,
    },
    messageText: {
        color: "#000000",
        textAlign: "center"
    }
});