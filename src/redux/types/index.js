
// AUTH

export const types = {
    login: '[Auth] Login',
    logout: '[Auth] Logout',
}

// UI

export const typesUi = {
    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',
    uiStartLogin: '[UI] Login Start',
    uiEndLogin: '[UI] End Login'
}

// NOTES
export const typesNotes = {
  notesAddNew: "[Notes] New note",
  notesActive: "[Notes] Set active note",
  notesLoad: "[Notes] Load notes",
  notesUpdated: "[Notes] Updated note",
  notesFileUrl: "[Notes] Updated image url",
  notesDelete: "[Notes] Delete note",
  // cuando el usuario salga de la app y limpiamos la info en memoria
  notesLogoutCleaning: "[Notes] Logout cleaning",
};