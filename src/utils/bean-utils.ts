export class BeanUtils {
    static copyProperties = (source: any, target: any) => {
        for (let key in source) {
            target[key] = source[key];
        }
    }
}