// Components
import Head from "../Head/Head";

interface ILayout {
    children: React.ReactNode;
    className: string;
    head: {
        title: string;
        description: string;
        canonical: string;
        robots?: boolean;
    }
}

const Page = (props: ILayout) => {

    return (
        <>
            <Head {...props.head} />
            <main className={props.className}>
                {props.children}
            </main>
        </>
    )
}

export default Page


