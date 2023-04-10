import React, { useState, useEffect } from 'react'
import { IProduct } from '../type/product'

// interface IProps {
//     products: IProduct[],
//     onRemove: (id: number) => void
// }

const ProductPage = () => {
    //     const [data, setData] = useState<IProduct[]>([])

    //     useEffect(() => {
    //         setData(props.products)
    //     }, [props])

    //     const removeProduct = (id: number) => {
    //         // Xóa sản phẩm khỏi danh sách sản phẩm hiện tại
    //         const newData = data.filter(item => item._id !== id)

    //         // Cập nhật lại state `data` của component
    //         setData(newData)

    //         // Gọi hàm `props.onRemove` để xóa sản phẩm khỏi danh sách sản phẩm gốc
    //         props.onRemove(id)
    //     }

    return (
        <div>
            <h1>ProductPage</h1>

        </div>
    )
}

export default ProductPage
