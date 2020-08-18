export declare function everyIterate(item: any, index: number, list: any): any;

/**
 * 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回 true,则返回 true,否则返回 false
 * @param array 数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function every(array: any[], iterate: typeof everyIterate, context?: any): any[];

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回 true,则返回 true,否则返回 false
     * @param array 数组
     * @param iterate 回调
     * @param context 上下文
     */
    every: typeof every;
  }
}

export default every
