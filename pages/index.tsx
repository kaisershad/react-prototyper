import Link from 'next/link';
import Container from '@material-ui/core/Container';

const Index = () => (
  <div>
    <Container maxWidth="sm">
      <Link href="/about">
        <a>About</a>
      </Link>
      <p>React Prototyper</p>
    </Container>
  </div>
);

export default Index;