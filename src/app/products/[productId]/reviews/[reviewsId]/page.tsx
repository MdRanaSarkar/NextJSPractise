export default function ProductReview({
    params,
}:
{
    params : {reviewsId : string}
}){

    return (
        <h2>This is the Review Page {params.reviewsId} </h2>
    )
}