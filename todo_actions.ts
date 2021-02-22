type filterFun<T> = (a: T) => boolean;

export function getAll<T>(arr: T[], fun: filterFun<T>): T[] {
    return arr.filter((e) => fun(e), arr)
}