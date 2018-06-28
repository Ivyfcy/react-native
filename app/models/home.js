// import { Storage } from '../utils'

export default {
    namespace: 'home',
    state: {
        otherchange: false
    },
    reducers: {
        save(state, { payload }) {
            return { ...state, ...payload }
        }
    },
    effects: {
        *change({ payload: { otherchange } }, { call, put }) {
            yield put(
                {
                    type: 'save',
                    payload: {
                        otherchange: otherchange
                    }
                }
            )
        }
    },
    subscriptions: {
        setup({ dispatch }) {
            dispatch({ type: 'loadAudioType' })
        }
    }
}
