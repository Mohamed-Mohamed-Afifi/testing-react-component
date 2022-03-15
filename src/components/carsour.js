import {Carousel} from 'react-bootstrap';
export default function Cursor(props){
    return(
    <div className="caro mb-4">
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://s3.amazonaws.com/tasmeemme.project.mi.thumbnails/resize_805x9000/637/140637.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p className="mb-4">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://lh3.googleusercontent.com/proxy/9wq5nkKcrtQcWHPY0JJ4v_057cUjXkyeEvYagVNavNP5uQYjY5JX9evTSUoZqXGXNJ2QLtQ0_KymsAfLXz2KwUqkLwOB9j20Qcns-NDKZr1VtR7wrA"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://s3.amazonaws.com/tasmeemme.project.mi.thumbnails/resize_805x9000/637/140637.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p className="mb-4">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
</div>
    )
}