import * as Actions from '../../../../routes/routes_actions'

export const dispInicio = (e) => dispatch => {  
    document.body.className = '';
    dispatch(Actions.dispInicio(e));
}

