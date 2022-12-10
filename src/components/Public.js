import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Billie Jean's Auto Shop!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Ardmore City, Billie Jean's Auto Shop provides a trained staff ready to meet your auto body needs.</p>
                <address className="public__addr">
                    Billie Jean's Auto Shop<br />
                    869 Billie Jean st<br />
                    Ardmore City, KY 12345<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Billie Jean Kleen</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public