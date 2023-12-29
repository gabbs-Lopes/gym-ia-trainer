import Rodape from 'componentes/Rodape';
import RodapeWeb from 'componentes/RodapeWeb';
import React, { useState, useEffect } from 'react'

export default function WidthFooter() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {

    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderRodape = () => {
    if (width < 550) {
      return <Rodape />;
    } else {
      return <RodapeWeb />;
    }
  };

  return (
    <>
      {renderRodape()}
    </>
  )
}
