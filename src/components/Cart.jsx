
import { Box } from '@mui/material';





export const Cart = (props) => {
    const { title, cost, image, count, articul } = props

    return (
        <Box >
            <table>
                <tbody>
                    <tr>
                        <td><img src={image} alt={title} className="goods-block img"/></td>
                        <td>{title}</td>
                        <td>{cost}</td>
                        <td>{count}</td>
                        <td>{cost * count}</td>
                        <td>
                            <button className='minus-from-cart' data-key={articul}>-</button>
                        </td>
                        <td>
                            <button className='remove-from-cart' data-key={articul}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Box >
    )
}
