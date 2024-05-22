export const updObjInArray = <T extends Record<string, unknown>, J extends Partial<T>>(items:T[] = [], objProp:keyof T, id:number, newObjProps:J) => {
        return items.map(el => {
            if (el[objProp] === id) {
                return {...el, ...newObjProps}
            }
            return el
        })
}
