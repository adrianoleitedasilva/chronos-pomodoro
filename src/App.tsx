import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  console.log('oi do careca');

  return (
    <>
      <Heading attr={123} attr2='Careca'>
        Olá Mundooooo
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque
        consectetur reiciendis autem expedita debitis, aut excepturi quidem
        corrupti sequi nemo quasi. Tenetur quos vero molestias adipisci ratione
        rerum facilis.
      </p>
    </>
  );
}
