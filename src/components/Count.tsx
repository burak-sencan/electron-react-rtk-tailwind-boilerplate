import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/countSlice'
import { RootState } from '@/app/store'

type Props = {}
const Count = (props: Props) => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
    <div className="flex justify-center p-4 items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span className="mx-4 text-2xl">{count}</span>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  </div>
  
  )
}
export default Count
