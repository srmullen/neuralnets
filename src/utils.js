export function exportToWindow (obj) {
    for (let o in obj) {
        if (obj.hasOwnProperty(o)) {
            window[o] = obj[o];
        }
    }
}
