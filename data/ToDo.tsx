
export const Frequency = {
    NONE: 0,
    DAILY: 1,
    WEEKLY: 2
}

export class ToDo{
    startTime : number;
    duration : number;
    dueTime : number;
    message : string;
    freq : number;
    priority : number;
    reward : number;

    constructor(startTime : number, duration : number, dueTime : number, message : string, freq : number, priority : number) {
        this.startTime = startTime;
        this.duration = duration; // Please on god the duration is in SECOND
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
    }
};