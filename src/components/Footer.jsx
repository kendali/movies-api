
const Footer = () => {
    return (
        <footer className="bg-main">
            <div className="container p-3">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <i className="fa-solid fa-video fs-1 f-four"></i>
                    </div>
                    <div className="col-md-4 text-center">
                        <i className="fa-brands fa-facebook px-2 fs-2 text-secondary"></i>
                        <i className="fa-brands fa-instagram px-2 fs-2 text-secondary"></i>
                        <i className="fa-brands fa-x-twitter  fs-2 text-secondary"></i>
                    </div>
                    <div className="col-md-4 f-four text-end fw-semibold">
                        © 2022 All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
