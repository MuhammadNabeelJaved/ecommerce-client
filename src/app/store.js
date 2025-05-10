import { configureStore } from '@reduxjs/toolkit'
import reducer from '../features/demoSilce/slice.js'

export default configureStore({
    reducer: { reducer },
})