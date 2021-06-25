import Container from '@material-ui/core/Container'
import {Link} from 'react-router-dom'

function Navigation(){

    return (
        <div>
            <nav>
                    <Container maxWidth="lg">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/show/1">1</Link>
                    </Container>
            </nav>
        </div>
    )
}

export default Navigation
