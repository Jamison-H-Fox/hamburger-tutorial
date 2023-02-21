import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks/hooks';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  const styleObj = {
    fontSize: 140,
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
        <div>
          <h1>Hello. This is burger menu tutorial</h1>
          <h2 style={styleObj}>🍔</h2>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
