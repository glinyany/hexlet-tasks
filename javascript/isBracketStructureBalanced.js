const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

const isBracketStructureBalanced = (symbols) => {
    console.log(symbols, symbols.length);
    if (symbols.length % 2 == 0) {
        const stack = [];
        for (const symbol of symbols) {
            const openerIndex = openingSymbols.indexOf(symbol);
            const closingIndex = closingSymbols.indexOf(symbol);
            if (openerIndex >= 0) {
                stack.push(openerIndex);
            } else if (closingIndex >= 0) {
                if (stack.pop() != closingIndex) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
    return false;
};

console.log(isBracketStructureBalanced('([{{}}])')); // false


