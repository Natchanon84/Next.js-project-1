import Head from "next/head"
import Image from "next/image";
import Style from "@/styles/Products.module.css"
import Link from "next/link";
export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/products?limit=50")
    const data = await res.json()
    // console.log(data);

    // return {
    //     props:{products:data.products}
    // }
    return { props: { ...data } };
}

function Index({ products }) {

    return (
        <>
            <Head>
                <title>สินค้า | Natchaaaa</title>
                <meta name="keyword" content="natchaaaa , ร้านค้า , ขายสินค้า" />
            </Head>
            <h1>สินค้าทั้งหมด</h1>
            <div className={Style.container}>
                {products.map(item => (
                    <div key={item.id}>
                        <Link href={'/products/' + item.id}>
                            <h4 className={Style.title}>{item.title}</h4>
                            <Image src={item.thumbnail} width={300} height={300} alt={item.title} className={Style.image} />
                            {/* <p className={Style.description}>{item.description}</p> */}
                            <h4 className={Style.price}>{item.price}$</h4>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Index