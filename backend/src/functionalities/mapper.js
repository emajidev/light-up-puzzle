export default function mapper(matriz) {
    let map = []
    matriz.forEach((row, r_index) => {
        row.forEach((val, c_index) => {
            let data = {  row: r_index, col: c_index , value: val }
            map.push(data)
        })
    });
    return map
}