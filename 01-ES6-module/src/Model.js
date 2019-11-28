console.log("Model ... ");
// export 的使用
// 写法一:
// export const a = 1;

// 写法二:
// const a = 2;
// export { a };

// 写法三:
// const a = 3;
// export { a };

// 写法四:
// const a = 4;
// export { a as a1 }; // export时as关键字重命名变量a的名字为a1,所以在引入时用a1

// 写法五
/*
注意点:
 1. 一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。
 2. 正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
 3. export default导出的模块,import时变量名可以用随意合法的名称
*/
const a = 5;
export default a;

