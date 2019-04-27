import { listUsersSuccess, LIST_USERS_SUCCESS, listUsersError, LIST_USERS_ERROR } from "."

describe('users actions', () => {
    
    it('should create an action to notify user list was successful', () => {
        const users = [
            { id: 1, name: 'kaio' }
        ]
        expect(listUsersSuccess(users)).toEqual({
            type: LIST_USERS_SUCCESS,
            payload: { users }
        })
    })

    it('should create an action to notify user list failed', () => {
        const error = new Error('Network error')
        expect(listUsersError(error)).toEqual({
            type: LIST_USERS_ERROR,
            payload: error,
            error: true,
        })
    })

})