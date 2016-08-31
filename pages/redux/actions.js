
export const actionTypes = {
    //change color
    CHANGE_COLOR: 'CHANGE_COLOR',

    // change bg color
    CHNAGE_BACKGROUND_COLOR: 'CHANGE_BACKGROUND_COLOR'
};


export function changeColor(color) {
    return {
        type: actionTypes.CHANGE_COLOR,
        color: color
    };
}

export function changeBgColor(color) {
    return {
        type: actionTypes.CHNAGE_BACKGROUND_COLOR,
        bgColor: color
    };
}