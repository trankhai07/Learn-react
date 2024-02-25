import { useEffect } from "react";

type Props = {
    count: number;
    setCount(count: number): void;
}
const CountItem = (props: Props) => {
    useEffect(() => {
        console.log("use effect")
        return () => {
            props.setCount(0);
        }
    }, []); // thay đổi trogn [] thì useffect mới chạy lại 
    return (
        <>{console.log("Template")}
            <button onClick={() => props.setCount(props.count + 1)}>Increase</button>
        </>
    );
}
export default CountItem;