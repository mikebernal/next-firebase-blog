import Head from 'next/head'

export default function MetaTags({ title, description=null, image=null }) {
    return (
        <main>
            <Head>
                <title>{title}</title>
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site`" content="@mikebernal_dev" />
                <meta name="twitter:title`" content={title} />
                <meta name="twitter:description`" content={description} />
                <meta name="twitter:image" content={image} />

                <meta property="og:title" content={title} />
                <meta property="og:title" content={description} />
                <meta property="og:title" content={image} />
            </Head>
        </main>
    )
}
