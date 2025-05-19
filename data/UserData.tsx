import * as SecureStore from "expo-secure-store";
import { ToDo } from "./ToDo";

export async function reloadSave() {
    UserData.topId = 0;
    UserData.coin = 0;
    UserData.task = [];
}

export async function saveData() {
    SecureStore.setItemAsync("topID", String(UserData.topId));
    SecureStore.setItemAsync("coin", String(UserData.coin));
    SecureStore.setItemAsync("tasks", JSON.stringify(UserData.task));
}

export async function loadData() {
    let data = await SecureStore.getItemAsync("coin");
    if (data) {
        UserData.coin = Number(data);
    } else {
        await reloadSave();
        alert("Save failed to load.");
        saveData();
    }
    data = await SecureStore.getItemAsync("topID");
    if (data) {
        UserData.topId = Number(data);
    } else {
        await reloadSave();
        alert("Save failed to load.");
        saveData();
    }
    data = await SecureStore.getItemAsync("tasks");
    if (data) {
        UserData.task = JSON.parse(data);
    } else {
        await reloadSave();
        alert("Save failed to load.");
        saveData();
    }
}

export interface DataInterface {
    topId : number;
    coin : number,
    task : Array<ToDo>
}

export var UserData : DataInterface= {
    topId : 0,
    coin : 0,
    task : [] // A list of ToDo objects
}