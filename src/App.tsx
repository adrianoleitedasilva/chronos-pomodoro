import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { Timer, TimerIcon } from 'lucide-react';
import { Container } from './components/Container';

export function App() {
  return (
    <>
      <Container>
        <section>Logo</section>
      </Container>

      <Container>
        <section>Menu</section>
      </Container>

      <Container>
        <section>Form</section>
      </Container>

      <Container>
        <section>Footer</section>
      </Container>
    </>
  );
}
