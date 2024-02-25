import logoImage from '../assets/images.jpg'
import { Back } from '../model/background.model';
type Props = Back & {
    handleRemoveContent(id: string): void
}
const CardItem = (props: Props) => {
    return (
        <div className="card-items" onClick={() => props.handleRemoveContent(props.id!)}>
            <img className="card-image-background" src={logoImage} alt='khaiDev' />
            <div style={{ height: '50%', width: '100%' }}></div>
            <div className='card-content'>
                <div>
                    <div style={{ fontSize: '20px', fontWeight: 600, color: '#fff' }}>{props.title}</div>
                    <div style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginTop: '.5rem' }}>{props.content}</div>
                </div>
            </div>
        </div>
    );
}
export default CardItem;