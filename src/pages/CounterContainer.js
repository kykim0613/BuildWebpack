import { useDispatch, useSelector } from "react-redux"
import { decrease, increase } from "../modules/Counter"
import Counter from "./Counter"

const CounterContainer = () => {
    const {number, diff} = useSelector(state = > ({
        number: state.counter.number,
        diff: state.counter.diff
    }))
    const dispatch = useDispatch()
    const onIncrease = () => dispatch(increase())
    const onDecrease = () => dispatch(decrease())
    const onSetDiff = diff => dispatch(setDiff(diff))
    
    return (
        <Counter
        number={number}
        diff = {diff}
        onIncrease={onIncrease}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onsetdiff
        }
        />
    )
}

export default CounterContainer;