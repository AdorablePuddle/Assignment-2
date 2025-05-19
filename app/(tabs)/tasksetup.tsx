import CoinTab from "@/component/CoinTab";
import { ThemedText } from "@/component/ThemedText";
import { ThemedView } from "@/component/ThemedView";
import { styles } from "@/component/ui/Styles";
import exchange, { ToDo } from "@/data/ToDo";
import { saveData, UserData } from "@/data/UserData";
import DateTimePicker from "@react-native-community/datetimepicker";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import React from "react";
import { Button, Dimensions, Platform, Pressable, StyleSheet } from "react-native";
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
var { width, height } = Dimensions.get("window");

export default function TaskSetup() {
    const [message, setMessage] = React.useState("");
    const [freqType, setfreqType] = React.useState("once"); 
    const [taskType, setTaskType] = React.useState("starttime");
    const [datetime, setDateTime] = React.useState(new Date());
    const [priority, setPriority] = React.useState(1);

    const [stringDate, setStringDate] = React.useState("");
    const [datePickerVisibility, setDatePickerVisibility] = React.useState(false);

    const [stringTime, setStringTime] = React.useState("");
    const [timePickerVisibility, setTimePickerVisibility] = React.useState(false);

    const toggleDatePicker = () => {
        setDatePickerVisibility(!datePickerVisibility);
    };

    const onDateChange = ({ type } : { type : String }, selectedDate : Date | undefined) => {
        if (type == "set") {
            if (selectedDate != undefined){
                setDateTime(selectedDate);

                if (Platform.OS === "android") {
                    toggleDatePicker();
                    setStringDate(selectedDate.toLocaleDateString());
                }
            }
        } else {
            toggleDatePicker();
        }
    }

    const toggleTimePicker = () => {
        setTimePickerVisibility(!timePickerVisibility);
    };

    const onTimeChange = ({ type } : { type : String }, selectedTime : Date | undefined) => {
        if (type == "set") {
            if (selectedTime != undefined){
                setDateTime(selectedTime);

                if (Platform.OS === "android") {
                    toggleTimePicker();
                    setStringTime(selectedTime.toLocaleTimeString());
                }
            }
        } else {
            toggleTimePicker();
        }
    };

    const onSubmit = () => {
        let newToDo : ToDo;
        let id : number = UserData.topId;
        UserData.topId += 1;
        if (taskType === "starttime") {
            newToDo = new ToDo(id, datetime.getTime() / 1000, -1, message, exchange(freqType), Math.floor(priority));
            UserData.task.push(newToDo);
        } else if (taskType === "duetime") {
            newToDo = new ToDo(id, -1, datetime.getTime() / 1000, message, exchange(freqType), Math.floor(priority));
            UserData.task.push(newToDo);
        }
	    saveData();
        router.navigate('/(tabs)');
    };

    return (
        <GestureHandlerRootView>
            <SafeAreaView style={styles.container} >
                <CoinTab />
                <ThemedView style={taskStyle.formArea}>
                    <ThemedView style={taskStyle.formRow}>
                        <ThemedText style={taskStyle.formInstruction}>
                            Task Name:
                        </ThemedText>
                        <TextInput style={taskStyle.formInput} value={message} onChangeText={setMessage}
                        placeholder="Input notification message" />
                    </ThemedView>
                    <ThemedView style={taskStyle.formRow}>             
                        <ThemedText style={taskStyle.formInstruction}>
                            Task Frequency: 
                        </ThemedText>
                        <Picker
                            style={taskStyle.formInput}
                            selectedValue={freqType}
                            onValueChange={(itemValue, itemIndex) => setfreqType(itemValue)}
                        >
                            <Picker.Item label="Once" value="once"/>
                            <Picker.Item label="Daily" value="daily"/>
                            <Picker.Item label="Weekly" value="weekly"/>
                        </Picker>
                    </ThemedView>
                    <ThemedView style={taskStyle.formRow}>             
                        <ThemedText style={taskStyle.formInstruction}>
                            Task Type: 
                        </ThemedText>
                        <Picker
                            style={taskStyle.formInput}
                            selectedValue={taskType}
                            onValueChange={(itemValue, itemIndex) => setTaskType(itemValue)}
                        >
                            <Picker.Item label="Start Time" value="starttime"/>
                            <Picker.Item label="Due Time" value="duetime"/>
                        </Picker>
                    </ThemedView>
                    <ThemedView style={taskStyle.formRow}>
                        <ThemedText style={taskStyle.formInstruction}>
                            Start date / Due date: 
                        </ThemedText>

                        {
                            datePickerVisibility && (
                                <DateTimePicker 
                                    mode="date"
                                    value={datetime}
                                    onChange={onDateChange}
                                />
                            )
                        }
                        {!datePickerVisibility && (
                            <Pressable style={taskStyle.formInput}
                                onPress={toggleDatePicker}>
                                <TextInput 
                                    value={stringDate} 
                                    onChangeText={setStringDate} 
                                    editable={false}
                                />
                            </Pressable>
                        )}
                    </ThemedView>
                    <ThemedView style={taskStyle.formRow}>
                        <ThemedText style={taskStyle.formInstruction}>
                            Start time / Due time: 
                        </ThemedText>

                        {
                            timePickerVisibility && (
                                <DateTimePicker 
                                    mode="time"
                                    value={datetime}
                                    onChange={onTimeChange}
                                />
                            )
                        }
                        {!timePickerVisibility && (
                            <Pressable style={taskStyle.formInput}
                                onPress={toggleTimePicker}>
                                <TextInput 
                                    value={stringTime} 
                                    onChangeText={setStringTime} 
                                    editable={false}
                                />
                            </Pressable>
                        )}
                    </ThemedView>
                    <ThemedView style={taskStyle.formRow}>
                        <ThemedText style={taskStyle.formInstruction}>
                            Priority {Math.floor(priority)}: 
                        </ThemedText>
                        <Slider 
                            style={taskStyle.formInput}
                            minimumValue={1}
                            maximumValue={5}
                            minimumTrackTintColor="#5BCEFA"
                            maximumTrackTintColor="#F5A9B8"
                            value={priority}
                            onValueChange={setPriority}
                        />
                    </ThemedView>
                    <ThemedView style={taskStyle.formRow}>
                        <Button 
                            title="Create a task"
                            onPress={onSubmit}
                        />
                    </ThemedView>
                </ThemedView>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}

const taskStyle = StyleSheet.create({
    formArea: {
        backgroundColor: "#ffffff",
    },
    formRow: {
        backgroundColor: "#ffffff",
        flex: 0,
        flexDirection: "row",
    },
    formColumn: {
        backgroundColor: "#ffffff",
        flex: 0,
        flexDirection: "column",
    },
    formInstruction: {
        flex: 0,
        textAlign: "center",
        color: "#000000",
        padding: 18
    },
    formInput: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        borderColor: "#ff87be",
        color: "#000000",
        borderWidth: 3,
        borderRadius: 3,
    }
});