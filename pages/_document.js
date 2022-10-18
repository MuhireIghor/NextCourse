import Document,{NextScript,Main,Head,Html} from 'next/document';
class MyDocument extends Document{
    render(){
        return(
            <Html lang='en'>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
export default MyDocument;