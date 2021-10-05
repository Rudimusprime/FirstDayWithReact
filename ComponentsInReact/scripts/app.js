const Header = () => {
    return <h1>Witaj na stronie</h1>
}

class Blog extends React.Component {
    render() {
        return (
            <section>
                <h2>Artykuł</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi commodi, culpa dolorum eveniet
                    fugit, id laborum perspiciatis provident sed tempora tenetur? Assumenda et fuga magnam maxime,
                    officia possimus sint?</p>
            </section>
        )
    }
}

const App = () => {
    return (
        <>
            <Header/>
            <Blog/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));