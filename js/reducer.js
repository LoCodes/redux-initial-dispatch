// let state 
let state

function changeState(state = {count: 0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}


dispatch({ type: '@@INIT' }) // if we want to render state default -> 0

dispatch({type: 'INCREASE_COUNT'}) // now new return is 1 NOT 0 
