import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { Timer, TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá Mundooooo
        <button>
          <TimerIcon />
        </button>
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
