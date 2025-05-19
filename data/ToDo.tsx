
export const Frequency = {
    NONE: 0,
    DAILY: 1,
    WEEKLY: 2
}

export const State = {
    STARTTIME: 0,
    DUETIME: 1,
    UNDEFINED: 2
}

export default function exchange(freq : String) {
    if (freq === "once") return Frequency.NONE;
    if (freq === "daily") return Frequency.DAILY;
    if (freq === "weekly") return Frequency.WEEKLY;
    return 0;
}

export class ToDo{
    id : number;
    state : number;
    startTime : number;
    dueTime : number;
    message : string;
    freq : number;
    priority : number;
    reward : number;

    constructor(id : number, startTime : number, dueTime : number, message : string, freq : number, priority : number) {
        this.id = id;
        this.startTime = startTime;
        this.dueTime = dueTime;
        this.message = message;
        this.freq = freq;
        this.priority = priority;

        let freqMultiplier;

        switch (priority) {
            case Frequency.NONE:
                freqMultiplier = 1;
                break;
            case Frequency.DAILY:
                freqMultiplier = 0.25
                break;
            case Frequency.WEEKLY:
                freqMultiplier = 0.5
                break;
            default:
                freqMultiplier = 1;
        }

        this.reward = Math.floor((100 * (0.5 * this.priority)) * freqMultiplier);

        this.state = State.UNDEFINED;
        if (startTime != -1 && dueTime == -1) 
            this.state = State.STARTTIME;
        if (startTime == -1 && dueTime != -1)
            this.state = State.DUETIME;
    }
};