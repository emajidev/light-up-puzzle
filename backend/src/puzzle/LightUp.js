import get_matriz from '../functionalities/matriz'
import view_matriz from '../functionalities/view_matriz'
import mapper from '../functionalities/mapper'


export class LightUp {

    constructor() {
     
        this.matriz = get_matriz()
    }
    init() {
        //view_matriz(this.matriz);
        let result = this.solution(this.matriz);
        return result;
    }
    solution(matriz) {
        let map = mapper(matriz)
        let lights_json = JSON.stringify(this.radar(map), null, 4)
        let lights = this.radar(map)
        let solution = this.compare(map, lights)
        return solution
    }
    radar(map) {
        let directions = ["left", "top", "right", "botton"]
        let lights = []
        map.forEach(e => {
            let light_point
            let row = e.row
            let col = e.col
            let val = e.value
            if (val == 1) { return }
            let left
            let top
            let right
            let botton

            directions.forEach(dir => {
                // las columnas van de derecha a izquierda
                // las filas van de arriba abajo

                //console.log("col", row, ",", col)
                if (dir == "left") {
                    left = this.y_ray(row, col, map, "col")
                    console.log(row, col)
                    console.log("left",left) 
                }
                if (dir == "top") {
                    top = this.y_ray(row, col, map, "row")
                    //console.log(data)
                }
                if (dir == "right") {
                    let size_col = this.matriz[0].length
                    right = this.x_ray(row, col, map, "col", "++",size_col)
                    //console.log(data)
                }
                if (dir == "botton") {
                    let size_row = this.matriz.length
                    botton = this.x_ray(row, col, map, "row", "++",size_row)
                    //console.log(data)
                }
                light_point = {
                    point: [row, col],
                    left, top, right, botton
                }

            });
            lights.push(light_point)
        });
        return lights
    }
    y_ray(row, col, map, target, dir = "--") {
        let pos = (target == "col") ? col : row
        if (pos > 0) {
            let point
            let list = []
            while (pos > 0) {
                if (dir == "--") { pos-- }
                if (dir == "++") { pos++ }

                if (target === "col") {
                    point = map.find(e => e.row == row && e.col == pos);
                }
                if (target === "row") {
                    point = map.find(e => e.row == pos && e.col == col);
                }
                if (point.value == 0) {
                    list.push([point.row, point.col])
                    //console.log(list) 
                } else {
                    break
                }

            }
            return list
        } else {
            return []
        }
    }
    x_ray(row, col, map, target, dir = "--",n) {
        let pos = (target == "col") ? col : row
        if (pos >= 0 || pos < n-1) {
            let point
            let list = []
            while (pos >= 0 && pos < n-1) {
                if (dir == "--") { pos-- }
                if (dir == "++") { pos++ }

                if (target === "col") {
                    point = map.find(e => e.row == row && e.col == pos);
                }
                if (target === "row") {
                    point = map.find(e => e.row == pos && e.col == col);
                }
                if (point.value == 0) {
                    list.push([point.row, point.col])
                    //console.log(list) 
                } else {
                    break
                }

            }
            return list
        } else {
            return []
        }
    }
    compare(map, lights) {
        let light_select = []
        /* let max = this.get_max(lights)
        console.log("max",max)
        let list_concat = max.left.concat(max.top, max.right, max.botton)
        console.log("list_concat",list_concat) */

        while (true) {
            console.log("lights size=", lights.length)
            let max = this.get_max(lights)
            light_select.push(max)
            let list_remove = []
            console.log("max",max)
            let list_concat = max.left.concat(max.top, max.right, max.botton)
            list_concat.forEach(e => {
                let point = lights.find(element => element.point[0] == e[0] && element.point[1] == e[1]);
                list_remove.push(point)
            });
            list_remove.forEach(element => {
                this.removeItemFromArr(lights, element);
            });
            this.removeItemFromArr(lights, max);
            //console.log("lights size=", lights.length)
            if(lights.length == 0){
                break   
            }
        }
        // light selected for solution
        console.log(light_select)
        return light_select
    }
    get_max(lights) {
        let max = 0;
        let light
        // get the maximum
        for (let i = 0; i < lights.length; i++) {
            console.log("get max",lights[i])
            let size = lights[i].left.length + lights[i].top.length + lights[i].right.length + lights[i].botton.length
            if (max < size) {
                max = size;
                light = lights[i]
            }
            if(size==0){
                return lights[i]
            }
        }
        return light
    }
    walls(map) {
        let walls = []
        map.forEach((element, index) => {
            if (element.value == 1) {
                walls.push({ row: element.row, col: element.col, value: element.value, index })
            }
        });
        return walls
    }
    removeItemFromArr(arr, item) {
        var i = arr.indexOf(item);

        if (i !== -1) {
            arr.splice(i, 1);
        }
    }
}
