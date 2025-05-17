import * as SecureStore from "expo-secure-store";

export async function reloadSave() {
    UserData.coin = 0;
    UserData.task = [];
}

export async function saveData() {
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
    data = await SecureStore.getItemAsync("tasks");
    if (data) {
        UserData.task = JSON.parse(data);
    } else {
        await reloadSave();
        alert("Save failed to load.");
        saveData();
    }
}

export var UserData = {
    coin : 0,
    task : [] // A list of ToDo objects
}