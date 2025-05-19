import { State } from "@/data/ToDo";
import { saveData, UserData } from "@/data/UserData";
import { Button, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

export default function TaskTab() {
    /*
    return (
        UserData.task.map((item, index) => (
            TaskDisplay(item, index)
        ))
    );
    */

    const displayData = UserData.task;

    const onClaim = (id : number) => {
        console.log(UserData.task);
        console.log(id);
        const ToDoData = UserData.task.find(item => item.id === id);
        console.log(ToDoData);
        if (ToDoData != undefined) {
            UserData.coin += ToDoData.reward;
            alert("Reward claimed. Please reload page.");
        }
        const filteredData = UserData.task.filter(item => item.id !== id);
        UserData.task = filteredData;
        console.log(UserData.task);
        saveData();
        

        /*
        console.log(todo);
        console.log(UserData.task);
        const index = UserData.task.indexOf(todo);
        console.log(index);
        if (index > -1) {
            UserData.coin = UserData.coin + todo.reward;
            UserData.task.splice(index, 1);
            alert("Task removed [DEBUG INFO: from index " + String(index) + "]");
        } else {
            alert("Task not found?");
        }
        saveData();
        */
    }

    return (
        <FlatList 
            data={displayData}
            keyExtractor={id => String(id)}
            renderItem={({item}) => (
                <ThemedView style={taskStyle.tabContainer}>
                    <ThemedView style={taskStyle.subContainer}>
                        <ThemedText style={taskStyle.messageText}>To Do: {item.message}</ThemedText>
                    </ThemedView>
                    <ThemedView style={taskStyle.bottomContainer}>
                        <ThemedView style={taskStyle.subContainer}>
                            <ThemedText style={taskStyle.messageText}>{(item.state == State.STARTTIME)? "Start time:" : "Deadline:"}</ThemedText>
                            <ThemedText style={taskStyle.messageText}>{new Date(item.dueTime * 1000).toUTCString()}</ThemedText>
                        </ThemedView>
                        <ThemedView style={taskStyle.subContainer}>
                            <ThemedText style={taskStyle.messageText}>Completion Reward:</ThemedText>
                            <ThemedText style={taskStyle.messageText}>{item.reward} Coins</ThemedText>
                        </ThemedView>
                        <ThemedView style={taskStyle.subContainer}>
                            <Button 
                                title="Claim Reward"
                                onPress={() => onClaim(item.id)}
                            />
                        </ThemedView>
                    </ThemedView>
                </ThemedView>
            )}
            extraData={displayData}
        />
    )
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