interface Rect {
    readonly id: string
    color?: string
    size: {
        wight: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        wight: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12345',
    size: {
        wight: 10,
        height: 5
    }
}

rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{}

//================

interface RecrWithArea extends Rect {
    getArea: () => number
}

const rect5: RecrWithArea = {
    id: '123',
    size: {
        wight: 20,
        height: 20
    },
    getArea(): number {
        return this.size.wight * this.size.height
    }
}

// ===============

interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

// ========================

interface Styles {
    [key: string]: string
    // border: string,
    // marginTop: string,
    // borderRadius: string,
}

const css: Styles = {
    border: "1px solid red",
    marginTop: "2px",
    borderRadius: '5px'

}