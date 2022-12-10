import Head from "next/head";
interface prop {
    title: string
    ico: string
}
export default function HeadComp({ title, ico }: prop): JSX.Element {
    return <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href={`/static/ico/${ico}`} />
    </Head>
}