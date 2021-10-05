const header = <h1 className="title">Witaj na stronie</h1>
const classBig = "big";
const handleClick = () => alert("klik");
const main = (
    <div>
        <h1 className="red" onClick={handleClick}>Pierwszy artykuł</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo obcaecati provident quas sit velit veritatis,
            voluptate! Asperiores atque ea eius, est exercitationem laudantium mollitia, nobis quo quos suscipit,
            temporibus voluptatem.</p>
    </div>
)
const text = "stopkakakakaka";
const largeText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto beatae consequatur eaque" +
    " eos excepturi explicabo, fuga in incidunt iusto natus nihil nulla officiis, omnis repellendus sint, totam ullam velit.";
const footer = (
    <footer>
        <p className={classBig}>{text}</p>
        {largeText}
    </footer>
)
const app = [header, main, footer];

ReactDOM.render(app, document.getElementById('root'));