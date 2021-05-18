import { useState, useEffect } from 'react'
import htmlToImage from 'html-to-image';
import downloadjs from 'downloadjs'

export const useWindowSize = () => {
  const isClient = typeof window === 'object'

  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export const exportFlyer = (id) => {
  const flyer = document.getElementById('flyer')
  const transform = flyer.style.transform

  // Reset Scale
  flyer.style.transform = ''

  htmlToImage.toJpeg(document.getElementById(id), {
    quality: 0.85,
  })
    .then(function (dataUrl) {
      downloadjs(dataUrl, 'volante.jpg')
      flyer.style.transform = transform

    });
}
