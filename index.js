function duplicate(list) {
    const map = new Map();//ключ - элемент, значение - был ли вставлен
    let result = [];
    for (const item of list) {
        if(map.has(item)&&!map[item]) {
            result.push(item);
            map[item]=true
        }else{
            map.set(item,false);
        }
    }
    return result;
}


const emails =
    [
        'lyhxr@example.com',
        'lyhxr@example.com',
        'masha@example.com',
        'fedya@example.com',
        'katya@example.com',
        'fedya@example.com',
        'katya@example.com',
        'lyhxr@example.com',
    ];
const val = duplicate(emails);
console.log(val); // [ 'lyhxr@example.com', 'fedya@example.com', 'katya@example.com' ]