export default function ProductDetail({
    params,
 } : {
    params : {productId : string};
}){
    return (
        <h2>This is the Product Details Page {params.productId }</h2>
    )
}