import Head from "next/head"
import Image from "next/image"
import Style from "@/styles/Detail.module.css"
export async function getStaticPaths() {
    const res = await fetch("https://dummyjson.com/products?limit=50")
    const data = await res.json()
    const paths = data.products.map((item) => {
        return {
            params: { id: String(item.id) }
        }
    })
    // console.log(paths);

    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }) {
    const id = params.id
    const res = await fetch("https://dummyjson.com/products/" + id)
    const data = await res.json()
    // console.log(data);

    // return {
    //     props:{products:data.products}
    // }
    return {
        props: { product: data }
    };
}

function ProductDetail({ product }) {

    return (
        <>
            <Head>
                <title>{product.title}</title>
            </Head>

            <div className={Style.container}>
                <div>
                    <Image src={product.thumbnail} width={400} height={400} alt={product.title} />
                </div>

                <div className={Style.detail}>
                    <h1>{product.title}</h1>
                    <h2>{product.brand}</h2>
                    <h4>Rating:{product.rating}/5</h4>
                    <p>{product.description}</p>
                    <h2>price:${product.price}</h2>
                    {/* <h2>หมวดหมู่: {product.category}</h2> */}
                </div>
            </div>
        </>
    )
}

export default ProductDetail