import { makeAutoObservable} from "mobx"

export default class CounterStore {
    title = "MobX Counter"
    count = 0
    //computed properties
    events: string[] = [
        `Initialized with ${this.count}`
    ]

    constructor() {
        makeAutoObservable(this)
        // makeObservable(this, {
        //     title: observable,
        //     count: observable,
        //     increment: action,
        //     decrement: action
        // })
    }

    increment = (amount = 1) => {
        this.count += amount 
        this.events.push(`Incremented by ${amount}, now the count is ${this.count}`)
    }

    decrement = (amount = 1) => {
        this.count -= amount 
        this.events.push(`Decremented by ${amount}, now the count is ${this.count}`)
    }

    //computed properties getter
    get eventCount() {
        return this.events.length
    }
}
