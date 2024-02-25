import { Back } from "../model/background.model";
let check = 0;
type Props = Back & {
    handleChangeContent(data: Back, check: number): void;
};

const ItemSalad = (prop: Props) => {
    const handleClick = () => {
            prop.handleChangeContent({ title: '24-2', content: 'khai change' }, 0);
    };
    return (
        <div>
            <div>{prop.title}</div>
            <div>{prop.content}</div>
            <button onClick={handleClick}>Change content</button>
        </div>
    );
}
export default ItemSalad;