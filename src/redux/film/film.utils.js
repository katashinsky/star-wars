import {v4 as uuidv4} from 'uuid';

export function addAdditionalFields(arr, addField) {
    return arr.map(elem => {
        if(addField) elem.id = uuidv4()
        elem.selected = true
        elem.release = new Date(elem.release).getTime()
        return elem
    })
}

export function setSelectedFilm(arr, {key, value}) {
    let selectedItem = {}
    let modifiedArray = arr.map(item => {
        item.selected = false

        if (item[key] === value) {
            selectedItem = item
            item.selected = true
        }

        return item
    })


    return {selectedItem, modifiedArray}
}