// any file that will contain top level import or export will be considered as
// moudule. Module provide local scope for declared function, variable, class
type filterFun<T> = (a: T) => boolean;

export function getAll<T>(arr: T[], fun: filterFun<T>): T[] {
    return arr.filter((e) => fun(e), arr)
}