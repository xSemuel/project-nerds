const ButtonsShowCard = () => {
    return ( 
        <nav aria-label="..." >
            <ul className="pagination d-flex justify-content-center">
                <li className="page-item disabled">
                    <span className="page-link">Предыдущая</span>
                </li>
                <li className="page-item"><a className="page-link" href="!#">1</a></li>
                <li className="page-item active" aria-current="page">
                    <span className="page-link">2</span>
                </li>
                <li className="page-item"><a className="page-link" href="!#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="!#">Следующая</a>
                </li>
            </ul>
        </nav>
    );
}
 
export default ButtonsShowCard;