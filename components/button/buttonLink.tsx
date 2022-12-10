
interface prop {
    link: string
    title: string
}
export default function ButtonLink({ link, title }: prop): JSX.Element {
    return (
        <a href={link} target='_black'><button>{title}</button></a>
    )
}