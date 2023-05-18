import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/countSlice'
import { RootState } from '@/app/store'

type Props = {}
const Count = (props: Props) => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <div className="flex items-center justify-center p-4">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="mx-4 text-2xl">{count}</span>
        <button
          className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
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
