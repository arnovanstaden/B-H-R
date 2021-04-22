// Components
import Head from "../../Head/Head";
import FooterContact from "../Footer/Contact/Contact";

interface ILayout {
    children: React.ReactNode;
    className: string;
    contact?: boolean;
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
                <FooterContact contact={props.contact} />
            </main>
        </>
    )
}

export default Page


