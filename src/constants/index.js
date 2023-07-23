const COLORS = {
    primary: "#003131",
    secondary: "#E9E9E9",
    accent: "#1F936D"
}

const SIZES = {
    padding: 19,
    borderRadius: 15,
    textBoxRadius: 25,
    h1: 24,
    h2: 20
}

const FONTS = {
    h1_semiBold: { fontSize: SIZES.h1 },
    h2_semiBold: { fontSize: SIZES.h2 }
}

const SHADOW = {
    elevation: 5,
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 2, height: 12 },
    shadowRadius: 12,
}

const DIALOG_CONST= {
    DELETE_ITEM_TITLE: 'DELETE ITEM',
    DELETE_ITEM_MESSAGE: 'Are you sure you want to delete this item?',
    ADD_ITEM_TITLE: 'ADD ITEM',
    ADD_ITEM_MESSAGE: 'Do you want to add new item?',
    UPDATE_ITEM_TITLE: 'UPDATE ITEM',
    UPDATE_ITEM_MESSAGE: 'Do you want to update selected item?',
    POSITIVE_BUTTON_LABEL: 'OK',
    NEGATIVE_BUTTON_LABEL: 'CANCEL',
}

const COMMON_CONST= {
    ADD_NEW_TASK: 'New Task',
    EMPTY_INPUT_FIELD_ERROR : 'Please type in something!'
}

export { COLORS, SIZES, FONTS, SHADOW, DIALOG_CONST, COMMON_CONST}