const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfstrings: Array<string> = ['One', 'Two']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfstrings)
