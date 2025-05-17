import { ToDo } from "@/data/ToDo";
import { UserData } from "@/data/UserData";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

function TaskDisplay(todo : ToDo, index : number) {
    if (todo.dueTime == -1 && todo.startTime != -1) { // If it looks ugly, I tried.
        return (
            <ThemedView style={taskStyle.tabContainer} key={index}>
                <ThemedView style={taskStyle.subContainer}>
                    <ThemedText style={taskStyle.messageText}>To Do: {todo.message}</ThemedText>
                </ThemedView>
                <ThemedView style={taskStyle.bottomContainer}>
                    <ThemedView style={taskStyle.subContainer}>
                        <ThemedText style={taskStyle.messageText}>Start Time:</ThemedText>
                        <ThemedText style={taskStyle.messageText}>{new Date(todo.startTime * 1000).toUTCString()}</ThemedText>
                    </ThemedView>
                    <ThemedView style={taskStyle.subContainer}>
                        <ThemedText style={taskStyle.messageText}>Completion Reward:</ThemedText>
                        <ThemedText style={taskStyle.messageText}>{todo.reward} Coins</ThemedText>
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
                        <ThemedText style={taskStyle.messageText}>Deadline:</ThemedText>
                        <ThemedText style={taskStyle.messageText}>{new Date(todo.dueTime * 1000).toUTCString()}</ThemedText>
                    </ThemedView>
                    <ThemedView style={taskStyle.subContainer}>
                        <ThemedText style={taskStyle.messageText}>Completion Reward:</ThemedText>
                        <ThemedText style={taskStyle.messageText}>{todo.reward} Coins</ThemedText>
                    </ThemedView>
                </ThemedView>
            </ThemedView>
        );
    }
}

export default function TaskTab() {
    return (
        UserData.task.map((item, index) => (
            TaskDisplay(item, index)
        ))
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
        borderColor: "#ffafd3",
        backgroundColor: "#ffffff",
        borderWidth: 2,
        borderRadius: 3,
        margin: 4,
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
        borderWidth: 0,
    },
    messageText: {
        color: "#000000",
        textAlign: "center"
    }
});